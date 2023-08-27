import React, { useState } from 'react';

const StudentEventPage = () => {
  const [events, setEvents] = useState([]);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    // Add more fields as needed
  });

  // ... (event fetching code)

  const openRegistrationModal = () => {
    setShowRegistrationModal(true);
  };

  const closeRegistrationModal = () => {
    setShowRegistrationModal(false);
    setRegistrationData({
      name: '',
      email: '',
    });
  };

  const handleRegistrationInputChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    // TODO: Send registrationData to the server using API calls
    console.log('Registration Data:', registrationData);
    closeRegistrationModal();
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Upcoming Events</h2>
      {events.map((event) => (
        <div key={event.id} className="border p-4 mb-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold">{event.title}</h3>
          <p className="text-gray-700">{event.date}</p>
          <p>{event.description}</p>
          <button
            onClick={openRegistrationModal}
            className="mt-2 bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600"
          >
            Register
          </button>
        </div>
      ))}
      {showRegistrationModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Register for Event</h2>
            <form onSubmit={handleRegistrationSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={registrationData.name}
                  onChange={handleRegistrationInputChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={registrationData.email}
                  onChange={handleRegistrationInputChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              {/* Add more registration form fields as needed */}
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Register
              </button>
              <button
                type="button"
                onClick={closeRegistrationModal}
                className="ml-2 text-gray-600 hover:underline"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentEventPage;
