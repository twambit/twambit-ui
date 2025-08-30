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
    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
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
            // Register the input with React Hook Form
            {...register('password', { required: 'Password is required' })}
            disabled={isSubmitting}
          />
          {errors.password && (
            <p style={{ color: 'red' }}>{errors.password.message}</p>
          )}
        </div>
        {apiError && <p style={{ color: 'red' }}>{apiError}</p>}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Log In'}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
