"use client";
import React, { useState } from "react";

const FormSection = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    summery: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Resume Form</h2>

      {Object.entries(form).map(([key, value]) => (
        <div className="mb-4" key={key}>
          <label className="block text-sm text-gray-700 capitalize mb-1">{key}</label>
          {key === "summery" ? (
            <textarea
              name={key}
              value={value}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          ) : (
            <input
              type="text"
              name={key}
              value={value}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FormSection;
