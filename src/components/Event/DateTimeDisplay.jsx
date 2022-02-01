import React from "react";

const DateTimeDisplay = ({ date, time }) => {
  return (
    <div className="dateTime">
      <p className="date">{date}</p>
      <p className="time"> {time}</p>
    </div>
  );
};

export default DateTimeDisplay;
