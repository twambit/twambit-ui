import React from 'react';

export interface MyUser {
  id: number;
  isFavorite: boolean;
  email: string;
  phone: string;
  name: string;
  token: string;
  username: string;
  password: string;
}

export interface AuthContextType {
  user: MyUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (userData: MyUser) => Promise<void>;
  logout: () => void;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}