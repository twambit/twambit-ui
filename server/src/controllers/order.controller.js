import orderService from '../services/order.service.js';

// Handles a POST request to create an order

const orderController = {
  /**
   * HTTP handler for the user registration endpoint.
   */

createOrder: async (req, res, next) => {
  try {
    // 1. Get data from the request body
    const { items, customerId } = req.body;

    // 2. Delegate the business logic to the service
    const newOrder = await orderService.createOrder({ items, customerId });

    // 3. Send the final response
    res.status(201).json({
      message: 'Order created successfully.',
      data: newOrder,
    });
  } catch (error) {
    next(error); // Pass error to Express's error handler
  }
}
}

export default orderController;