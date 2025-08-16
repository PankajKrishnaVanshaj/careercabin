import React from "react";
import {
  LineChart,
  TrendingUp,
  Lightbulb,
  AlertTriangle,
  Eye,
  CheckCircle,
  Building2,
} from "lucide-react";

const Section = ({ title, icon: Icon, children }) => (
  <div className="rounded-2xl p-6 shadow-lg border border-green-200 backdrop-blur-md bg-white/70 hover:shadow-xl transition-all duration-300">
    {/* Header */}
    <div className="flex items-center gap-3 mb-5 pb-3 border-b border-green-100">
      <div className="p-2 rounded-xl bg-green-100 flex items-center justify-center">
        <Icon className="w-5 h-5 text-green-700" />
      </div>
      <h3 className="text-lg font-semibold text-green-800">{title}</h3>
    </div>

    {/* Content */}
    <div className="space-y-4">{children}</div>
  </div>
);

const Card = ({ title, description, footer }) => (
  <div className="p-5 rounded-xl border border-green-100 bg-green-50/70 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
    <h4 className="font-semibold text-green-800">{title}</h4>
    <p className="text-gray-700 mt-1">{description}</p>
    {footer && <p className="text-sm text-green-600 mt-3">{footer}</p>}
  </div>
);

const MarketInsights = ({ insights }) => {
  if (!insights) return null;

  let data = typeof insights === "string" ? JSON.parse(insights) : insights;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex items-center gap-3 mb-12">
        <div className="p-3 rounded-2xl bg-green-100 flex items-center justify-center">
          <LineChart className="w-7 h-7 text-green-700" />
        </div>
        <h2 className="text-4xl font-bold text-green-800 tracking-tight">
          Market Insights
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {/* Key Trends */}
        {Array.isArray(data.keyTrends) && (
          <Section title="Key Trends" icon={TrendingUp}>
            {data.keyTrends.map((trend, i) => (
              <Card
                key={i}
                title={trend.title}
                description={trend.description}
                footer={`Source: ${trend.source}`}
              />
            ))}
          </Section>
        )}

        {/* Opportunities */}
        {Array.isArray(data.opportunities) && (
          <Section title="Opportunities" icon={Lightbulb}>
            {data.opportunities.map((opp, i) => (
              <Card
                key={i}
                title={opp.title}
                description={opp.description}
                footer={`Market Size: ${opp.marketSize} | Growth Rate: ${opp.growthRate}`}
              />
            ))}
          </Section>
        )}

        {/* Challenges */}
        {Array.isArray(data.challenges) && (
          <Section title="Challenges" icon={AlertTriangle}>
            {data.challenges.map((ch, i) => (
              <Card
                key={i}
                title={ch.title}
                description={ch.description}
                footer={`Impact: ${ch.impact}`}
              />
            ))}
          </Section>
        )}

        {/* Future Outlook */}
        {Array.isArray(data.futureOutlook) && (
          <Section title="Future Outlook" icon={Eye}>
            {data.futureOutlook.map((out, i) => (
              <Card
                key={i}
                title={out.prediction}
                description={out.reasoning}
                footer={`Confidence: ${out.confidenceLevel}`}
              />
            ))}
          </Section>
        )}

        {/* Recommended Actions */}
        {Array.isArray(data.recommendedActions) && (
          <Section title="Recommended Actions" icon={CheckCircle}>
            {data.recommendedActions.map((act, i) => (
              <Card
                key={i}
                title={act.action}
                description={act.details}
                footer={`Priority: ${act.priority} | Time Horizon: ${act.timeHorizon}`}
              />
            ))}
          </Section>
        )}

        {/* Real-World Examples */}
        {Array.isArray(data.realWorldExamples) && (
          <Section title="Real-World Examples" icon={Building2}>
            {data.realWorldExamples.map((ex, i) => (
              <Card
                key={i}
                title={ex.company}
                description={ex.description}
                footer={`Outcome: ${ex.outcome} | Source: ${ex.source}`}
              />
            ))}
          </Section>
        )}
      </div>
    </div>
  );
};

export default MarketInsights;
