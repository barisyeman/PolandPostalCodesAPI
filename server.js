require("dotenv").config();
const express = require("express");
const mysql = require("mysql");

const app = express();
const PORT = process.env.PORT || 3000;

// MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("MySQL connection successful");
  }
});

// Get all addresses
app.get("/api/all", (req, res) => {
  db.query("SELECT * FROM address", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Get address according to specified postal code
app.get("/api/:postal_code", (req, res) => {
  const { postal_code } = req.params;
  db.query(
    "SELECT * FROM address WHERE postal_code = ?",
    [postal_code],
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (results.length === 0) {
        return res.status(404).json({ message: "Address not found" });
      }
      res.json(results);
    }
  );
});

// Start Server
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} work on this port...`);
});
