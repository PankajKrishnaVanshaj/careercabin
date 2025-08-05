"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const ResumeContext = createContext();

const LOCAL_STORAGE_KEY = "resumeData";

const defaultResume = {
  title: "",
  personalInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    jobTitle: "",
    dateOfBirth: "",
    nationality: "",
    linkedIn: "",
    portfolio: "",
    github: "",
    profileImage: "",
    themeColor: "",
    summary: "",
  },
  education: [],
  experience: [],
  skills: [],
  certifications: [],
  languages: [],
  projects: [],
  awards: [],
  hobbies: [],
  reference: [],
  createdBy: "",
};

export const ResumeProvider = ({ children }) => {
  const [resume, setResume] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      return saved ? JSON.parse(saved) : defaultResume;
    }
    return defaultResume;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(resume));
    }
  }, [resume]);
  console.log(resume.references)

  const updateSection = (section, data) => {
    setResume((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const addItemToSection = (section, item) => {
    setResume((prev) => ({
      ...prev,
      [section]: [...(prev[section] || []), item],
    }));
  };

  const removeItemFromSection = (section, index) => {
    setResume((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }));
  };

  return (
    <ResumeContext.Provider
      value={{
        resume,
        setResume,
        updateSection,
        addItemToSection,
        removeItemFromSection,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => useContext(ResumeContext);
