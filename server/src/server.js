// server.js
import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = 3001; // <-- different port than React dev server (3000)

app.get("/api/users", async (req, res) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});