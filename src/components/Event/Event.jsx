import { useContext } from "react";
import AddToCalendar from "./AddToCalendar";
import Description from "./Description";
import Title from "./Title";
import DateTimeDisplay from "./DateTimeDisplay";
import DataContext from "../../context/DataContext";
import "./Event.css";

const Event = () => {
  const { events } = useContext(DataContext);

  return events.map((event) => {
    const { date, time, title, description } = event;
    return (
      <div className="Event flip-in-hor-bottom">
        <DateTimeDisplay date={date} time={time} />
        <span className="details">
          <Title title={title} />
          <Description description={description} />
          <AddToCalendar />
        </span>
      </div>
    );
  });
};

export default Event;
