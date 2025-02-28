import React, { useState } from 'react';
import StatusComponent from './StatusComponent';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    if (!email.includes('@')) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
      // Handle email submission logic here
    }
  };

  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <StatusComponent />
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://www.nasa.gov/missions" className="text-sm text-blue-500 hover:underline">Active Missions</a>
          <form onSubmit={handleEmailSubmit} className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="p-2 border border-gray-300 rounded"
            />
            <button type="submit" className="p-2 bg-blue-500 text-white rounded">Subscribe</button>
          </form>
          {emailError && <div className="text-red-500 text-sm">{emailError}</div>}
        </div>
      </div>
    </div>
  );
};

export default Footer;