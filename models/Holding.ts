import mongoose, { Schema, models } from "mongoose";

const HoldingSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    avg: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    net: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Holding = models.Holding || mongoose.model("Holding", HoldingSchema);

export default Holding;