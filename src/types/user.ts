export interface MyUser {
  id: string;
  username: string;
  role?: 'user' | 'admin';
}

// Define the shape of your context's state and actions
export interface AuthContextType {
  user: MyUser | null; // The user can be null if not logged in
  login: (userData: MyUser) => void;
  logout: () => void;
}