import React, { useContext } from "react";
import { MenteeContext } from "../context/MenteeContext";

const MenteeTable = ({ onEdit }) => {
  const { mentees, deleteMentee } = useContext(MenteeContext);

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-sky-500">
          Data Mentee Digistar Class
        </h2>
      </div>

      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Nama</th>
            <th className="py-2 px-4 border">Kota</th>
            <th className="py-2 px-4 border">Hobi</th>
            <th className="py-2 px-4 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {mentees.map((mentee) => (
            <tr key={mentee.id}>
              <td className="py-2 px-4 border">{mentee.nama}</td>
              <td className="py-2 px-4 border">{mentee.kota}</td>
              <td className="py-2 px-4 border">{mentee.hobi}</td>
              <td className="py-2 px-4 border">
                <button
                  onClick={() => onEdit(mentee.id)}
                  className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteMentee(mentee.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenteeTable;
