import React, { useState, useEffect, useMemo } from 'react';
import {AuthContext} from '../auth/AuthContext';
import { type AuthContextType } from '../types/auth';
import authService from '../auth/authService';
import { type AuthProviderProps, type MyUser } from '../types/auth';

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<MyUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedUserData = authService.getToken();
    if (storedUserData) {
      setUser(JSON.parse(storedUserData));
    }
    setLoading(false);
  }, []);

  const login = async (credentials: Pick<MyUser, 'username' | 'password'>) => { 
    try {
      const response = await authService.login(credentials);
      setUser(response);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const authContextValue = useMemo(() => ({
    user,
    loading,
    isAuthenticated: !!user,
    login,
    logout,
  }), [user, loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={authContextValue as AuthContextType}>
      {children}
    </AuthContext.Provider>
  );
};