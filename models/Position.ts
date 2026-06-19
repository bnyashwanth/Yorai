import mongoose, { Schema, models } from "mongoose";

const PositionSchema = new Schema(
  {
    product: { type: String, required: true },
    name: { type: String, required: true },
    qty: { type: Number, required: true },
    avg: { type: Number, required: true },
    price: { type: Number, required: true },
    net: { type: String, required: true },
    day: { type: String, required: true },
    isLoss: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Position = models.Position || mongoose.model("Position", PositionSchema);

export default Position;