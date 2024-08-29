import React, { createContext } from "react";
import { menteeList } from "../data/data";

export const MenteeContext = createContext();

const MenteeProvider = ({ children }) => {
  return (
    <MenteeContext.Provider value={menteeList}>
      {children}
    </MenteeContext.Provider>
  );
};

export default MenteeProvider;
