import "./App.css";

import React from "react";
//import HooksComponent from "./components/HooksComponent";
//import CounterMain from "./counter/counter";

// import ControlledComponent from "./components/controlled";
// import MountingComponent from "./components/mounting";
// import UpdatingComponent from "./components/updating";
//import UnmountingComponent from"./components/unmounting";
// import ListComponent from "./components/ListComponent"
import TodoComponent from "./Todo/TodoComponent";
function App() {
  return (
    <div className="App">
      <TodoComponent />
    </div>
  );
}
export default App;
