import React from "react";

const GeneratedCoverLetter = ({ coverLetter }) => {
  if (!coverLetter) return null;

  const data =
    typeof coverLetter === "string" ? coverLetter : String(coverLetter);

  return (
    <div className="bg-white shadow-lg rounded-3xl p-8 mt-8 border border-green-100">
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        Your Generated Cover Letter
      </h2>
      <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed">
        {data}
      </pre>
    </div>
  );
};

export default GeneratedCoverLetter;
