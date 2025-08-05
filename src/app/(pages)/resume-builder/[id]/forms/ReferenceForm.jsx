import { useResume } from "@/context/ResumeContext";
import React, { useState, useEffect } from "react";

const ReferenceForm = () => {
  const { resume, updateSection } = useResume();

  const [reference, setReference] = useState({
    name: "",
    position: "",
    company: "",
    email: "",
    phone: "",
  });

  // Sync with context
  useEffect(() => {
    updateSection("reference", reference);
  }, [reference]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReference((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const inputClass =
    "w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500";

  const labelClass = "block text-sm font-medium text-green-600 mb-1";

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-md border border-green-500">
      <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">
        Reference
      </h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className={labelClass}>Full Name</label>
            <input
              id="name"
              name="name"
              placeholder="e.g., John Smith"
              value={reference.name}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="position" className={labelClass}>Position</label>
            <input
              id="position"
              name="position"
              placeholder="e.g., Senior Manager"
              value={reference.position}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>Company</label>
          <input
            id="company"
            name="company"
            placeholder="e.g., Google LLC"
            value={reference.company}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className={labelClass}>Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="e.g., john.smith@example.com"
              value={reference.email}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="e.g., +1 234 567 8901"
              value={reference.phone}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferenceForm;
