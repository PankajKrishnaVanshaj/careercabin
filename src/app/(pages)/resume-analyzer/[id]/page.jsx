"use client";
import { useState } from "react";
import ResumeScore from "./_components/ResumeScore";
import ResumeUploader from "./_components/ResumeUploader";

const ResumeAnalyzerId = () => {
  const [analysisResult, setAnalysisResult] = useState(null);

  return (
    <div>
      {analysisResult? 
      
      <ResumeScore result={analysisResult} />
      :
      <ResumeUploader onAnalysisComplete={setAnalysisResult} />
      
      }
    </div>
  );
};

export default ResumeAnalyzerId;
