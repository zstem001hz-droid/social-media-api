// Dependencies
// Load environment variables from .env
require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");

// App Configuration
const app = express(); // Express application instance
const PORT = process.env.PORT || 3001; // Falls back to 3001 in development

// Middleware
app.use(express.json());

// Database - Connection string
const uri = process.env.MONGO_URI; // Atlas connection string from .env
const client = new MongoClient(uri); // MongoDB driver client instance

// Routes
// GET / Health check and database connection verification
app.get("/", async (req, res) => {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 }); // Verify connection is live
    res
      .status(200)
      .json({ message: "Successfully connected to the database!" });
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ message: "Failed to connect to database" });
  } finally {
    await client.close(); // Always - release the connection
  }
});

// Error Handling

// Server - Port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
