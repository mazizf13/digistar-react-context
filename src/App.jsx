import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { MenteeProvider } from "./context/MenteeContext";
import Child from "./components/Child";

function App() {
  return (
    <ThemeProvider>
      <MenteeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Child />} />
          </Routes>
        </Router>
      </MenteeProvider>
    </ThemeProvider>
  );
}

export default App;
