export interface MyUser {
  id: string;
  username: string;
  role?: 'user' | 'admin'; // '?' makes the property optional
  // Add any other user-related properties here
}