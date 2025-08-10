"use client";

import { useResume } from "@/context/ResumeContext";
import React, { useState } from "react";

const ThemeColor = () => {
  const { resume, updateSection } = useResume();
  const [open, setOpen] = useState(false);
  const [inputColor, setInputColor] = useState(resume.themeColor || "#00A86B");

  const onColorSelect = (color) => {
    updateSection("themeColor", color);
    setOpen(false);
  };

  return (
    <div>
      {/* Button */}
      <button
        className="px-4 py-1 rounded-full text-xs font-medium border text-black shadow-sm hover:shadow-md transition"
        style={{
          background: resume.themeColor || "#00A86B",
          borderColor: resume.themeColor || "#00A86B",
        }}
        onClick={() => setOpen(true)}
      >
        Theme Color
      </button>

      {/* Dialog */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 transform scale-95 animate-scaleIn">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-semibold text-gray-800">
                🎨 Pick Theme Color
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-gray-700 transition"
              >
                ✕
              </button>
            </div>

            {/* Color Picker */}
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={inputColor}
                onChange={(e) => setInputColor(e.target.value)}
                className="w-12 h-12 cursor-pointer border rounded"
              />
              <input
                type="text"
                value={inputColor}
                onChange={(e) => setInputColor(e.target.value)}
                className="flex-1 border rounded px-2 py-1 text-sm"
              />
            </div>

            {/* Save Button */}
            <button
              onClick={() => onColorSelect(inputColor)}
              className="mt-4 w-full py-2 rounded-md text-white font-semibold shadow-sm hover:opacity-90"
              style={{ background: inputColor }}
            >
              Apply Color
            </button>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ThemeColor;
