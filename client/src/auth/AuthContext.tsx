import React, { createContext, useContext, useState } from 'react';
import { type AuthContextType } from '../types/auth';

export const AuthContext = createContext<AuthContextType | null>(null);
export function useAuth() {
  return useContext(AuthContext);
}