import React from "react";
import { FileText } from "lucide-react";

const GeneratedCoverLetter = ({ coverLetter }) => {
  if (!coverLetter) return null;

  const data =
    typeof coverLetter === "string" ? coverLetter : String(coverLetter);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex items-center gap-3 mb-12">
        <div className="p-3 rounded-2xl bg-green-100 flex items-center justify-center">
          <FileText className="w-7 h-7 text-green-700" />
        </div>
        <h2 className="text-4xl font-bold text-green-800 tracking-tight">
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
