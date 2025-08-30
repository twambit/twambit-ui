// server.js
import express from "express";
import cors from "cors"; // Import the cors middleware
import fetch from "node-fetch";

import jwt from './middleware/auth.middleware.js';
// Import modular routers
import usersRouter from './routes/user.routes.js';
import orderRoutes from './routes/order.routes.js';

const app = express();
// Use the built-in middleware to parse JSON bodies
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000', // Only allow requests from this origin
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

//app.use(cors(corsOptions)); // Enable CORS with specific options

app.use(cors()); // Enable CORS for all routes

const PORT: number = process.env.MAIN_SERVER_GATEWAY_PORT ? parseInt(process.env.MAIN_SERVER_GATEWAY_PORT) : 3001;

// Wire up the order routes
app.use('/api/orders', orderRoutes);
app.use('/api/users', usersRouter);

// app.get("/api/users", async (req, res) => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     res.json(users);
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     res.status(500).json({ error: "Failed to fetch users" });
//   }
// });

// --- Public route for user login ---
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // In a real app, you would validate credentials against a database
  if (username === 'testuser' && password === 'password123') {
    // Generate a JWT
    const user = { id: 1, username: 'testuser' };
    const accessToken = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ accessToken });
  }

  // Handle invalid credentials
  res.status(401).json({ message: 'Invalid username or password' });
});


app.post('/testing', (req, res) => {
  const { username, password } = req.body;
  res.send(`$testing is success to node server ${username}`);
})
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});