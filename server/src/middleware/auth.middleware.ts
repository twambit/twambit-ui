import jwt from 'jsonwebtoken';
import type  { Request, Response, NextFunction } from 'express';
import 'dotenv/config';

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // Get the token from the Authorization header
  const authHeader = req.headers['authorization'];
  // The token is expected to be in the format "Bearer <TOKEN>"
  const token = authHeader && authHeader.split(' ')[1];

  // If no token, return 401 Unauthorized
  if (token == null) {
    return res.status(401).json({ message: 'Authentication token missing' });
  }

  // Verify the token
  jwt.verify(token,  process.env.JWT_SECRET, (err: any, user: String) => {
    // If verification fails, return 403 Forbidden
    if (err) {
      console.error('JWT verification error:', err);
      return res.status(403).json({ message: 'Invalid or expired token' });
    }

    // If valid, attach the user payload to the request object
    req.user = user;
    // Proceed to the next middleware or route handler
    next();
  });
};

export default authenticateToken;
