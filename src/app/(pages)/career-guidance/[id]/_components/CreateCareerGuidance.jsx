"use client";
import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { CareerGuidancePrompt } from "@/constants/CareerGuidance";
import runChat from "@/utils/AIModal";

export default function CreateCareerGuidance({ onRoadmapGenerated }) {
  const [formData, setFormData] = useState({
    name: "",
    currentRole: "",
    targetRole: "",
    experienceLevel: "",
    skills: "",
    interests: "",
    challenges: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { name, currentRole, targetRole, experienceLevel, skills, interests, challenges } = formData;

      const prompt = CareerGuidancePrompt(
        name,
        currentRole,
        targetRole,
        experienceLevel,
        skills,
        interests,
        challenges
      );

      const res = await runChat(prompt);

      const cleanedRoadmap = res
        .replace(/^\s*```[a-z]*\s*/i, "") // removes ```lang
        .replace(/```$/, "") // removes trailing ```
        .trim();

      onRoadmapGenerated(cleanedRoadmap); // send roadmap to parent
    } catch (error) {
      console.error("Error generating roadmap:", error);
    }
    setLoading(false);
  };

  return (
    <div className="w-full mx-auto bg-gradient-to-br from-green-50 via-white to-green-50 shadow-xl rounded-3xl p-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-green-700 mb-3">
          Career Guidance & Roadmap Generator
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Fill in the details below and get a personalized, step-by-step career growth plan tailored to your skills, goals, and challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Full Name", name: "name", placeholder: "e.g., Alex Johnson" },
          { label: "Current Role", name: "currentRole", placeholder: "e.g., Frontend Developer at XYZ Corp" },
          { label: "Target Role / Career Goal", name: "targetRole", placeholder: "e.g., Senior Full Stack Engineer" },
        ].map((field, idx) => (
          <div key={idx}>
            <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
            <input
              type="text"
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
            />
          </div>
        ))}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
          <select
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
          >
            <option value="">Select your level</option>
            <option value="Beginner">Beginner (0-1 years)</option>
            <option value="Intermediate">Intermediate (2-5 years)</option>
            <option value="Advanced">Advanced (5+ years)</option>
          </select>
        </div>

        {[
          { label: "Current Skills", name: "skills", placeholder: "e.g., React, Node.js, SQL, Project Management" },
          { label: "Interests", name: "interests", placeholder: "e.g., Artificial Intelligence, Cybersecurity, EdTech" },
          { label: "Challenges / Obstacles", name: "challenges", placeholder: "e.g., Limited networking opportunities, lack of mentorship" },
        ].map((field, idx) => (
          <div key={idx} className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
            <textarea
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
              rows={3}
            ></textarea>
          </div>
        ))}

        <div className="md:col-span-2 flex justify-center">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" /> Generating...
              </>
            ) : (
              <>
                <Send size={18} /> Generate Career Roadmap
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
