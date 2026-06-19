"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "@/lib/mongodb";
import Order from "@/models/Order";
import Fund from "@/models/Fund";
import Position from "@/models/Position";

export async function placeOrderAction(formData: {
  symbol: string;
  qty: number;
  price: number;
  mode: "BUY" | "SELL";
}) {
  const { symbol, qty, price, mode } = formData;
  const totalCost = qty * price;

  try {
    await connectToDatabase();

    // 1. Fetch current wallet balance
    const fund = await Fund.findOne({});
    if (!fund && mode === "BUY") {
      return { error: "Wallet infrastructure not initialized." };
    }

    // 2. Validate funds if buying
    if (mode === "BUY" && fund.availableMargin < totalCost) {
      // Create a rejected order document for history
      await Order.create({
        name: symbol,
        qty,
        price,
        mode,
        status: "REJECTED",
      });
      revalidatePath("/dashboard/orders");
      return { error: "Insufficient margin available." };
    }

    // 3. Update Balance (Deduct if BUY, Add if SELL)
    if (mode === "BUY") {
      fund.availableMargin -= totalCost;
      fund.usedMargin += totalCost;
    } else {
      fund.availableMargin += totalCost;
      fund.usedMargin -= totalCost; // Simple reversing logic for prototyping
    }
    await fund.save();

    // 4. Create Successful Order Document
    await Order.create({
      name: symbol,
      qty,
      price,
      mode,
      status: "COMPLETED",
    });

    // 5. Update open Positions (Upsert logic)
    const existingPosition = await Position.findOne({ name: symbol });

    if (existingPosition) {
      if (mode === "BUY") {
        // Recalculate average cost basis
        const totalQty = existingPosition.qty + qty;
        const newAvg = ((existingPosition.avg * existingPosition.qty) + totalCost) / totalQty;
        existingPosition.qty = totalQty;
        existingPosition.avg = newAvg;
      } else {
        existingPosition.qty -= qty;
      }

      if (existingPosition.qty <= 0) {
        await Position.deleteOne({ _id: existingPosition._id });
      } else {
        await existingPosition.save();
      }
    } else if (mode === "BUY") {
      // First time buying this stock asset
      await Position.create({
        product: "MIS",
        name: symbol,
        qty,
        avg: price,
        price: price, // Current LTP matching entry price
        net: "0.00%",
        day: "0.00%",
        isLoss: false,
      });
    }

    // 6. Force Next.js to purge its cache and pull fresh DB rows instantly
    revalidatePath("/dashboard");
    revalidatePath("/dashboard/orders");
    revalidatePath("/dashboard/positions");
    revalidatePath("/dashboard/funds");

    return { success: true };

  } catch (error) {
    console.error("Order Execution Failure:", error);
    return { error: "Internal execution system failure." };
  }
}