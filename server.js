// Dependencies
// Load environment variables from .env
require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");

// App Configuration
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Databases
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

// Routes

// Error Handling

// Server - Port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
