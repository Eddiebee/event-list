import { createContext, useState } from "react";
import { data } from "../data/events";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [events, setEvents] = useState(data);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
  });
  const [showAddEvent, setShowAddEvent] = useState(false);

  return (
    <DataContext.Provider
      value={{
        events,
        setEvents,
        newEvent,
        setNewEvent,
        showAddEvent,
        setShowAddEvent,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
