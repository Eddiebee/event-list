import React, { useEffect, useState } from "react";

const DateTimeDisplay = ({ date, time }) => {
  const [selectedColor, setSelectedColor] = useState("eceff8");

  useEffect(() => {
    const selectedColors = ["#eceff8", "#eceff9", "#ecef77", "#ecef00"];
    const chooseColor = (colors) => {
      let randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    };

    setSelectedColor(chooseColor(selectedColors));
  }, []);

  return (
    <div className="dateTime" style={{ backgroundColor: selectedColor }}>
      <p className="date">{date}</p>
      <p className="time"> {time}</p>
    </div>
  );
};

export default DateTimeDisplay;
