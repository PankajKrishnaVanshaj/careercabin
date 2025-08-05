import { useResume } from '@/context/ResumeContext';
import React, { useEffect, useState } from 'react';

const ExperienceForm = () => {
  const { resume, updateSection } = useResume();

  const getEmptyExperience = () => ({
    title: '',
    companyName: '',
    location: '',
    startDate: '',
    endDate: '',
    currentlyWorking: false,
    responsibilities: [''],
    achievements: [''],
    workSummery: '',
  });

  const [experiences, setExperiences] = useState(() => {
    return resume.experience.length > 0
      ? resume.experience
      : [getEmptyExperience()];
  });

  useEffect(() => {
    updateSection('experience', experiences);
  }, [experiences]);

  const handleChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    setExperiences((prev) => {
      const updated = [...prev];
      updated[index][name] = type === 'checkbox' ? checked : value;
      return updated;
    });
  };

  const handleArrayChange = (expIndex, field, fieldIndex, value) => {
    setExperiences((prev) => {
      const updated = [...prev];
      updated[expIndex][field][fieldIndex] = value;
      return updated;
    });
  };

  const addField = (expIndex, field) => {
    setExperiences((prev) => {
      const updated = [...prev];
      updated[expIndex][field].push('');
      return updated;
    });
  };

  const removeField = (expIndex, field, fieldIndex) => {
    setExperiences((prev) => {
      const updated = [...prev];
      updated[expIndex][field].splice(fieldIndex, 1);
      return updated;
    });
  };

  const addExperience = () => {
    setExperiences((prev) => [...prev, getEmptyExperience()]);
  };

  const removeExperience = (index) => {
    setExperiences((prev) => prev.filter((_, i) => i !== index));
  };

  const inputClass =
    "w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500";

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-md border border-green-500">
      <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">Work Experience</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold text-green-600">
              Experience {index + 1}
            </h3>
            {experiences.length > 1 && (
              <button
                type="button"
                onClick={() => removeExperience(index)}
                className="text-red-500 text-sm hover:underline"
              >
                Remove
              </button>
            )}
          </div>

          {/* Title & Company */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-green-600 text-sm font-medium mb-1">Job Title</label>
              <input
                name="title"
                placeholder="e.g., Frontend Developer"
                value={experience.title}
                onChange={(e) => handleChange(index, e)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-green-600 text-sm font-medium mb-1">Company Name</label>
              <input
                name="companyName"
                placeholder="e.g., Google Inc."
                value={experience.companyName}
                onChange={(e) => handleChange(index, e)}
                className={inputClass}
              />
            </div>
          </div>

          {/* Location */}
          <div className="mt-4">
            <label className="block text-green-600 text-sm font-medium mb-1">Location</label>
            <input
              name="location"
              placeholder="e.g., Mountain View, CA"
              value={experience.location}
              onChange={(e) => handleChange(index, e)}
              className={inputClass}
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4 items-center mt-4">
            <div>
              <label className="block text-green-600 text-sm font-medium mb-1">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={experience.startDate}
                onChange={(e) => handleChange(index, e)}
                className={inputClass}
              />
            </div>
            {!experience.currentlyWorking && (
              <div>
                <label className="block text-green-600 text-sm font-medium mb-1">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={experience.endDate}
                  onChange={(e) => handleChange(index, e)}
                  className={inputClass}
                />
              </div>
            )}
          </div>

          {/* Currently Working Checkbox */}
          <label className="flex items-center space-x-2 text-green-600 text-sm mt-2">
            <input
              type="checkbox"
              name="currentlyWorking"
              checked={experience.currentlyWorking}
              onChange={(e) => handleChange(index, e)}
            />
            <span>Currently Working Here</span>
          </label>

          {/* Responsibilities & Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {/* Responsibilities */}
            <div>
              <label className="block text-green-600 text-sm font-medium mb-2">Key Responsibilities</label>
              {experience.responsibilities.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 mb-1">
                  <input
                    placeholder={`e.g., Developed UI components (${idx + 1})`}
                    value={item}
                    onChange={(e) =>
                      handleArrayChange(index, 'responsibilities', idx, e.target.value)
                    }
                    className={inputClass}
                  />
                  <button
                    type="button"
                    onClick={() => removeField(index, 'responsibilities', idx)}
                    className="text-red-500 text-sm"
                  >
                    ❌
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addField(index, 'responsibilities')}
                className="text-sm text-green-600 mt-1 hover:underline"
              >
                + Add Responsibility
              </button>
            </div>

            {/* Achievements */}
            <div>
              <label className="block text-green-600 text-sm font-medium mb-2">Key Achievements</label>
              {experience.achievements.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 mb-1">
                  <input
                    placeholder={`e.g., Improved performance by 30% (${idx + 1})`}
                    value={item}
                    onChange={(e) =>
                      handleArrayChange(index, 'achievements', idx, e.target.value)
                    }
                    className={inputClass}
                  />
                  <button
                    type="button"
                    onClick={() => removeField(index, 'achievements', idx)}
                    className="text-red-500 text-sm"
                  >
                    ❌
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addField(index, 'achievements')}
                className="text-sm text-green-600 mt-1 hover:underline"
              >
                + Add Achievement
              </button>
            </div>
          </div>

          {/* Work Summary */}
          <div className="mt-4">
            <label className="block text-green-600 text-sm font-medium mb-1">Work Summary</label>
            <textarea
              name="workSummery"
              placeholder="Overview of your role, team, and contributions..."
              value={experience.workSummery}
              onChange={(e) => handleChange(index, e)}
              rows={4}
              className={inputClass}
            ></textarea>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addExperience}
className="text-green-600 hover:underline text-sm mt-4"      >
        + Add Experience
      </button>
    </div>
  );
};

export default ExperienceForm;
