import { useResume } from '@/context/ResumeContext';
import React, { useEffect, useState } from 'react';

const HobbyLanguageSkillForm = () => {
  const { resume, updateSection } = useResume();

  const [hobby, setHobby] = useState('');
  const [hobbies, setHobbies] = useState(resume?.hobbies || []);

const [languageData, setLanguageData] = useState(
  resume?.languages?.length
    ? resume.languages
    : [{ language: "", proficiency: "" }]
);

const [skills, setSkills] = useState(
  resume?.skills?.length
    ? resume.skills
    : [{ name: "", rating: "", type: "" }]
);


  const inputClass =
    'w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500';

  // --- Update Context When Any Section Changes ---
  useEffect(() => {
    updateSection('hobbies', hobbies);
  }, [hobbies]);

  useEffect(() => {
    updateSection('languages', languageData);
  }, [languageData]);

  useEffect(() => {
    updateSection('skills', skills);
  }, [skills]);

  // --- Hobbies ---
  const handleAddHobby = () => {
    if (hobby.trim() !== '') {
      setHobbies((prev) => [...prev, hobby.trim()]);
      setHobby('');
    }
  };

  const handleRemoveHobby = (index) => {
    setHobbies((prev) => prev.filter((_, i) => i !== index));
  };

  // --- Languages ---
  const handleLanguageChange = (index, field, value) => {
    const updated = [...languageData];
    updated[index][field] = value;
    setLanguageData(updated);
  };

  const handleRemoveLanguage = (index) => {
    setLanguageData((prev) => prev.filter((_, i) => i !== index));
  };

  // --- Skills ---
  const handleSkillChange = (index, field, value) => {
    const updated = [...skills];
    updated[index][field] = value;
    setSkills(updated);
  };

  const handleAddSkill = () => {
    setSkills((prev) => [...prev, { name: '', rating: '', type: '' }]);
  };

  const handleRemoveSkill = (index) => {
    setSkills((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-md border border-green-500 space-y-10">
      {/* Hobbies */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-green-700 text-center">Hobbies</h2>
        <div className="flex gap-2 mb-2">
          <div className="w-full">
            <label className="block text-sm font-medium text-green-600 mb-1">Hobby</label>
            <input
              type="text"
              placeholder="e.g., Painting, Hiking, Reading"
              value={hobby}
              onChange={(e) => setHobby(e.target.value)}
              className={inputClass}
            />
          </div>
          <button
            type="button"
            onClick={handleAddHobby}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 self-end"
          >
            Add
          </button>
        </div>

        {hobbies.length > 0 && (
          <ul className="list-disc pl-5 space-y-1">
            {hobbies.map((h, i) => (
              <li key={i} className="flex justify-between items-center">
                <span>{h}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveHobby(i)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Languages */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-green-700 text-center">Languages</h2>
        {languageData.map((lang, index) => (
          <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-green-600 mb-1">Language</label>
              <input
                placeholder="e.g., English, Spanish"
                value={lang.language}
                onChange={(e) =>
                  handleLanguageChange(index, 'language', e.target.value)
                }
                className={inputClass}
              />
            </div>
            <div className="flex gap-2">
              <div className="w-full">
                <label className="block text-sm font-medium text-green-600 mb-1">Proficiency</label>
                <select
                  value={lang.proficiency}
                  onChange={(e) =>
                    handleLanguageChange(index, 'proficiency', e.target.value)
                  }
                  className={inputClass}
                >
                  <option value="">Select Proficiency</option>
                  <option value="Native">Native</option>
                  <option value="Fluent">Fluent</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Basic">Basic</option>
                </select>
              </div>
              <button
                type="button"
                onClick={() => handleRemoveLanguage(index)}
                className="text-red-500 text-sm mt-auto mb-1"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            setLanguageData((prev) => [...prev, { language: '', proficiency: '' }])
          }
          className="text-green-600 hover:underline text-sm"
        >
          + Add another language
        </button>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-green-700 text-center">Skills</h2>
        {skills.map((skill, index) => (
          <div key={index} className="rounded-md mb-4 relative">
            <div className="mb-4">
              <label className="block text-sm font-medium text-green-600 mb-1">Skill Name</label>
              <input
                name="name"
                placeholder="e.g., JavaScript, Photoshop"
                value={skill.name}
                onChange={(e) => handleSkillChange(index, 'name', e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-green-600 mb-1">Skill Rating (1-5)</label>
                <input
                  type="number"
                  name="rating"
                  placeholder="e.g., 4"
                  min="1"
                  max="5"
                  value={skill.rating}
                  onChange={(e) => handleSkillChange(index, 'rating', e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-green-600 mb-1">Skill Type</label>
                <select
                  name="type"
                  value={skill.type}
                  onChange={(e) => handleSkillChange(index, 'type', e.target.value)}
                  className={inputClass}
                >
                  <option value="">Select Skill Type</option>
                  <option value="Technical">Technical</option>
                  <option value="Soft">Soft</option>
                  <option value="Language">Language</option>
                </select>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleRemoveSkill(index)}
              className="absolute top-2 right-2 text-red-500 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddSkill}
          className="text-green-600 hover:underline text-sm"
        >
          + Add another skill
        </button>
      </div>
    </div>
  );
};

export default HobbyLanguageSkillForm;
