import React from "react";
import { FileText } from "lucide-react";

const GeneratedCoverLetter = ({ coverLetter }) => {
  if (!coverLetter) return null;

  const data =
    typeof coverLetter === "string" ? coverLetter : String(coverLetter);

  return (
    <div className="bg-gradient-to-br from-green-50 to-white shadow-xl rounded-3xl p-8 mt-10 border border-green-200">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 border-b border-green-200 pb-4">
        <div className="p-3 bg-green-100 rounded-2xl shadow-md">
          <FileText className="w-6 h-6 text-green-700" />
        </div>
        <h2 className="text-2xl font-bold text-green-800">
          Your Generated Cover Letter
        </h2>
      </div>

      {/* Letter Body */}
      <div className="relative bg-white rounded-2xl border border-green-100 shadow-inner p-6">
        <pre className="whitespace-pre-wrap text-gray-800 leading-relaxed font-serif tracking-wide">
          {data}
        </pre>
      </div>

      
    </div>
  );
};

export default GeneratedCoverLetter;
