"use client";
import React, { useState } from "react";
import PersonalDetailForm from "../forms/PersonalDetailForm";
import ReferenceForm from "../forms/ReferenceForm";
import EducationForm from "../forms/EducationForm";
import ExperienceForm from "../forms/ExperienceForm";
import ProjectForm from "../forms/ProjectForm";
import AwardCertificationForm from "../forms/AwardCertificationForm";
import HobbyLanguageSkillForm from "../forms/HobbyLanguageSkillForm";
import ThemeColor from "./ThemeColor";
import { useResume } from "@/context/ResumeContext";
import { useParams } from "next/navigation";
import axios from "axios";

const forms = [
  { label: "Personal Details", component: <PersonalDetailForm /> },
  { label: "Education", component: <EducationForm /> },
  { label: "Work Experience", component: <ExperienceForm /> },
  { label: "Projects", component: <ProjectForm /> },
  {
    label: "Hobbies, Languages & Skills",
    component: <HobbyLanguageSkillForm />,
  },
  { label: "Awards & Certifications", component: <AwardCertificationForm /> },
  { label: "References", component: <ReferenceForm /> },
];

const FormSection = () => {
  const [activeFormIndex, setActiveFormIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const { resume } = useResume();
  const params = useParams();
  const resumeId = params?.id;

  const handlePrev = () => {
    if (activeFormIndex > 0) setActiveFormIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (activeFormIndex < forms.length - 1)
      setActiveFormIndex((prev) => prev + 1);
  };

  // Save handler
  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await axios.put(`/api/resume/${resumeId}`, resume);
      console.log("Saved successfully:", response.data);
    } catch (error) {
      console.error("Error saving section:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      {/* Top Navigation */}
      <div className="flex flex-wrap gap-1 mb-6 justify-center">
        {forms.map((form, index) => (
          <button
            key={index}
            onClick={() => setActiveFormIndex(index)}
            className={`px-4 py-1 rounded-full text-xs font-normal border transition-all duration-200 ${
              activeFormIndex === index
                ? "bg-green-600 text-white border-green-600 shadow"
                : "bg-white text-green-600 border-green-400 hover:bg-green-100"
            }`}
          >
            {form.label}
          </button>
        ))}{" "}
        <span>
          <ThemeColor />
        </span>
        <span>
          <button
            onClick={handleSave}
            disabled={loading}
            className={`px-4 py-1 rounded-full text-xs font-normal border transition-all duration-200 ${
              loading
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-white text-green-600 border-green-400 hover:bg-green-100"
            }`}
          >
            {loading ? "Saving..." : "Save Resume"}
          </button>{" "}
        </span>
      </div>

      {/* Current Form */}
      <div className="p-5 rounded-xl shadow-md shadow-green-500 bg-white border border-green-300">
        {/* <h2 className="text-xl font-semibold text-green-700 mb-4">
          {forms[activeFormIndex].label}
        </h2> */}
        {forms[activeFormIndex].component}
      </div>

      {/* Prev/Next Buttons */}
      <div className="flex justify-between items-center mt-6 px-9">
        <button
          onClick={handlePrev}
          disabled={activeFormIndex === 0}
          className={`px-4 py-2 rounded-md font-medium transition ${
            activeFormIndex === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
        >
          Previous
        </button>

        <span className="text-sm text-gray-600">
          Step {activeFormIndex + 1} of {forms.length}
        </span>

        <button
          onClick={handleNext}
          disabled={activeFormIndex === forms.length - 1}
          className={`px-4 py-2 rounded-md font-medium transition ${
            activeFormIndex === forms.length - 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FormSection;
