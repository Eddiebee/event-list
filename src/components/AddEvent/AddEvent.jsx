import React from "react";

const AddEvent = ({ events, setEvents, newEvent, setNewEvent }) => {
  const { title, description, date, time } = newEvent;

  const addEvent = (event) => {
    const myNewEvent = event;
    const myEvents = [myNewEvent, ...events];
    setEvents(myEvents);
  };

  const handleSetNewEvent = (e) => {
    const eventProp = e.target.name,
      eventPropVal = e.target.value;
    const myNewEvent = { ...newEvent, [eventProp]: eventPropVal };
    setNewEvent(myNewEvent);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newEvent) return;
    addEvent(newEvent);
    setNewEvent({
      title: "",
      description: "",
      date: "",
      time: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="AddEventForm">
      <label htmlFor="title">
        Title
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleSetNewEvent}
        />
      </label>

      <textarea
        name="description"
        id="description"
        placeholder="description of event"
        cols="30"
        rows="5"
        value={description}
        onChange={handleSetNewEvent}
      ></textarea>

      <label htmlFor="date">
        Date
        <input
          type="date"
          name="date"
          id="date"
          value={date}
          onChange={handleSetNewEvent}
        />
      </label>
      <label htmlFor="time">
        Time
        <input
          type="time"
          name="time"
          id="time"
          value={time}
          onChange={handleSetNewEvent}
        />
      </label>

      <button type="submit" className="saveBtn">
        Save
      </button>
    </form>
  );
};

export default AddEvent;
