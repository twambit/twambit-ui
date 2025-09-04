import React, { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useAuth } from '../auth/useAuth';
import { useNavigate } from 'react-router-dom';
import { type AuthProviderProps, type MyUser } from '../types/auth';
// Define the shape of your form data
type LoginFormInputs = {
  username: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<MyUser>();

  const [apiError, setApiError] = useState('');
  const { user, login } = useAuth();
  const navigate = useNavigate();

  // If a user is already logged in, redirect them
  if (user) {
    navigate('/dashboard');
  }

  const onSubmit: SubmitHandler<MyUser> = async (data) => {
    setApiError('');
    try {
      await login(data);
      // AuthProvider updates state, triggering a redirect
    } catch (err: any) {
      setApiError(err.message || 'Login failed');
    }
  };

  return (
 <div className="flex items-center justify-center h-screen bg-gray-100">
  <div className="border border-gray-300 p-4 rounded-md max-w-sm mx-auto">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
             className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            // Register the input with React Hook Form
            {...register('username', { required: 'Username is required' })}
            disabled={isSubmitting}
          />
          {errors.username && (
            <p style={{ color: 'red' }}>{errors.username.message}</p>
          )}
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            // Register the input with React Hook Form
            {...register('password', { required: 'Password is required' })}
            disabled={isSubmitting}
          />
          {errors.password && (
            <p style={{ color: 'red' }}>{errors.password.message}</p>
          )}
        </div>
        {apiError && <p style={{ color: 'red' }}>{apiError}</p>}
        <button type="submit" 
         className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md transition-colors hover:bg-blue-600"
        disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Log In'}
        </button>
      </form>
    </div>
  </div>
  );
};

export default LoginPage;
