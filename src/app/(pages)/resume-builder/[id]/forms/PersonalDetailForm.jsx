import { useResume } from "@/context/ResumeContext";
import React, { useState,useEffect } from "react";
import GeneratorAi from "../_components/GeneratorAi";

const PersonalDetailForm = () => {
  const { resume, updateSection } = useResume();

  const [formData, setFormData] = useState(resume?.personalInfo || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    updateSection("personalInfo", updatedFormData);
  };

  useEffect(() => {
  if (resume?.personalInfo) {
    setFormData(resume.personalInfo);
  }
}, [resume]);

  const inputClass =
    "w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500";

  const labelClass = "block mb-1 text-sm font-medium text-green-600";

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-md border border-green-500">
      <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">
        Personal Details
      </h2>
      <div className="space-y-4">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass} htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              placeholder="e.g., John"
              value={formData.firstName || ""}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              placeholder="e.g., Doe"
              value={formData.lastName || ""}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass} htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              placeholder="e.g., john.doe@example.com"
              value={formData.email || ""}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="phone">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              placeholder="e.g., +1 123-456-7890"
              value={formData.phone || ""}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        {/* Row 3 */}
        <div>
          <label className={labelClass} htmlFor="address">
            Address
          </label>
          <input
            id="address"
            name="address"
            placeholder="e.g., 123 Main St, New York, NY"
            value={formData.address || ""}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass} htmlFor="jobTitle">
              Job Title
            </label>
            <input
              id="jobTitle"
              name="jobTitle"
              placeholder="e.g., Frontend Developer"
              value={formData.jobTitle || ""}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="dateOfBirth">
              Date of Birth
            </label>
            <input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth || ""}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        {/* Row 5 */}
        <div>
          <label className={labelClass} htmlFor="nationality">
            Nationality
          </label>
          <input
            id="nationality"
            name="nationality"
            placeholder="e.g., American"
            value={formData.nationality || ""}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Row 6 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass} htmlFor="profileImage">
              Profile Image
            </label>
            <input
              id="profileImage"
              name="profileImage"
              placeholder="e.g., https://i.imgur.com/avatar.jpg"
              value={formData.profileImage || ""}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="portfolio">
              Portfolio Website
            </label>
            <input
              id="portfolio"
              name="portfolio"
              placeholder="e.g., https://pankri.com"
              value={formData.portfolio || ""}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Row 7 */}
          <div>
            <label className={labelClass} htmlFor="linkedIn">
              LinkedIn Profile
            </label>
            <input
              id="linkedIn"
              name="linkedIn"
              placeholder="e.g., https://linkedin.com/in/pankri"
              value={formData.linkedIn || ""}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          {/* Row 8 */}
          <div>
            <label className={labelClass} htmlFor="github">
              GitHub Profile
            </label>
            <input
              id="github"
              name="github"
              placeholder="e.g., https://github.com/pankri"
              value={formData.github || ""}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        {/* Row 9 */}
        <div>
          <div className="flex items-center justify-between">
            <label className={labelClass} htmlFor="summary">
              Professional Summary
            </label>
            <GeneratorAi
              Prompt={`Write a professional summary for a ${
                formData.jobTitle || "professional"
              } based on the following details: ${JSON.stringify(formData)}`}
              onGenerate={(generatedText) => {
                const updated = { ...formData, summary: generatedText };
                setFormData(updated);
                updateSection("personalInfo", updated);
              }}
            />
          </div>
          <textarea
            id="summary"
            name="summary"
            placeholder="e.g., A passionate frontend developer with 5+ years of experience in building responsive web applications..."
            value={formData.summary || ""}
            onChange={handleChange}
            rows={4}
            className={`${inputClass} resize-none`}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailForm;
