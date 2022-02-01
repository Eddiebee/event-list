import AddToCalendar from "./AddToCalendar";
import Description from "./Description";
import Title from "./Title";
import "./Event.css";
import TimeDisplay from "./TimeDisplay";

const Event = () => {
  return (
    <div className="Event">
      <TimeDisplay />
      <div>
        <Title />
        <Description />
      </div>
      <AddToCalendar />
    </div>
  );
};

export default Event;
