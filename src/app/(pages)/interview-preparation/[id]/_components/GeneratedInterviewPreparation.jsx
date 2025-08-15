import React from "react";

const GeneratedInterviewPreparation = ({ result }) => {
  if (!result) return null;

  const data = typeof result === "string" ? JSON.parse(result) : result;

  return (
    <div className="bg-white shadow-lg rounded-3xl p-8 mt-8 border border-green-100 space-y-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        Interview Preparation Guide
      </h2>

      {/* General Questions */}
      {Array.isArray(data.generalQuestions) && (
        <section>
          <h3 className="text-lg font-semibold text-gray-800">General Questions</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {data.generalQuestions.map((q, index) => (
              <li key={index}>
                <span className="font-medium">{q.question}</span>
                {q.purpose && (
                  <p className="text-sm text-gray-500">Purpose: {q.purpose}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Technical Questions */}
      {Array.isArray(data.technicalQuestions) && (
        <section>
          <h3 className="text-lg font-semibold text-gray-800">Technical Questions</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {data.technicalQuestions.map((q, index) => (
              <li key={index}>
                <span className="font-medium">{q.question}</span>
                {q.purpose && (
                  <p className="text-sm text-gray-500">Purpose: {q.purpose}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Behavioral Questions */}
      {Array.isArray(data.behavioralQuestions) && (
        <section>
          <h3 className="text-lg font-semibold text-gray-800">Behavioral Questions</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {data.behavioralQuestions.map((q, index) => (
              <li key={index}>
                <span className="font-medium">{q.question}</span>
                {q.purpose && (
                  <p className="text-sm text-gray-500">Purpose: {q.purpose}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Situational Questions */}
      {Array.isArray(data.situationalQuestions) && (
        <section>
          <h3 className="text-lg font-semibold text-gray-800">Situational Questions</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {data.situationalQuestions.map((q, index) => (
              <li key={index}>
                <span className="font-medium">{q.question}</span>
                {q.purpose && (
                  <p className="text-sm text-gray-500">Purpose: {q.purpose}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Tips */}
      {Array.isArray(data.tips) && (
        <section>
          <h3 className="text-lg font-semibold text-gray-800">Tips</h3>
          <ul className="list-disc list-inside text-gray-700">
            {data.tips.map((t, index) => (
              <li key={index}>{t.tip}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default GeneratedInterviewPreparation;
