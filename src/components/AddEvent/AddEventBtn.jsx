import React from "react";
import { MdEvent } from "react-icons/md";
import "./AddEvent.css";

const AddEventBtn = ({ showAddEvent, setShowAddEvent }) => {
  return (
    <span
      role="button"
      tabIndex={0}
      onClick={() => setShowAddEvent(!showAddEvent)}
      className="AddEventBtn"
    >
      <MdEvent /> Add Event
    </span>
  );
};

export default AddEventBtn;
