// import dotenv from "dotenv";
import express from "express";
import data from "./data.js";

// dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

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

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running!");
});
