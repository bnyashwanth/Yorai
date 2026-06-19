import mongoose, { Schema, models } from "mongoose";

const OrderSchema = new Schema(
  {
    name: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
    mode: { type: String, enum: ["BUY", "SELL"], required: true },
    status: { type: String, enum: ["COMPLETED", "REJECTED", "OPEN", "CANCELLED"], default: "COMPLETED" },
    product: { type: String, enum: ["MIS", "CNC"], default: "CNC" },
    exchange: { type: String, enum: ["NSE", "BSE"], default: "NSE" },
  },
  { timestamps: true }
);

const Order = models.Order || mongoose.model("Order", OrderSchema);

export default Order;