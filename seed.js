// seed.js
const { MongoClient } = require("mongodb");

// Adjust this URL if your local port/db name is different
const url = "mongodb://localhost:27017";
const dbName = "yorai"; 

const dummyHoldings = [
  {
    name: "RELIANCE",
    qty: 10,
    avg: 2450.50,
    price: 2950.20,
    net: "+20.39%",
    day: "+1.25%",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "TCS",
    qty: 5,
    avg: 3200.00,
    price: 3420.10,
    net: "+6.88%",
    day: "-0.45%",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "INFY",
    qty: 15,
    avg: 1650.25,
    price: 1450.75,
    net: "-12.09%",
    day: "-1.10%",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "HDFCBANK",
    qty: 25,
    avg: 1380.00,
    price: 1450.75,
    net: "+5.13%",
    day: "+0.82%",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

async function main() {
  const client = new MongoClient(url);
  try {
    await client.connect();
    console.log("Connected to MongoDB...");
    const db = client.db(dbName);
    
    // Insert into the 'holdings' collection (Mongoose automatically lowercases and pluralizes 'Holding' to 'holdings')
    const collection = db.collection("holdings");
    
    // Clear old ones if any exist to prevent infinite compounding data
    await collection.deleteMany({});
    
    await collection.insertMany(dummyHoldings);
    console.log("Successfully seeded dummy holdings data!");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();