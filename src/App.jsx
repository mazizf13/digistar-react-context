import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MenteeProvider } from "./context/MenteeContext";
import Child from "./components/Child";

function App() {
  return (
    <MenteeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Child />} />
        </Routes>
      </Router>
    </MenteeProvider>
  );
}

export default App;
