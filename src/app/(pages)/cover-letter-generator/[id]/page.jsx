"use client";
import { useState } from "react";
import CreateCoverLetter from "./_components/CreateCoverLetter";
import GeneratedCoverLetter from "./_components/GeneratedCoverLetter";

const CoverLetterGeneratorId = () => {
  const [coverLetter, setCoverLetter] = useState("");

  return (
    <div className="space-y-8">
      {!coverLetter?<CreateCoverLetter setCoverLetter={setCoverLetter} />:
      <GeneratedCoverLetter coverLetter={coverLetter} />}
    </div>
  );
};

export default CoverLetterGeneratorId;
