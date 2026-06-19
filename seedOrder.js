const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "yorai"; 

const dummyOrders = [
  { name: "RELIANCE", qty: 50, price: 2950.20, mode: "BUY", status: "COMPLETED", product: "CNC", exchange: "NSE", createdAt: new Date(Date.now() - 1000 * 60 * 5) },
  { name: "TCS", qty: 10, price: 3845.00, mode: "SELL", status: "COMPLETED", product: "CNC", exchange: "NSE", createdAt: new Date(Date.now() - 1000 * 60 * 25) },
  { name: "HDFCBANK", qty: 100, price: 1450.75, mode: "BUY", status: "REJECTED", product: "MIS", exchange: "BSE", createdAt: new Date(Date.now() - 1000 * 60 * 45) },
  { name: "INFY", qty: 25, price: 1420.10, mode: "BUY", status: "OPEN", product: "CNC", exchange: "NSE", createdAt: new Date(Date.now() - 1000 * 60 * 60) },
  { name: "ICICIBANK", qty: 200, price: 1080.50, mode: "SELL", status: "CANCELLED", product: "MIS", exchange: "NSE", createdAt: new Date(Date.now() - 1000 * 60 * 120) },
  { name: "WIPRO", qty: 500, price: 450.25, mode: "BUY", status: "COMPLETED", product: "CNC", exchange: "NSE", createdAt: new Date(Date.now() - 1000 * 60 * 180) },
  { name: "ITC", qty: 150, price: 420.60, mode: "BUY", status: "COMPLETED", product: "CNC", exchange: "BSE", createdAt: new Date(Date.now() - 1000 * 60 * 240) },
  { name: "ZOMATO", qty: 1000, price: 185.40, mode: "SELL", status: "COMPLETED", product: "MIS", exchange: "NSE", createdAt: new Date(Date.now() - 1000 * 60 * 300) },
  { name: "SBIN", qty: 75, price: 760.30, mode: "BUY", status: "REJECTED", product: "MIS", exchange: "NSE", createdAt: new Date(Date.now() - 1000 * 60 * 360) },
  { name: "TATAMOTORS", qty: 40, price: 980.15, mode: "BUY", status: "OPEN", product: "CNC", exchange: "NSE", createdAt: new Date(Date.now() - 1000 * 60 * 400) }
];

async function main() {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("orders");
    
    await collection.deleteMany({});
    await collection.insertMany(dummyOrders);
    console.log("Successfully seeded 10 diverse orders!");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();