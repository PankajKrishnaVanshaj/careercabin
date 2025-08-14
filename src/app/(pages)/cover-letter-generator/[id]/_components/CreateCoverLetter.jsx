"use client";
import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import runChat from "@/utils/AIModal";
import { CoverLetterGeneratorPrompt } from "@/constants/CoverLetterGenerator";

export default function CreateCoverLetter() {
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    companyName: "",
    hiringManager: "",
    experience: "",
    skills: "",
    achievements: "",
    motivation: "",
    valuesAlignment: "",
  });

  const [loading, setLoading] = useState(false);
  const [coverLetter, setCoverLetter] = useState("");

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
      const prompt = CoverLetterGeneratorPrompt({ ...formData });
      const res = await runChat(prompt);
      setCoverLetter(res);
    } catch (error) {
      console.error("Error generating cover letter:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto bg-gradient-to-br from-green-50 via-white to-green-50 shadow-xl rounded-3xl p-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-green-700 mb-3">
          AI Cover Letter Generator
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Fill in the details below and instantly get a professionally written
          cover letter tailored for your target job.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Short text inputs */}
        {[
          {
            label: "Full Name",
            name: "fullName",
            placeholder: "e.g., Alex Johnson",
          },
          {
            label: "Target Job Title",
            name: "jobTitle",
            placeholder: "e.g., Software Engineer",
          },
          {
            label: "Company Name",
            name: "companyName",
            placeholder: "e.g., Google",
          },
          {
            label: "Hiring Manager Name",
            name: "hiringManager",
            placeholder: "e.g., Mr. John Smith",
          },
        ].map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {field.label}
            </label>
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

        {/* Long text inputs */}
        {[
          {
            label: "Relevant Experience",
            name: "experience",
            placeholder: "e.g., 3 years in full-stack development",
          },
          {
            label: "Key Skills",
            name: "skills",
            placeholder: "e.g., React, Node.js, UI/UX",
          },
          {
            label: "Achievements",
            name: "achievements",
            placeholder:
              "e.g., Led a team to deliver project ahead of schedule",
          },
          {
            label: "Motivation",
            name: "motivation",
            placeholder:
              "e.g., Passionate about innovation and solving real-world problems",
          },
          {
            label: "Values Alignment",
            name: "valuesAlignment",
            placeholder:
              "e.g., My dedication to sustainability aligns with your company's mission",
          },
        ].map((field) => (
          <div key={field.name} className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {field.label}
            </label>
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

        {/* Submit */}
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" /> Generating...
              </>
            ) : (
              <>
                <Send size={18} /> Generate Cover Letter
              </>
            )}
          </button>
        </div>
      </form>

      {/* Result */}
      {coverLetter && (
        <div className="mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Your AI-Generated Cover Letter
          </h2>
          <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
            {coverLetter}
          </div>
        </div>
      )}
    </div>
  );
}
