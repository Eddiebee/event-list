import { useContext } from "react";
import { MdEvent } from "react-icons/md";
import DataContext from "../../context/DataContext";
import AddEvent from "./AddEvent";
import CloseAddEvent from "./CloseAddEvent";
import "./AddEvent.css";

const AddEventBtn = () => {
  const { showAddEvent, setShowAddEvent } = useContext(DataContext);
  return showAddEvent ? (
    <>
      <span className="flip-in-hor-bottom addEventCnt">
        <AddEvent />
        <CloseAddEvent />
      </span>
    </>
  ) : (
    <button
      tabIndex={0}
      onClick={() => setShowAddEvent(!showAddEvent)}
      className="AddEventBtn flip-in-hor-bottom"
    >
      <MdEvent /> Add Event
    </button>
  );
};

export default AddEventBtn;
