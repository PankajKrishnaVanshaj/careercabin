import React, { useState } from "react";
import {
  HelpCircle,
  Code,
  Users,
  Briefcase,
  Lightbulb,
} from "lucide-react";

const tabs = [
  { key: "generalQuestions", label: "General", icon: HelpCircle },
  { key: "technicalQuestions", label: "Technical", icon: Code },
  { key: "behavioralQuestions", label: "Behavioral", icon: Users },
  { key: "situationalQuestions", label: "Situational", icon: Briefcase },
];

const StepCard = ({ question, purpose, index }) => (
  <div className="p-4 border border-green-200 rounded-xl bg-green-50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white font-semibold shadow-md">
        {index + 1}
      </div>
      <div>
        <p className="font-medium text-gray-800">{question}</p>
        {purpose && (
          <p className="text-sm text-green-600 mt-1">🎯 {purpose}</p>
        )}
      </div>
    </div>
  </div>
);

const TipCard = ({ tip }) => (
  <div className="p-4 border border-green-200 rounded-xl bg-green-50 shadow-sm hover:shadow-md transition">
    <p className="text-gray-700">💡 {tip}</p>
  </div>
);

const GeneratedInterviewPreparation = ({ result }) => {
  if (!result) return null;

  const data = typeof result === "string" ? JSON.parse(result) : result;
  const [activeTab, setActiveTab] = useState("generalQuestions");

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-green-800 tracking-tight">
          Interview Preparation Hub
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Navigate through different types of interview questions and explore expert tips on the side.
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2">
          {/* Tabs */}
          <div className="flex gap-3 mb-6 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-200 ${
                  activeTab === tab.key
                    ? "bg-green-600 text-white border-green-600 shadow-md"
                    : "bg-white text-green-700 border-green-300 hover:bg-green-50"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Questions */}
          <div className="space-y-4">
            {Array.isArray(data[activeTab]) &&
              data[activeTab].map((q, i) => (
                <StepCard
                  key={i}
                  question={q.question}
                  purpose={q.purpose}
                  index={i}
                />
              ))}
          </div>
        </div>

        {/* Tips Sidebar */}
        {Array.isArray(data.tips) && (
          <div>
            <div className="bg-white border border-green-200 rounded-2xl shadow-md p-6 space-y-4 sticky top-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <Lightbulb className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold text-green-800">
                  Pro Tips
                </h3>
              </div>
              {data.tips.map((t, i) => (
                <TipCard key={i} tip={t.tip} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneratedInterviewPreparation;
