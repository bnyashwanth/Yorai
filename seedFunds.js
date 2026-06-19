const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "yorai"; 

const dummyFunds = {
  availableMargin: 150000.50,
  usedMargin: 0.00,
  availableCash: 150000.50,
  openingBalance: 150000.50,
  payin: 0.00,
  createdAt: new Date(),
  updatedAt: new Date()
};

async function main() {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("funds");
    
    // Clear old data and insert fresh funds
    await collection.deleteMany({});
    await collection.insertOne(dummyFunds);
    console.log("Successfully deposited ₹1,50,000 into your wallet!");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();