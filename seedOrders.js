const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "yorai"; 

// Helper to set realistic times for "today" (e.g., 9:15 AM market open)
const today = new Date();
const t = (hours, minutes, seconds) => new Date(today.getFullYear(), today.getMonth(), today.getDate(), hours, minutes, seconds);

const realisticOrders = [
  // 1. The Morning Rush: Failed attempt due to margin, then a successful smaller buy
  { name: "RELIANCE", qty: 25, price: 2942.00, mode: "BUY", status: "REJECTED", product: "CNC", exchange: "NSE", createdAt: t(9, 15, 4) },
  { name: "RELIANCE", qty: 12, price: 2945.35, mode: "BUY", status: "COMPLETED", product: "CNC", exchange: "NSE", createdAt: t(9, 16, 22) },
  
  // 2. The Intraday Scalp: Bought 125 shares of HDFC, sold them 45 mins later for a ₹4 profit
  { name: "HDFCBANK", qty: 125, price: 1438.15, mode: "BUY", status: "COMPLETED", product: "MIS", exchange: "BSE", createdAt: t(10, 5, 11) },
  { name: "HDFCBANK", qty: 125, price: 1442.90, mode: "SELL", status: "COMPLETED", product: "MIS", exchange: "BSE", createdAt: t(10, 52, 45) },

  // 3. The Odd Lot: Buying a weird number of expensive shares for long-term holding
  { name: "TCS", qty: 7, price: 3812.50, mode: "BUY", status: "COMPLETED", product: "CNC", exchange: "NSE", createdAt: t(11, 30, 0) },

  // 4. The Canceled Limit Order: Tried to catch the falling knife, gave up
  { name: "ICICIBANK", qty: 200, price: 1078.00, mode: "BUY", status: "CANCELLED", product: "MIS", exchange: "NSE", createdAt: t(13, 10, 15) },

  // 5. The Afternoon Portfolio Trim: Selling off a chunk of old holdings
  { name: "INFY", qty: 43, price: 1422.85, mode: "SELL", status: "COMPLETED", product: "CNC", exchange: "NSE", createdAt: t(14, 15, 33) },

  // 6. The Heavy Volume Trade: Big quantity on a cheaper stock
  { name: "ZOMATO", qty: 850, price: 184.25, mode: "BUY", status: "COMPLETED", product: "CNC", exchange: "NSE", createdAt: t(14, 45, 10) },

  // 7. The Open Limit Order: Waiting for Tata Motors to hit a specific price before market close
  { name: "TATAMOTORS", qty: 35, price: 985.45, mode: "BUY", status: "OPEN", product: "CNC", exchange: "NSE", createdAt: t(15, 10, 5) },
];

async function main() {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("orders");
    
    await collection.deleteMany({}); // Wipe the robotic data
    await collection.insertMany(realisticOrders);
    console.log("Successfully seeded realistic trading history!");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();