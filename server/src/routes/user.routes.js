import { Router } from 'express';

import userController from '../controllers/user.controller.js';

const router = Router();
// GET all users

// Route to create a new order
router.get('/', userController.getAll);

// router.get('/', async (req, res) => {
//   try {

//     //get all users
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     res.json(users);
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     res.status(500).json({ error: "Failed to fetch users" });
//   }
// });

// GET a single user by ID
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Get user with ID: ${userId}`);
});

// POST a new user
router.post('/', (req, res) => {
  res.status(201).send('Create a new user');
});

// Export the router module
export default router;