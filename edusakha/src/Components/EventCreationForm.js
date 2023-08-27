import React, { useState } from "react";

const EventCreationForm = ({ onCreateEvent }) => {
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    startdatetime: "",
    enddatetime: "",
    conductor: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevData) => ({ ...prevData, [name]: value }));
  };  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onCreateEvent function and pass the newEvent data
    onCreateEvent(newEvent);
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Create New Event</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={newEvent.title}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={newEvent.description}
            onChange={handleInputChange}
            rows="3"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="startdatetime"
            className="block text-sm font-medium text-gray-700"
          >
            Date and Time(Starting):
          </label>
          <input
            type="datetime-local" // Use datetime-local input type
            id="startdatetime"
            name="startdatetime"
            value={newEvent.startdatetime}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="enddatetime"
            className="block text-sm font-medium text-gray-700"
          >
            Date and Time(Ending):
          </label>
          <input
            type="datetime-local" // Use datetime-local input type
            id="enddatetime"
            name="enddatetime"
            value={newEvent.datetime}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="conductor"
            className="block text-sm font-medium text-gray-700"
          >
            Conductor/Faculty:
          </label>
          <input
            type="text"
            id="conductor"
            name="conductor"
            value={newEvent.conductor}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default EventCreationForm;
