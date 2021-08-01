import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import cors from "cors";
import passport from "passport";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import data from "./data.js";
import User from "./models/userModel.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(
  cors({
    origin: "http://localhost:3000", //  <-- Location of React app
    credentials: true,
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {},
  })
);

app.use(cookieParser(process.env.SESSION_SECRET));

const MONGO_LOCAL_URL = "mongodb://localhost:27017/usersDB";

mongoose.connect(
  process.env.MONGODB_URI || MONGO_LOCAL_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log("Mongoose is connected.");
  }
);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(passport.initialize());
app.use(passport.session());

// Routes
// Test
app.post(
  "/api/users/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  function (req, res) {
    console.log(JSON.stringify(req.user));
    res.send(req.user);
  }
);
app.post("/register", (req, res) => {
  console.log("Registering user");
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    function (err) {
      if (err) {
        console.log("Error while registering user!", err);
        res.send("User already exists.");
        res.redirect("/login");
      }

      console.log("User registered!");
      res.redirect("/");
    }
  );
});

// Api Routes
app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x.id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found in the back." });
  }
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/users/login", (req, res) => {
  if (req.isAuthenticated) {
    res.send({ isAuth: true, user: req.session.user });
  } else {
    res.send({ isAuth: false });
    // res.redirect("/");
  }
});

app.get("/api/users/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running!");
});
