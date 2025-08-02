"use client";
import React from "react";

const PreviewSection = () => {
  const mockData = {
    firstName: "Jane",
    lastName: "Doe",
    email: "jane@example.com",
    phone: "+1234567890",
    jobTitle: "Frontend Developer",
    summery: "Creative developer with a passion for UI/UX and performance.",
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Preview</h2>
      <h1 className="text-xl font-semibold">{mockData.firstName} {mockData.lastName}</h1>
      <p className="text-green-600">{mockData.jobTitle}</p>
      <p className="text-gray-600 text-sm">{mockData.email}</p>
      <p className="text-gray-600 text-sm">{mockData.phone}</p>
      <div className="mt-4">
        <h3 className="font-semibold text-green-700">Summary</h3>
        <p className="text-gray-700">{mockData.summery}</p>
      </div>
    </div>
  );
};

export default PreviewSection;
