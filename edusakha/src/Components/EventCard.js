import React from 'react';

const EventCard = ({ event, onRegister }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-semibold">{event.title}</h3>
      <p className="text-gray-600">{event.description}</p>
      <p className="text-gray-400 mt-2">{event.time}</p>
      <p className="text-gray-400">Conducted by: {event.faculties.join(', ')}</p>
      {onRegister && (
        <button
          onClick={() => onRegister(event.id)} // Assuming event.id is a unique identifier
          className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Register
        </button>
      )}
    </div>
  );
};

export default EventCard;
