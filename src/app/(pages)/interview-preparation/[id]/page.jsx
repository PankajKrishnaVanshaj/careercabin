"use client";

import { useState } from "react";
import CreateInterviewPreparation from "./_components/CreateInterviewPreparation";
import GeneratedInterviewPreparation from "./_components/GeneratedInterviewPreparation";

const InterviewPreparationId = () => {
  const [result, setResult] = useState("");

  return (
    <div className="space-y-8">
     { !result?<CreateInterviewPreparation setResult={setResult} />:
      <GeneratedInterviewPreparation result={result} />}
    </div>
  );
};

export default InterviewPreparationId;
