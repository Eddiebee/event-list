import { useState } from "react";
import Event from "./components/Event/Event";
import "./App.css";

function App() {
  const [events, setEvents] = useState([
    {
      title: "Bergen International Film Festival",
      description:
        "Films from all over the world gather all film enthusiasts for unique moments at the Bergen International Film Festival.",
      date: "Today",
      time: "17:00",
    },
    {
      title: "Bergen International Film Festival",
      description:
        "Films from all over the world gather all film enthusiasts for unique moments at the Bergen International Film Festival.",
      date: "Today",
      time: "17:00",
    },
  ]);
  return (
    <div className="App">
      <header>
        <h1>Events</h1>
      </header>
      {/* Create an event component for each event in database */}
      {events.map((event) => (
        <Event key={event} event={event} />
      ))}
    </div>
  );
}

export default App;
