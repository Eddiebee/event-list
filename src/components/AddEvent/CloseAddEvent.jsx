import { MdClose } from "react-icons/md";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const CloseAddEvent = () => {
  const { showAddEvent, setShowAddEvent } = useContext(DataContext);
  return (
    <button
      onClick={() => setShowAddEvent(!showAddEvent)}
      className="CloseAddEventBtn"
    >
      <MdClose /> Close
    </button>
  );
};

export default CloseAddEvent;
