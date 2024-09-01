import React, { useState } from "react";
import MenteeForm from "./MenteeForm";
import MenteeTable from "./MenteeTable";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const Child = () => {
  const [editIndex, setEditIndex] = useState(null);
  const { isDarkMode } = useTheme();

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
  };

  return (
    <div
      className={`flex flex-col p-6 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <ThemeToggle />
      <div className="flex flex-col-reverse md:flex-row gap-6">
        <div className="flex-1 overflow-x-auto min-w-[300px]">
          <MenteeTable onEdit={handleEdit} />
        </div>
        <div className="flex-shrink-0 w-full mt-14 md:w-[350px]">
          <MenteeForm editIndex={editIndex} onCancelEdit={handleCancelEdit} />
        </div>
      </div>
    </div>
  );
};

export default Child;
