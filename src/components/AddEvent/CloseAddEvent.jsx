import { MdClose } from "react-icons/md";

const CloseAddEvent = ({ showAddEvent, setShowAddEvent }) => {
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
