import { MdClose } from "react-icons/md";

const CloseAddEvent = ({ showAddEvent, setShowAddEvent }) => {
  return (
    <button onClick={() => setShowAddEvent(!showAddEvent)}>
      <MdClose /> Close
    </button>
  );
};

export default CloseAddEvent;
