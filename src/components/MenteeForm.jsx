import React, { useContext, useState, useEffect } from "react";
import { MenteeContext } from "../context/MenteeContext";
import { useTheme } from "../context/ThemeContext";

const MenteeForm = ({ editIndex, onCancelEdit }) => {
  const { mentees, addMentee, updateMentee } = useContext(MenteeContext);
  const { isDarkMode } = useTheme();

  const [menteeData, setMenteeData] = useState({
    nama: "",
    kota: "",
    hobi: "",
  });

  useEffect(() => {
    if (editIndex !== null && mentees[editIndex]) {
      setMenteeData(mentees[editIndex]);
    } else {
      setMenteeData({ nama: "", kota: "", hobi: "" });
    }
  }, [editIndex, mentees]);

  const handleChange = (e) => {
    setMenteeData({ ...menteeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      updateMentee(editIndex, menteeData);
      onCancelEdit();
    } else {
      addMentee(menteeData);
    }
    setMenteeData({ nama: "", kota: "", hobi: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`mt-4 p-4 rounded-lg shadow-sm ${
        isDarkMode ? "bg-gray-800" : "bg-sky-800"
      }`}
    >
      <h3
        className={`text-xl font-semibold mb-4 ${
          isDarkMode ? "text-white" : "text-white"
        }`}
      >
        {editIndex !== null ? "Edit Mentee" : "Add New Mentee"}
      </h3>
      <input
        type="text"
        name="nama"
        value={menteeData.nama}
        onChange={handleChange}
        placeholder="Nama"
        required
        className={`w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 ${
          isDarkMode
            ? "border-gray-600 bg-gray-700 text-white focus:ring-blue-500"
            : "border-gray-300 bg-white text-black focus:ring-blue-500"
        }`}
      />
      <input
        type="text"
        name="kota"
        value={menteeData.kota}
        onChange={handleChange}
        placeholder="Kota"
        required
        className={`w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 ${
          isDarkMode
            ? "border-gray-600 bg-gray-700 text-white focus:ring-blue-500"
            : "border-gray-300 bg-white text-black focus:ring-blue-500"
        }`}
      />
      <input
        type="text"
        name="hobi"
        value={menteeData.hobi}
        onChange={handleChange}
        placeholder="Hobi"
        required
        className={`w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 ${
          isDarkMode
            ? "border-gray-600 bg-gray-700 text-white focus:ring-blue-500"
            : "border-gray-300 bg-white text-black focus:ring-blue-500"
        }`}
      />
      <button
        type="submit"
        className={`w-full px-4 py-2 rounded transition ${
          isDarkMode
            ? "bg-green-600 text-white hover:bg-green-700"
            : "bg-green-500 text-white hover:bg-green-600"
        }`}
      >
        {editIndex !== null ? "Update Mentee" : "Add Mentee"}
      </button>
      {editIndex !== null && (
        <button
          type="button"
          onClick={onCancelEdit}
          className={`w-full mt-2 px-4 py-2 rounded transition ${
            isDarkMode
              ? "bg-yellow-600 text-white hover:bg-yellow-700"
              : "bg-yellow-500 text-white hover:bg-yellow-600"
          }`}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default MenteeForm;
