import React, { useState } from 'react';


const RegisterForm = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (onRegister) {
      onRegister({ username, email, password });
    }
  };

  return (
    <form
      className="max-w-sm mx-auto mt-8 p-6 bg-white rounded shadow"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium" htmlFor="username">
          Username
        </label>
        <input
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
          id="username"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium" htmlFor="email">
          Email
        </label>
        <input
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-1 font-medium" htmlFor="password">
          Password
        </label>
        <input
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
          id="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      <button
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};

// Export the RegisterForm component
export default RegisterForm;