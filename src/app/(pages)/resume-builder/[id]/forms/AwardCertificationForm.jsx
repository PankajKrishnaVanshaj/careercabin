import { useResume } from "@/context/ResumeContext";
import React, { useState, useEffect } from "react";
import GeneratorAi from "../_components/GeneratorAi";

const AwardCertificationForm = () => {
  const { resume, updateSection } = useResume();

  const [awards, setAwards] = useState(
    resume.awards && resume.awards.length > 0
      ? resume.awards
      : [{ title: "", issuer: "", date: "", description: "" }]
  );

  const [certifications, setCertifications] = useState(
    resume.certifications && resume.certifications.length > 0
      ? resume.certifications
      : [{ title: "", issuer: "", date: "", link: "", description: "" }]
  );

  // Sync with context whenever awards or certifications change
  useEffect(() => {
    updateSection("awards", awards);
    updateSection("certifications", certifications);
  }, [awards, certifications]);

  const handleAwardChange = (index, e) => {
    const { name, value } = e.target;
    const updatedAwards = [...awards];
    updatedAwards[index][name] = value;
    setAwards(updatedAwards);
  };

  const handleCertificationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedCerts = [...certifications];
    updatedCerts[index][name] = value;
    setCertifications(updatedCerts);
  };

  const addAward = () => {
    setAwards([
      ...awards,
      { title: "", issuer: "", date: "", description: "" },
    ]);
  };

  const removeAward = (index) => {
    const updatedAwards = awards.filter((_, i) => i !== index);
    setAwards(updatedAwards);
  };

  const addCertification = () => {
    setCertifications([
      ...certifications,
      { title: "", issuer: "", date: "", link: "" },
    ]);
  };

  const removeCertification = (index) => {
    const updatedCerts = certifications.filter((_, i) => i !== index);
    setCertifications(updatedCerts);
  };

  const inputClass =
    "w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500";

  const labelClass = "block text-sm font-medium text-green-600 mb-1";

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-md border border-green-500 space-y-12">
      {/* Awards Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-green-700 text-center">
          Awards
        </h2>
        {awards.map((award, index) => (
          <div key={index} className="space-y-4">
            <div>
              <label className={labelClass}>Award Title</label>
              <input
                name="title"
                value={award.title}
                onChange={(e) => handleAwardChange(index, e)}
                placeholder="e.g., Employee of the Year"
                className={inputClass}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Issued By</label>
                <input
                  name="issuer"
                  value={award.issuer}
                  onChange={(e) => handleAwardChange(index, e)}
                  placeholder="e.g., ABC Corp"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Date Received</label>
                <input
                  type="date"
                  name="date"
                  value={award.date}
                  onChange={(e) => handleAwardChange(index, e)}
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className={labelClass}>Description</label>

                <GeneratorAi Prompt={``} onGenerate={(generatedText) => {}} />
              </div>
              <textarea
                name="description"
                value={award.description}
                onChange={(e) => handleAwardChange(index, e)}
                placeholder="Awarded for outstanding performance..."
                className={inputClass}
                rows={3}
              />
            </div>
            {awards.length > 1 && (
              <button
                onClick={() => removeAward(index)}
                className="text-red-600 text-sm mt-2 hover:underline"
              >
                Remove Award
              </button>
            )}
          </div>
        ))}
        <button
          onClick={addAward}
          className="text-green-600 hover:underline text-sm mt-4"
        >
          + Add another Award
        </button>
      </div>

      {/* Certifications Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-green-700 text-center">
          Certifications
        </h2>
        {certifications.map((cert, index) => (
          <div key={index} className="space-y-4">
            <div>
              <label className={labelClass}>Certification Title</label>
              <input
                name="title"
                value={cert.title}
                onChange={(e) => handleCertificationChange(index, e)}
                placeholder="e.g., Google Cloud Architect"
                className={inputClass}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Issued By</label>
                <input
                  name="issuer"
                  value={cert.issuer}
                  onChange={(e) => handleCertificationChange(index, e)}
                  placeholder="e.g., Google"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Date Issued</label>
                <input
                  type="date"
                  name="date"
                  value={cert.date}
                  onChange={(e) => handleCertificationChange(index, e)}
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className={labelClass}>Description</label>

                <GeneratorAi Prompt={``} onGenerate={(generatedText) => {}} />
              </div>
              <textarea
                name="description"
                value={cert.description}
                onChange={(e) => handleCertificationChange(index, e)}
                placeholder="e.g., Validated expertise in cloud architecture and deployment."
                className={inputClass}
                rows={3}
              />
            </div>
            <div>
              <label className={labelClass}>
                Certificate Link{" "}
                <span className="text-gray-500">(optional)</span>
              </label>
              <input
                name="link"
                type="url"
                value={cert.link}
                onChange={(e) => handleCertificationChange(index, e)}
                placeholder="https://example.com/cert.pdf"
                className={inputClass}
              />
            </div>
            {certifications.length > 1 && (
              <button
                onClick={() => removeCertification(index)}
                className="text-red-600 text-sm mt-2 hover:underline"
              >
                Remove Certification
              </button>
            )}
          </div>
        ))}
        <button
          onClick={addCertification}
          className="text-green-600 hover:underline text-sm mt-4"
        >
          + Add another Certification
        </button>
      </div>
    </div>
  );
};

export default AwardCertificationForm;
