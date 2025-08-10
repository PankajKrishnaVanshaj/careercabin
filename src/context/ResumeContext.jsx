"use client";
import React, { createContext, useContext, useState } from "react";

const ResumeContext = createContext();

const defaultResume = {
  themeColor: "",
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
  const [resume, setResume] = useState(defaultResume);

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
