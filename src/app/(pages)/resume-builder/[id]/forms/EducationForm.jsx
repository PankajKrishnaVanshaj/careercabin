"use client";
import React, { useEffect, useState } from "react";
import { useResume } from "@/context/ResumeContext";
import GeneratorAi from "../_components/GeneratorAi";

const defaultEducation = {
  universityName: "",
  degree: "",
  major: "",
  startDate: "",
  endDate: "",
  grade: "",
  location: "",
  description: "",
};

const EducationForm = () => {
  const { resume, updateSection } = useResume();

 const [educations, setEducations] = useState(() => {
  return Array.isArray(resume?.education) && resume.education.length > 0
    ? resume.education
    : [defaultEducation];
});


  // Sync to context
  useEffect(() => {
    updateSection("education", educations);
  }, [educations]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...educations];
    updated[index][name] = value;
    setEducations(updated);
  };

  const handleAddEducation = () => {
    setEducations((prev) => [...prev, { ...defaultEducation }]);
  };

  const handleRemove = (index) => {
    if (educations.length === 1) return;
    const updated = educations.filter((_, i) => i !== index);
    setEducations(updated);
  };

  const inputClass =
    "w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500";
  const labelClass = "text-sm font-medium text-green-600";

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-md border border-green-500">
      <h2 className="text-2xl font-bold mb-4 text-green-700 text-center">
        Educational Details
      </h2>

      {educations.map((education, index) => (
        <div key={index} className="">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold text-green-600">
              Degree {index + 1}
            </h3>
            {educations.length > 1 && (
              <button
                onClick={() => handleRemove(index)}
                className="text-red-500 text-sm hover:underline"
              >
                Remove
              </button>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="universityName" className={labelClass}>
                University Name
              </label>
              <input
                name="universityName"
                placeholder="e.g., Harvard University"
                value={education.universityName}
                onChange={(e) => handleChange(index, e)}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="degree" className={labelClass}>
                Degree
              </label>
              <input
                name="degree"
                placeholder="e.g., Bachelor of Science"
                value={education.degree}
                onChange={(e) => handleChange(index, e)}
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="major" className={labelClass}>
                  Major
                </label>
                <input
                  name="major"
                  placeholder="e.g., Computer Science"
                  value={education.major}
                  onChange={(e) => handleChange(index, e)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="grade" className={labelClass}>
                  Grade/CGPA
                </label>
                <input
                  name="grade"
                  placeholder="e.g., 3.8 / 4.0"
                  value={education.grade}
                  onChange={(e) => handleChange(index, e)}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="location" className={labelClass}>
                Location
              </label>
              <input
                name="location"
                placeholder="e.g., Cambridge, MA"
                value={education.location}
                onChange={(e) => handleChange(index, e)}
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="startDate" className={labelClass}>
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={education.startDate}
                  onChange={(e) => handleChange(index, e)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="endDate" className={labelClass}>
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={education.endDate}
                  onChange={(e) => handleChange(index, e)}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="description" className={labelClass}>
                  Description
                </label>
                <GeneratorAi
                  Prompt={`Write a short academic achievement description for someone who studied ${
                    education.degree || "a degree"
                  } in ${education.major || "a subject"} at ${
                    education.universityName || "a university"
                  }, located in ${education.location || "a location"}, from ${
                    education.startDate || "start date"
                  } to ${
                    education.endDate || "end date"
                  }. Mention any grades, honors, or research projects.`}
                  onGenerate={(generatedText) => {
                    const updated = [...educations];
                    updated[index].description = generatedText;
                    setEducations(updated);
                  }}
                />
              </div>
              <textarea
                name="description"
                placeholder="e.g., Completed a 4-year honors program with research in AI..."
                rows={3}
                value={education.description}
                onChange={(e) => handleChange(index, e)}
                className={inputClass}
              ></textarea>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={handleAddEducation}
        className="text-green-600 hover:underline text-sm mt-4"
      >
        + Add Another Degree
      </button>
    </div>
  );
};

export default EducationForm;
