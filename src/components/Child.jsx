import React, { useContext } from "react";
import { MenteeContext } from "../context/MenteeContext";

const Child = () => {
  const menteeData = useContext(MenteeContext);

  return (
    <div className="p-8">
      <h2 className="font-bold text-2xl mb-4 text-sky-400">
        Data Mentee Digistar Class
      </h2>
      {menteeData.map((mentee, index) => (
        <div key={index} className="mb-4">
          <p>
            <strong>Nama:</strong> {mentee.nama}
          </p>
          <p>
            <strong>Kota:</strong> {mentee.kota}
          </p>
          <p>
            <strong>Hobi:</strong> {mentee.hobi}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Child;
