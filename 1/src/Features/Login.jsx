import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RoleSelection({ onSelectRole }) {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6">Select Your Role</h1>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => onSelectRole('CA')}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          CA
        </button>
        <button
          onClick={() => onSelectRole('Client')}
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
        >
          Client
        </button>
      </div>
    </div>
  );
}

function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [role, setRole] = useState('Client'); // Initialize role to 'Client'
  const navigate = useNavigate();

  const toggleSignup = () => setIsSignup(!isSignup);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignup && password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const endpoint = isSignup
        ? `http://localhost:5000/api/${role}/signup`
        : `http://localhost:5000/api/${role}/login`;

      const response = await axios.post(endpoint, {
        username,
        password,
      });

      setMessage(response.data.message);

      if (!isSignup) {
        localStorage.setItem('username', username);

        if (role === 'CA') {
          navigate('/dashboard');
        } else if (role === 'Client') {
          navigate('/posts');
        }
      }

    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
    }
  };

  const handleSelectRole = (selectedRole) => {
    setRole(selectedRole);
    setIsSignup(false);
  };

  return (
    <div className="text-center">
      {!role ? (
        <RoleSelection onSelectRole={handleSelectRole} />
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6">{isSignup ? 'Sign Up' : 'Login'} as {role}</h1>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg mx-auto max-w-sm">
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 mb-2">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}  
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 mb-2">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            {isSignup && (
              <div className="mb-4">
                <label htmlFor="confirm-password" className="block text-gray-700 mb-2">Confirm Password:</label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            )}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              {isSignup ? 'Sign Up' : 'Login'}
            </button>
            <div className="mt-4">
              <button
                type="button"
                onClick={toggleSignup}
                className="text-blue-500 hover:underline"
              >
                {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
              </button>
            </div>
            <div className="mt-4">
              <button
                type="button"
                onClick={() => handleSelectRole(role === 'Client' ? 'CA' : 'Client')}
                className="text-blue-500 border bg-blue-700 bg-opacity-20 px-4 py-1 rounded-md hover:underline"
              >
                Switch to {role === 'Client' ? 'CA' : 'Client'}
              </button>
            </div>
            {message && <p className="mt-4 text-red-500">{message}</p>}
          </form>
        </>
      )}
    </div>
  );
}

export default Login;
