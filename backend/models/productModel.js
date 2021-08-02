import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String },
    image: { type: String },
    brand: { type: String },
    desription: { type: String },
    price: { type: Number },
    stock: { type: Number },
    rating: { type: Number },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
