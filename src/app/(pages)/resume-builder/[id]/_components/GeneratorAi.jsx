import { Sparkles } from "lucide-react";
import React, { useState } from "react";
import runChat from "@/utils/AIModal";

const GeneratorAi = ({ Prompt, onGenerate }) => {
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await runChat(Prompt);
      const cleaned = res
        .replace(/^\s*```[a-z]*\s*/i, "")
        .replace(/```$/, "")
        .trim();
      onGenerate(cleaned); // send back to parent
    } catch (error) {
      console.error("AI generation failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleGenerate}
      disabled={loading}
      className="flex items-center gap-1.5 px-2.5 py-1 text-xs bg-green-600 text-white border-green-600 
      rounded-lg ring-1 ring-green-800/50 hover:ring-green-700/50 transition-all"
    >
      <Sparkles className="w-3.5 h-3.5" />
      {loading ? "Generating..." : "AI"}
    </button>
  );
};

export default GeneratorAi;
