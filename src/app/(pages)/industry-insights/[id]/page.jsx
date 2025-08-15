"use client";

import { useState } from "react";
import CheckIndustryInsights from "./_components/CheckIndustryInsights";
import MarketInsights from "./_components/MarketInsights";

const IndustryInsightsId = () => {
  const [insights, setInsights] = useState("");

  return (
    <div className="space-y-8">
     { !insights?<CheckIndustryInsights setInsights={setInsights} />:
      <MarketInsights insights={insights} />}
    </div>
  );
};

export default IndustryInsightsId;
