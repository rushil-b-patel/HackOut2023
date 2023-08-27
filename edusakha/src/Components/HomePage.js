import React from 'react';
import EmailForm from './EmailForm';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Welcome to Edusakha Events</h1>
        <p className="text-gray-700">
          Discover and join exciting virtual events hosted by universities. Connect with
          your future through informative webinars, Q&A sessions, and more.
        </p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Explore Events
        </button>
      </div>
      {/* <EmailForm /> */}
    </div>
  );
};

export default HomePage;
