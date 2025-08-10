"use client";
import React, { use, useEffect } from "react";
import axios from "axios";
import FormSection from "./_components/FormSection";
import PreviewSection from "./_components/PreviewSection";
import AddResume from "./_components/AddResume";
import { useResume } from "@/context/ResumeContext";

const ResumeId = ({ params }) => {
  const { id } = use(params);
  const { setResume } = useResume();

 useEffect(() => {
  if (id !== "create") {
    axios
      .get(`/api/resume/${id}`)
      .then((res) => {
        setResume(res.data.data);
      })
      .catch((err) => console.error("Error fetching resume:", err));
  }
}, [id]);


  if (id === "create") {
    return <AddResume />;
  }

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FormSection />
        <PreviewSection />
      </div>
    </div>
  );
};

export default ResumeId;
