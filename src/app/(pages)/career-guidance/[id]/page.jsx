"use client";
import { useState } from "react";
import CareerRoadmap from "./_components/CareerRoadmap";
import CreateCareerGuidance from "./_components/CreateCareerGuidance";

export default function CareerGuidanceId() {
  const [roadmap, setRoadmap] = useState("");

  return (
    <div>
      {roadmap ? (
        <CareerRoadmap roadmap={roadmap} />
      ) : (
        <CreateCareerGuidance onRoadmapGenerated={setRoadmap} />
      )}
    </div>
  );
}
