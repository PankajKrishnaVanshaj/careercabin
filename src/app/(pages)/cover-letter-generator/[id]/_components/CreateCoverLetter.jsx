"use client";
import { useState } from "react";
import { Send, Loader2, User, Briefcase, FileText } from "lucide-react";
import runChat from "@/utils/AIModal";
import { CoverLetterGeneratorPrompt } from "@/constants/CoverLetterGenerator";

export default function CreateCoverLetter({ setCoverLetter }) {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    cityStateZip: "",
    email: "",
    phone: "",
    date: "",
    jobTitle: "",
    companyName: "",
    hiringManager: "",
    companyAddress: "",
    companyCityStateZip: "",
    experience: "",
    skills: "",
    achievements: "",
    motivation: "",
    valuesAlignment: "",
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
      const prompt = CoverLetterGeneratorPrompt({ ...formData });
      const res = await runChat(prompt);
      setCoverLetter(
        res.replace(/^\s*```[a-z]*\s*/i, "").replace(/```$/, "").trim()
      );
    } catch (error) {
      console.error("Error generating cover letter:", error);
    } finally {
      setLoading(false);
    }
  };

  const Section = ({ icon: Icon, title, children }) => (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-green-100">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="text-green-600" size={20} />
        <h2 className="text-lg font-semibold text-green-700">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
    </div>
  );

  const InputField = ({ label, name, placeholder }) => (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="text"
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
      />
    </div>
  );

  const TextAreaField = ({ label, name, placeholder }) => (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
      <textarea
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
        rows={3}
      />
    </div>
  );

  return (
    <div className="w-full mx-auto bg-gradient-to-br from-green-50 via-white to-green-50 shadow-xl rounded-3xl p-10">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-extrabold text-green-700 mb-3">
          AI Cover Letter Generator
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Fill in the details below and instantly generate a personalized,
          professional cover letter tailored to your dream job.
        </p>
      </div>

      {/* Sections */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Applicant Info */}
        <Section icon={User} title="Applicant Information">
          <InputField label="Full Name" name="fullName" placeholder="Alex Johnson" />
          <InputField label="Address" name="address" placeholder="123 Main St" />
          <InputField label="City, State, ZIP" name="cityStateZip" placeholder="San Francisco, CA 94103" />
          <InputField label="Email Address" name="email" placeholder="alex@email.com" />
          <InputField label="Phone Number" name="phone" placeholder="+1 234 567 890" />
          <InputField label="Date" name="date" placeholder="August 16, 2025" />
        </Section>

        {/* Job Info */}
        <Section icon={Briefcase} title="Job Information">
          <InputField label="Target Job Title" name="jobTitle" placeholder="Software Engineer" />
          <InputField label="Company Name" name="companyName" placeholder="Google" />
          <InputField label="Hiring Manager Name" name="hiringManager" placeholder="Mr. John Smith" />
          <InputField label="Company Address" name="companyAddress" placeholder="1600 Amphitheatre Parkway" />
          <InputField label="Company City, State, ZIP" name="companyCityStateZip" placeholder="Mountain View, CA 94043" />
        </Section>

        {/* Additional Details */}
        <Section icon={FileText} title="Additional Details">
          <TextAreaField label="Relevant Experience" name="experience" placeholder="3 years in full-stack development" />
          <TextAreaField label="Key Skills" name="skills" placeholder="React, Node.js, UI/UX" />
          <TextAreaField label="Achievements" name="achievements" placeholder="Led a team to deliver project ahead of schedule" />
          <TextAreaField label="Motivation" name="motivation" placeholder="Passionate about innovation and solving real-world problems" />
          <TextAreaField label="Values Alignment" name="valuesAlignment" placeholder="My dedication to sustainability aligns with your company's mission" />
        </Section>

        {/* Submit */}
        <div className="flex justify-center pt-4">
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
    </div>
  );
}
