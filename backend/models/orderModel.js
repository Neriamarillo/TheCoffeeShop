import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        name: { type: String },
        qty: { type: Number },
        image: { type: String },
        price: { type: Number },
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      },
    ],
    itemsPrice: { type: Number },
    taxPrice: { type: Number },
    totalPrice: { type: Number },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Order = new mongoose.model("Order", orderSchema);

export default Order;
