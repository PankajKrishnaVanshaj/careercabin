import React from "react";

const MarketInsights = ({ insights }) => {
  if (!insights) return null;

  const data = typeof insights === "string" ? JSON.parse(insights) : insights;

  return (
    <div className="bg-white shadow-lg rounded-3xl p-8 mt-8 border border-green-100 space-y-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Market Insights</h2>

      {/* Key Trends */}
      {Array.isArray(data.keyTrends) && (
        <section>
          <h3 className="text-lg font-semibold text-gray-800">Key Trends</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {data.keyTrends.map((trend, i) => (
              <li key={i}>
                <p className="font-medium">{trend.title}</p>
                <p>{trend.description}</p>
                {trend.source && (
                  <a
                    href={trend.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Source
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Opportunities */}
      {Array.isArray(data.opportunities) && (
        <section>
          <h3 className="text-lg font-semibold text-gray-800">Opportunities</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {data.opportunities.map((opp, i) => (
              <li key={i}>
                <p className="font-medium">{opp.title}</p>
                <p>{opp.description}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Challenges */}
      {Array.isArray(data.challenges) && (
        <section>
          <h3 className="text-lg font-semibold text-gray-800">Challenges</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {data.challenges.map((ch, i) => (
              <li key={i}>
                <p className="font-medium">{ch.title}</p>
                <p>{ch.description}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Future Outlook */}
      {Array.isArray(data.futureOutlook) && (
        <section>
          <h3 className="text-lg font-semibold text-gray-800">Future Outlook</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {data.futureOutlook.map((fo, i) => (
              <li key={i}>
                <p className="font-medium">{fo.prediction}</p>
                <p>{fo.reasoning}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Recommended Actions */}
      {Array.isArray(data.recommendedActions) && (
        <section>
          <h3 className="text-lg font-semibold text-gray-800">Recommended Actions</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {data.recommendedActions.map((ra, i) => (
              <li key={i}>
                <p className="font-medium">{ra.action}</p>
                <p>{ra.details}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Real-World Examples */}
      {Array.isArray(data.realWorldExamples) && (
        <section>
          <h3 className="text-lg font-semibold text-gray-800">Real-World Examples</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {data.realWorldExamples.map((ex, i) => (
              <li key={i}>
                <p className="font-medium">{ex.company}</p>
                <p>{ex.description}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default MarketInsights;
