import React from "react";
import { MdEvent } from "react-icons/md";
import "./AddEvent.css";

const AddEventBtn = ({ showAddEvent, setShowAddEvent }) => {
  return (
    <button
      tabIndex={0}
      onClick={() => setShowAddEvent(!showAddEvent)}
      className="AddEventBtn flip-in-hor-bottom"
    >
      <MdEvent /> Add Event
    </button>
  );
};

export default AddEventBtn;
