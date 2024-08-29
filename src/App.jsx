import React from "react";
import Child from "./components/Child";
import MenteeProvider from "./context/MenteeContext";

function App() {
  return (
    <MenteeProvider>
      <div className="App">
        <Child />
      </div>
    </MenteeProvider>
  );
}

export default App;
