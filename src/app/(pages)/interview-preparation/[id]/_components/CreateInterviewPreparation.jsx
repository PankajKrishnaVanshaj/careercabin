"use client";

import { InterviewPreparationPrompt } from "@/constants/InterviewPreparation";
import runChat from "@/utils/AIModal";
import React, { useState } from "react";

const CreateInterviewPreparation = ({ setResult }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    industry: "",
    experienceLevel: "",
    skills: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenerate = async () => {
    setLoading(true);
    setResult(""); // clear previous result

    try {
      const res = await runChat(InterviewPreparationPrompt(formData));
      setResult(
        res
          .replace(/^\s*```[a-z]*\s*/i, "") // removes ```lang
          .replace(/```$/, "") // removes trailing ```
          .trim()
      ); // pass generated result to parent
    } catch (error) {
      console.error("Error generating interview prep:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto bg-gradient-to-br from-green-50 via-white to-green-50 shadow-xl rounded-3xl p-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-green-700 mb-3">
          Interview Preparation
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Enter the details below to generate a personalized interview
          preparation guide.
        </p>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          { name: "role", label: "Role / Job Title" },
          { name: "company", label: "Company Name" },
          { name: "industry", label: "Industry" },
          { name: "experienceLevel", label: "Experience Level" },
          { name: "skills", label: "Key Skills (comma-separated)" },
        ].map((field) => (
          <div key={field.name} className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {field.label}
            </label>
            <input
              type="text"
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={`Enter ${field.label.toLowerCase()}`}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>
        ))}

        {/* Description Field */}
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Job Description / Additional Details
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Paste the job description or add any additional details here..."
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
          ></textarea>
        </div>
      </div>

      {/* Generate Button */}
      <div className="mt-8">
        <button
          onClick={handleGenerate}
          disabled={loading}
          className={`w-full py-3 px-4 rounded-lg text-lg font-semibold shadow focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 transition ${
            loading
              ? "bg-blue-400 text-white cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {loading ? "⏳ Generating..." : "🚀 Generate Questions"}
        </button>
      </div>
    </div>
  );
};

export default CreateInterviewPreparation;
