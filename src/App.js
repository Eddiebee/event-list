import { useState } from "react";
import { data } from "./data/events";
import Event from "./components/Event/Event";
import AddEvent from "./components/AddEvent/AddEvent";
import AddEventBtn from "./components/AddEvent/AddEventBtn";
import CloseAddEvent from "./components/AddEvent/CloseAddEvent";
import "./App.css";

function App() {
  const [events, setEvents] = useState(data);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
  });
  const [showAddEvent, setShowAddEvent] = useState(false);

  return (
    <div className="App">
      <header>
        <h1>Events</h1>
      </header>
      {/* Add Event btn to toggle Add Event form display */}
      {showAddEvent ? (
        <>
          <AddEvent
            events={events}
            setEvents={setEvents}
            newEvent={newEvent}
            setNewEvent={setNewEvent}
          />
          <CloseAddEvent
            showAddEvent={showAddEvent}
            setShowAddEvent={setShowAddEvent}
          />
        </>
      ) : (
        <AddEventBtn
          showAddEvent={showAddEvent}
          setShowAddEvent={setShowAddEvent}
        />
      )}
      {/* Create an event component for each event in database */}
      {events.map((event) => (
        <Event key={event} event={event} />
      ))}
    </div>
  );
}

export default App;
