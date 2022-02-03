import AddToCalendar from "./AddToCalendar";
import Description from "./Description";
import Title from "./Title";
import "./Event.css";
import DateTimeDisplay from "./DateTimeDisplay";

const Event = ({ event }) => {
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
};

export default Event;
