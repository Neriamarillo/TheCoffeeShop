import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import cors from "cors";
import passport from "passport";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import data from "./data.js";
import User from "./models/userModel.js";
import Order from "./models/orderModel.js";
import Product from "./models/productModel.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// app.use(cors());
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
// User routes
app.post(
  "/api/users/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  function (req, res) {
    console.log(JSON.stringify(req.user));
    res.send(req.user);
  }
);
app.get("/api/users/login", (req, res) => {
  if (req.isAuthenticated) {
    res.send({ isAuth: true, user: req.session.user });
  } else {
    res.send({ isAuth: false });
    // res.redirect("/");
  }
});

app.post("/api/users/register", (req, res) => {
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

// Order routes
app.post("/api/orders", async (req, res) => {
  if (req.body.orderItems.length === 0) {
    res.status(400).send({ message: "Cart is empty" });
  } else {
    const order = new Order({
      orderItems: req.body.orderItems,
      itemsPrice: req.body.itemsPrice,
      taxPrice: req.body.taxPrice,
      totalPrice: req.body.totalPrice,
      user: req.user._id,
    });
    const createdOrder = await order.save();
    res.status(201).send({ message: "New order created", order: createdOrder });
  }
});
// app.get("/api/orders", async (req, res) => {
//   const orders = await Order.find({ user: req.user._id });
//   res.send(orders);
// });

app.get("/api/orders/:id", async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    res.send(order);
  } else {
    res.statys(404).send({ message: "Order not found" });
  }
});

// Api Routes
app.get("/api/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found in the back." });
  }
});

app.get("/api/products", async (req, res) => {
  // res.send(data.products);
  const products = await Product.find({});
  res.send(products);
});

app.get("/api/users/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running!");
});
