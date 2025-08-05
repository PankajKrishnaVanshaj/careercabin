"use client";

import { useResume } from "@/context/ResumeContext";
import React, { useState } from "react";

const ThemeColor = () => {
  const { resume, updateSection } = useResume();
  const [open, setOpen] = useState(false);

  const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF",
    "#33FFA1", "#FF7133", "#71FF33", "#7133FF", "#FF3371",
    "#33FF71", "#3371FF", "#A1FF33", "#33A1FF", "#FF5733",
    "#5733FF", "#33FF5A", "#5A33FF", "#FF335A", "#335AFF",
  ];

  const onColorSelect = (color) => {
    updateSection("themeColor", color);
  };

  return (
    <div>
      <button
        className="px-4 py-1 rounded-full text-xs font-normal border border-green-500 text-black"
        style={{ background: resume.themeColor }}
        onClick={() => setOpen(!open)}
      >
       Theme Colors
      </button>

      {open && (
        <>
          <h2 className="mb-2 text-sm font-bold">Select Theme Color</h2>
          <div className="grid grid-cols-5 gap-3">
            {colors.map((item, index) => (
              <div
                key={index}
                className="h-5 w-5 rounded-full cursor-pointer border hover:border-black"
                style={{ background: item }}
                onClick={() => onColorSelect(item)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeColor;
