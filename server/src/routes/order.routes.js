import { Router } from 'express';

import orderController from '../controllers/order.controller.js';

const router = Router();
// GET all users

// Route to create a new order
router.post('/', orderController.createOrder);

export default router;