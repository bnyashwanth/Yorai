    import mongoose, { Schema, models } from "mongoose";

const FundSchema = new Schema(
  {
    availableMargin: { type: Number, default: 0 },
    usedMargin: { type: Number, default: 0 },
    availableCash: { type: Number, default: 0 },
    openingBalance: { type: Number, default: 0 },
    payin: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Fund = models.Fund || mongoose.model("Fund", FundSchema);

export default Fund;