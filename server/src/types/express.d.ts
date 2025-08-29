import { MyUser } from './user'; // Import the interface

declare global {
  namespace Express {
    interface Request {
      user?: MyUser; // The '?' makes the user property optional
    }
  }
}