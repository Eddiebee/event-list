import AddToCalendar from "./AddToCalendar";
import Description from "./Description";
import Title from "./Title";
import "./Event.css";
import DateTimeDisplay from "./DateTimeDisplay";

const Event = () => {
  return (
    <div className="Event">
      <DateTimeDisplay />
      <span className="details">
        <Title />
        <Description />
        <AddToCalendar />
      </span>
    </div>
  );
};

export default Event;
