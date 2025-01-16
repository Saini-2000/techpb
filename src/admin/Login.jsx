import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import handyman from '../assets/handyman.jpg';
import { api_url } from '../config';
import { TokenContext } from '../adminroutes/AdminRoutes';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid'; // Assuming Heroicons

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // For toggling password visibility
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setToken } = useContext(TokenContext);
  const base_url = api_url;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Clear any previous errors

    try {
      const response = await fetch(`${base_url}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      setToken(data.token);
      localStorage.setItem('authToken', data.token); // Save token to localStorage
      navigate('/admin/home'); // Redirect to protected route
    } catch (error) {
      setError(error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{ backgroundImage: `url(${handyman})` }}>
      <div className="min-h-screen bg-[#000000e6] flex items-center">
        <div className="w-full max-w-md mx-auto bg-[#000000e6] p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl text-center font-bold mb-6 text-[var(--primary-color)]">Login</h1>
          <p className="text-gray-600 text-center dark:text-gray-400 mb-6">Sign In to your account</p>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                required
              />
            </div>
            <div className="mb-6 relative">
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="password">
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                required
              />
              <div
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 top-7 right-0 pr-3 flex items-center cursor-pointer"
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5 text-gray-500 dark:text-gray-300" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-500 dark:text-gray-300" />
                )}
              </div>
            </div>
            <div className="flex justify-center items-center mt-10 mb-4">
              <button
                type="submit"
                className="bg-[var(--primary-color)] hover:bg-white hover:text-[var(--primary-color)] text-white font-bold py-2 px-4 rounded-lg focus:outline-none w-full"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
