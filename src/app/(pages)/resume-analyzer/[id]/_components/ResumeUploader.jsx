import { File } from "lucide-react";
import { useState } from "react";
import runChat from "@/utils/AIModal";
import { ResumeAnalyzerPrompt } from "@/constants/ResumeAnalyzer";
import { readResumeFile } from "@/utils/readResumeFile";

export default function ResumeUploader({ onAnalysisComplete }) {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobRole, setJobRole] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resumeFile) {
      setMessage("Please upload your resume first.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // Extract text from file
      const resumeText = await readResumeFile(resumeFile);

      const res = await runChat(
        ResumeAnalyzerPrompt({
          resume: resumeText,
          jobRole,
          experience,
          skills,
          jobDescription,
        })
      );

      const cleanedScore = res
        .replace(/^\s*```[a-z]*\s*/i, "") // removes ```lang
        .replace(/```$/, "") // removes trailing ```
        .trim();

      // console.log("AI Response:", cleanedScore);
      onAnalysisComplete(cleanedScore);

      setMessage("Resume analyzed successfully!");
    } catch (error) {
      console.error(error);
      setMessage("Error analyzing resume.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-white px-4">
      <div className="w-full bg-white shadow-xl rounded-2xl p-8 border border-green-100">
        <h2 className="text-2xl font-bold text-green-700 mb-8 text-center">
          Upload & Analyze Resume
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Left Column */}
          <div className="space-y-6">
            {/* File Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Resume File
              </label>
              <label
                htmlFor="resume"
                className="flex flex-col items-center justify-center border-2 border-dashed border-green-300 rounded-xl p-6 cursor-pointer hover:bg-green-50 hover:border-green-400 transition"
              >
                <File className="text-green-600 w-10 h-10 mb-3" />
                <span className="text-green-700 font-medium text-center">
                  {resumeFile
                    ? resumeFile.name
                    : "Click or drag to upload your resume (PDF/DOC/DOCX)"}
                </span>
                <input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => setResumeFile(e.target.files[0])}
                />
              </label>
            </div>

            {/* Job Role */}
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Target Job Role
              </label>
              <input
                type="text"
                placeholder="e.g., Software Engineer"
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm transition"
              />
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Experience Level
              </label>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm transition"
              >
                <option value="">Select experience level</option>
                <option value="Entry Level">Entry Level (0-2 years)</option>
                <option value="Mid Level">Mid Level (3-5 years)</option>
                <option value="Senior Level">Senior Level (6+ years)</option>
              </select>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Skills */}
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Key Skills
              </label>
              <textarea
                placeholder="e.g., JavaScript, React, Node.js, SQL"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm transition min-h-[80px]"
              ></textarea>
            </div>

            {/* Job Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Job Description / Role Expectations
              </label>
              <textarea
                placeholder="Paste the job description or responsibilities here..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm transition min-h-[150px]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 active:scale-[0.98] disabled:opacity-50 text-white py-3 px-4 rounded-xl font-medium shadow-lg transition-all duration-200"
            >
              {loading ? "Analyzing..." : "Analyze Resume"}
            </button>
          </div>
        </form>

        {/* Message */}
        {message && (
          <p
            className={`mt-6 text-sm text-center font-medium ${
              message.toLowerCase().includes("success")
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
