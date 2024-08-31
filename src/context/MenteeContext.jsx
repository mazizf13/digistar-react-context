import React, { createContext, useState } from "react";
import menteesData from "../data/data";

export const MenteeContext = createContext();

export const MenteeProvider = ({ children }) => {
  const [mentees, setMentees] = useState(menteesData);

  const addMentee = (newMentee) => {
    setMentees([...mentees, { ...newMentee, id: mentees.length + 1 }]);
  };

  const updateMentee = (index, updatedMentee) => {
    setMentees(
      mentees.map((mentee, idx) =>
        idx === index ? { ...mentee, ...updatedMentee } : mentee,
      ),
    );
  };

  const deleteMentee = (id) => {
    setMentees(mentees.filter((mentee) => mentee.id !== id));
  };

  return (
    <MenteeContext.Provider
      value={{ mentees, addMentee, updateMentee, deleteMentee }}
    >
      {children}
    </MenteeContext.Provider>
  );
};
