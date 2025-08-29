import userService from '../services/user.service.js';

const userController = {
  /**
   * HTTP handler for the user registration endpoint.
   */
  register: (req, res) => {
    const { username, email } = req.body;
    if (!username || !email) {
      return res.status(400).json({ error: 'Username and email are required.' });
    }

    try {
      const newUser = userService.registerUser(username, email);
      
      // The controller can immediately respond to the user without waiting for the email to be sent.
      res.status(201).json({ 
        message: 'User registered successfully. A welcome email will be sent shortly.',
        user: newUser 
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

 getAll: async (req, res) => {
  try {
   //const { username, email } = req.body;
    //get all users
   //const response = await fetch("https://jsonplaceholder.typicode.com/users");
    //const users = await response.json();
      // 2. Delegate the business logic to the service
        const users = await userService.getAllUsers();
        res.json(users);
//res.json(request) or res.send(request).
        // res.status(201)({
     // message: 'temporary get users from typicode website',
     // data: users,
   // });

   // res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
}
};

export default userController;