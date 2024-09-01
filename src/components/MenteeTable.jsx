import React, { useContext } from "react";
import { MenteeContext } from "../context/MenteeContext";
import { useTheme } from "../context/ThemeContext";

const MenteeTable = ({ onEdit }) => {
  const { mentees, deleteMentee } = useContext(MenteeContext);
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`container mx-auto p-6 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2
          className={`text-2xl font-bold ${
            isDarkMode ? "text-sky-400" : "text-sky-500"
          }`}
        >
          Data Mentee Digistar Class
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table
          className={`min-w-full border ${
            isDarkMode ? "border-gray-700" : "border-gray-300"
          }`}
        >
          <thead>
            <tr>
              <th
                className={`py-2 px-4 border ${
                  isDarkMode
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                Nama
              </th>
              <th
                className={`py-2 px-4 border ${
                  isDarkMode
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                Kota
              </th>
              <th
                className={`py-2 px-4 border ${
                  isDarkMode
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                Hobi
              </th>
              <th
                className={`py-2 px-4 border ${
                  isDarkMode
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {mentees.map((mentee, index) => (
              <tr
                key={mentee.id}
                className={`${
                  isDarkMode
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-800"
                } border-b`}
              >
                <td className="py-2 px-4 border">{mentee.nama}</td>
                <td className="py-2 px-4 border">{mentee.kota}</td>
                <td className="py-2 px-4 border">{mentee.hobi}</td>
                <td className="py-2 px-4 border flex flex-col gap-2 sm:gap-4">
                  <button
                    onClick={() => onEdit(index)}
                    className={`w-full px-4 py-2 rounded transition ${
                      isDarkMode
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-blue-500 hover:bg-blue-600"
                    } text-white`}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteMentee(mentee.id)}
                    className={`w-full px-4 py-2 rounded transition ${
                      isDarkMode
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-red-500 hover:bg-red-600"
                    } text-white`}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MenteeTable;
