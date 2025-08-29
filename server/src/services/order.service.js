import eventEmitter from '../events/eventEmitter.js';

// A "mock" database
const orders = [];

const orderService = {
// Business logic for creating an order
createOrder: async (orderData) => {
  // 1. Perform business logic (e.g., validate items, calculate total)
  // For this example, we just add a timestamp and an ID.
  const newOrder = {
    id: orders.length + 1,
    ...orderData,
    createdAt: new Date(),
  };

  // 2. "Save" to the database
  orders.push(newOrder);
  

  // 3. Emit an event to notify other parts of the system
  eventEmitter.emit('new.order.created', newOrder);
  console.log(`Event emitted: new.order.created for order ID ${newOrder.id}`);

  // A separate function to simulate a notification service
eventEmitter.on('new.order.created', (order) => {
  // This could be in a separate service or a microservice
  console.log(`[Notification Service] Sending confirmation email for order ID ${order.id}`);
});

  return newOrder;
  // In a real app, you would send an email here


}
};

export default orderService;