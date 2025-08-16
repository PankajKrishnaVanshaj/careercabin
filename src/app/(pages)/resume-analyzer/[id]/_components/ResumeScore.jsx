import {
  FileCheck,
  Type,
  FileText,
  Layout,
  Star,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

export default function ResumeScore({ result }) {
  if (!result) return null;
  const data = typeof result === "string" ? JSON.parse(result) : result;

  const [openSection, setOpenSection] = useState(null);

  const sections = [
    { key: "ATS", label: "ATS", icon: <FileCheck size={18} /> },
    { key: "toneAndStyle", label: "Tone & Style", icon: <Type size={18} /> },
    { key: "content", label: "Content", icon: <FileText size={18} /> },
    { key: "structure", label: "Structure", icon: <Layout size={18} /> },
    { key: "skills", label: "Skills", icon: <Star size={18} /> },
  ];

  const getColor = (score) => {
    if (score >= 75) return "#22C55E"; // green
    if (score >= 50) return "#FACC15"; // yellow
    return "#EF4444"; // red
  };

 const renderCircle = (score, size = 50) => {
  const radius = size / 2 - 5;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} className="rotate-[-90deg]">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E5E7EB"
          strokeWidth="5"
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={getColor(score)}
          strokeWidth="5"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-700 ease-out"
        />
      </svg>
      <span
        className={`absolute font-semibold ${
          size >= 100 ? "text-4xl" : "text-sm"
        } ${
          score >= 75
            ? "text-green-700"
            : score >= 50
            ? "text-yellow-600"
            : "text-red-600"
        }`}
      >
        {score ?? "N/A"}%
      </span>
    </div>
  );
};


  const renderTips = (tips) => (
    <ul className="mt-2 space-y-2 pl-2">
      {tips.map((tip, idx) => (
        <li
          key={idx}
          className={`p-3 rounded-lg border transition-all duration-200 hover:shadow-md ${
            tip.type === "good"
              ? "border-green-200 bg-green-50"
              : "border-red-200 bg-red-50"
          }`}
        >
          <p
            className={`font-medium ${
              tip.type === "good" ? "text-green-700" : "text-red-700"
            }`}
          >
            {tip.tip}
          </p>
          {tip.explanation && (
            <p className="text-sm text-gray-600">{tip.explanation}</p>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
  {/* Heading */}
  <h2 className="text-4xl font-bold text-green-800 mb-6 text-center">
     Resume Analyzed Score
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Left Column - Overall Score */}
    <div className="col-span-1 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100 shadow-inner">
      {renderCircle(data?.overallScore ?? 0, 150)}
      <h2 className="text-xl font-semibold text-green-700 mt-4">
        Overall Score
      </h2>
    </div>

    {/* Right Column - Sections */}
    <div className="col-span-2 divide-y divide-gray-200">
      {sections.map((section) => {
        const score = data?.[section.key]?.score ?? null;
        const isOpen = openSection === section.key;
        return (
          <div key={section.key} className="py-4">
            {/* Section Header */}
            <div
              className="flex items-center justify-between cursor-pointer group"
              onClick={() => setOpenSection(isOpen ? null : section.key)}
            >
              <div className="flex items-center gap-4">
                {renderCircle(score ?? 0)}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    {section.icon}
                    {section.label}
                  </h3>
                </div>
              </div>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Animated Tips */}
            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                isOpen ? "max-h-96 mt-3" : "max-h-0"
              }`}
            >
              {data?.[section.key]?.tips &&
                renderTips(data[section.key].tips)}
            </div>
          </div>
        );
      })}
    </div>
  </div>
</div>

  );
}
