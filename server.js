// Dependencies
// Load environment variables from .env
require("dotenv").config();

const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
