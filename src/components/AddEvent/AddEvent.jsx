import React from "react";

const AddEvent = () => {
  return (
    <form>
      <label htmlFor="title">
        Title
        <input type="text" name="title" id="title" />
      </label>
      <label htmlFor="description">
        Decription
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
        ></textarea>
      </label>
      <label htmlFor="date">
        Date
        <input type="date" name="date" id="date" />
      </label>
      <label htmlFor="time">
        <input type="time" name="time" id="time" />
      </label>
    </form>
  );
};

export default AddEvent;
