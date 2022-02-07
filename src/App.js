import Event from "./components/Event/Event";
import AddEventBtn from "./components/AddEvent/AddEventBtn";
import { DataProvider } from "./context/DataContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Events</h1>
      </header>
      <DataProvider>
        <AddEventBtn />
        <Event />
      </DataProvider>
    </div>
  );
}

export default App;
