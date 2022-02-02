import React from "react";
import { MdEvent } from "react-icons/md";

const AddEventBtn = ({ showAddEvent, setShowAddEvent }) => {
  return (
    <span role="button" onClick={() => setShowAddEvent(!showAddEvent)}>
      <MdEvent /> Add event
    </span>
  );
};

export default AddEventBtn;
