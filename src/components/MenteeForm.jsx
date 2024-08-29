import React, { useContext, useState, useEffect } from "react";
import { MenteeContext } from "../context/MenteeContext";

const MenteeForm = ({ editIndex, onCancelEdit }) => {
  const { mentees, addMentee, updateMentee } = useContext(MenteeContext);

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
      className="mt-[70px] w-[450px] p-4 bg-sky-800 rounded-lg shadow-sm"
    >
      <h3 className="text-xl font-semibold mb-4">
        {editIndex !== null ? "Edit Mentee" : "Add New Mentee"}
      </h3>
      <input
        type="text"
        name="nama"
        value={menteeData.nama}
        onChange={handleChange}
        placeholder="Nama"
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="kota"
        value={menteeData.kota}
        onChange={handleChange}
        placeholder="Kota"
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="hobi"
        value={menteeData.hobi}
        onChange={handleChange}
        placeholder="Hobi"
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        {editIndex !== null ? "Update Mentee" : "Add Mentee"}
      </button>
      {editIndex !== null && (
        <button
          type="button"
          onClick={onCancelEdit}
          className="w-full mt-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default MenteeForm;
