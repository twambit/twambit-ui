import eventEmitter from '../events/eventEmitter.js';
 import axios from 'axios';
// A simple in-memory user store for demonstration
const users = [];

const userService = {
  /**
   * Registers a new user.
   * In a real application, this would interact with a database.
   */
  registerUser: (username, email) => {
    const newUser = { id: users.length + 1, username, email };
    users.push(newUser);

    // Emit an event after the user is registered
    eventEmitter.emit('userRegistered', newUser);
    
    return newUser;
  },

  getAllUsers: async () => {
    //axios get only data object
   // const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");

     //fetch
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    return data;
  }
};

export default userService;