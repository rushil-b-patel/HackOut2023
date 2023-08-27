import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import EventCreationForm from "./EventCreationForm";

const Event = ({ userType = "student" }) => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [activeSection, setActiveSection] = useState("registered");
  useEffect(()=>{
    
  },[activeSection])
  const handleCreateEventClick = () => {
    setShowCreateForm((prevShowCreateForm) => !prevShowCreateForm);
  };

  const handleEventCreation = async (newEvent) => {
    // TODO: Send newEvent to the server to create the event
    // After the event is created, update the events list accordingly
    console.log("Creating event:", newEvent);

    // For now, let's just close the form
    setShowCreateForm(false);
  };

  const handleRegister = async (eventId) => {
    try {
      // Simulate sending a registration request to the server
      const response = await fetch(`/api/register/${eventId}`, {
        method: "POST",
        // You can include headers and other data here
      });
  
      if (response.ok) {
        console.log(`Registered for event with ID ${eventId}`);
        // You might want to update the event's registration status here
      } else {
        console.error(`Failed to register for event with ID ${eventId}`);
      }
    } catch (error) {
      console.error(`Error registering for event with ID ${eventId}:`, error);
    }
  };
  

  // Simulated event data for past, ongoing, and upcoming events
  const pastEvents = [
    {
      id: 1,
      title: "Past Event 1",
      description: "Description for past event 1",
      time: "2023-08-15 10:00 AM",
      faculties: ["Faculty X"],
    },
    {
      id: 2,
      title: "Past Event 2",
      description: "Description for past event 2",
      time: "2023-08-20 2:00 PM",
      faculties: ["Faculty Y"],
    },
  ];

  const ongoingEvents = [
    {
      id: 3,
      title: "Ongoing Event 1",
      description: "Description for ongoing event 1",
      time: "2023-08-25 11:30 AM",
      faculties: ["Faculty A"],
    },
    {
      id: 4,
      title: "Ongoing Event 2",
      description: "Description for ongoing event 2",
      time: "2023-08-27 3:00 PM",
      faculties: ["Faculty B"],
    },
  ];

  const upcomingEvents = [
    {
      id: 5,
      title: "Upcoming Event 1",
      description: "Description for upcoming event 1",
      time: "2023-09-05 9:30 AM",
      faculties: ["Faculty P"],
    },
    {
      id: 6,
      title: "Upcoming Event 2",
      description: "Description for upcoming event 2",
      time: "2023-09-10 1:00 PM",
      faculties: ["Faculty Q"],
    },
  ];

  const registeredEvents = [
    {
      id: 7,
      title: "Registered Event 1",
      description: "Description for upcoming event 1",
      time: "2023-09-05 9:30 AM",
      faculties: ["Faculty P"],
    },
    {
      id: 8,
      title: "Registered Event 2",
      description: "Description for upcoming event 2",
      time: "2023-09-10 1:00 PM",
      faculties: ["Faculty Q"],
    },
  ];

  const professorPastEvents = [
    {
      id: 9,
      title: "Professor Past Event 1",
      description: "Description for professor past event 1",
      time: "2023-08-05 10:00 AM",
      faculties: ["Professor X"],
    },
    {
      id: 10,
      title: "Professor Past Event 2",
      description: "Description for professor past event 2",
      time: "2023-08-10 2:00 PM",
      faculties: ["Professor Y"],
    },
  ];

  const professorOngoingEvents = [
    {
      id: 11,
      title: "Professor Ongoing Event 1",
      description: "Description for professor ongoing event 1",
      time: "2023-08-15 11:30 AM",
      faculties: ["Professor A"],
    },
    {
      id: 12,
      title: "Professor Ongoing Event 2",
      description: "Description for professor ongoing event 2",
      time: "2023-08-20 3:00 PM",
      faculties: ["Professor B"],
    },
  ];

  const professorUpcomingEvents = [
    {
      id: 13,
      title: "Professor Upcoming Event 1",
      description: "Description for professor upcoming event 1",
      time: "2023-09-01 9:30 AM",
      faculties: ["Professor P"],
    },
    {
      id: 14,
      title: "Professor Upcoming Event 2",
      description: "Description for professor upcoming event 2",
      time: "2023-09-08 1:00 PM",
      faculties: ["Professor Q"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      {userType === "student" ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Your Events
          </h2>
          <div className="mb-4 flex justify-center space-x-4">
            <button
              onClick={() => setActiveSection("past")}
              className={`${
                activeSection === "past" ? "bg-blue-500 text-white" : ""
              } px-3 py-2 rounded-md text-sm font-medium border ${
                activeSection === "past" ? "" : "border-gray-300"
              } hover:bg-black hover:text-white ease-in duration-300`}
            >
              Past
            </button>
            <button
              onClick={() => setActiveSection("registered")}
              className={`${
                activeSection === "registered" ? "bg-blue-500 text-white" : ""
              } px-3 py-2 rounded-md text-sm font-medium border ${
                activeSection === "registered" ? "" : "border-gray-300"
              } hover:bg-black hover:text-white ease-in duration-300`}
            >
              Registered
            </button>
            <button
              onClick={() => setActiveSection("ongoing")}
              className={`${
                activeSection === "ongoing" ? "bg-blue-500 text-white" : ""
              } px-3 py-2 rounded-md text-sm font-medium border ${
                activeSection === "ongoing" ? "" : "border-gray-300"
              } hover:bg-black hover:text-white ease-in duration-300`}
            >
              Ongoing
            </button>
            <button
              onClick={() => setActiveSection("upcoming")}
              className={`${
                activeSection === "upcoming" ? "bg-blue-500 text-white" : ""
              } px-3 py-2 rounded-md text-sm font-medium border ${
                activeSection === "upcoming" ? "" : "border-gray-300"
              } hover:bg-black hover:text-white ease-in duration-300`}
            >
              Upcoming
            </button>
          </div>

          {activeSection === "past" && (
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Past Participated Events
              </h3>
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
          {activeSection === "ongoing" && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Ongoing Events</h3>
              {ongoingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
          {activeSection === "upcoming" && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Upcoming Events</h3>
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <EventCard event={event} />
                </div>
                <button
                  onClick={() => handleRegister(event.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4 hover:bg-blue-600 ease-in duration-300"
                >
                  Register
                </button>
              </div>
              ))}
            </div>
          )}
          {activeSection === "registered" && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Registered Events</h3>
              {registeredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          <button
            onClick={handleCreateEventClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ease-in duration-300"
          >
            Create Event
          </button>
          {showCreateForm && (
            <EventCreationForm onCreateEvent={handleEventCreation} />
          )}
          <div className="mb-4 flex justify-center space-x-4">
            <button
              onClick={() => setActiveSection("professorPast")}
              className={`${
                activeSection === "professorPast"
                  ? "bg-blue-500 text-white"
                  : ""
              } px-3 py-2 rounded-md text-sm font-medium border ${
                activeSection === "professorPast" ? "" : "border-gray-300"
              } hover:bg-black hover:text-white ease-in duration-300`}
            >
              Professor Past
            </button>
            <button
              onClick={() => setActiveSection("professorOngoing")}
              className={`${
                activeSection === "professorOngoing"
                  ? "bg-blue-500 text-white"
                  : ""
              } px-3 py-2 rounded-md text-sm font-medium border ${
                activeSection === "professorOngoing" ? "" : "border-gray-300"
              } hover:bg-black hover:text-white ease-in duration-300`}
            >
              Professor Ongoing
            </button>
            <button
              onClick={() => setActiveSection("professorUpcoming")}
              className={`${
                activeSection === "professorUpcoming"
                  ? "bg-blue-500 text-white"
                  : ""
              } px-3 py-2 rounded-md text-sm font-medium border ${
                activeSection === "professorUpcoming" ? "" : "border-gray-300"
              } hover:bg-black hover:text-white ease-in duration-300`}
            >
              Professor Upcoming
            </button>
          </div>

          {activeSection === "professorPast" && (
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Professor Past Events
              </h3>
              {professorPastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}

          {activeSection === "professorOngoing" && (
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Professor Ongoing Events
              </h3>
              {professorOngoingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}

          {activeSection === "professorUpcoming" && (
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Professor Upcoming Events
              </h3>
              {professorUpcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Event;
