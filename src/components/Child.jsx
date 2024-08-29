import React, { useState } from "react";
import MenteeForm from "./MenteeForm";
import MenteeTable from "./MenteeTable";

const Child = () => {
  const [editIndex, setEditIndex] = useState(null);

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
  };

  return (
    <div className="p-6 rounded-lg shadow-md w-full h-full flex">
      <div className="flex-1">
        <MenteeTable onEdit={handleEdit} />
      </div>
      <div className="ml-6 flex-shrink-0 w-80">
        <MenteeForm editIndex={editIndex} onCancelEdit={handleCancelEdit} />
      </div>
    </div>
  );
};

export default Child;
