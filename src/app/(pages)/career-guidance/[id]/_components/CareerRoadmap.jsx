export default function CareerRoadmap({ roadmap }) {
  if (!roadmap) return null;
  const data = typeof roadmap === "string" ? JSON.parse(roadmap) : roadmap;

  return (
    <div className="mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-200 space-y-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Your Career Roadmap</h2>

      {/* Introduction */}
      {data.introduction && (
        <section>
          <h3 className="text-lg font-semibold text-gray-800">Introduction</h3>
          <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
            {data.introduction}
          </p>
        </section>
      )}

      {/* Career Roadmap */}
      {Array.isArray(data.career_roadmap) && (
        <section>
          <h3 className="text-lg font-semibold text-gray-800">Career Roadmap</h3>
          <div className="space-y-4">
            {data.career_roadmap.map((phase, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-green-600">{phase.phase}</h4>
                <p className="text-sm text-gray-500">Timeframe: {phase.timeframe}</p>

                {phase.goals?.length > 0 && (
                  <div className="mt-2">
                    <h5 className="font-semibold">Goals:</h5>
                    <ul className="list-disc list-inside text-gray-700">
                      {phase.goals.map((goal, i) => (
                        <li key={i}>{goal}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {phase.actions?.length > 0 && (
                  <div className="mt-2">
                    <h5 className="font-semibold">Actions:</h5>
                    <ul className="list-disc list-inside text-gray-700">
                      {phase.actions.map((action, i) => (
                        <li key={i}>{action}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {phase.resources?.length > 0 && (
                  <div className="mt-2">
                    <h5 className="font-semibold">Resources:</h5>
                    <ul className="list-disc list-inside text-blue-600">
                      {phase.resources.map((res, i) => (
                        <li key={i}>
                          <a
                            href={res.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {res.type}: {res.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skill Development */}
      {Array.isArray(data.skill_development) && (
        <section>
          <h3 className="text-lg font-semibold text-gray-800">Skill Development</h3>
          <div className="space-y-4">
            {data.skill_development.map((skill, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-green-600">{skill.skill}</h4>
                <p className="text-gray-700">{skill.importance}</p>

                {skill.learning_resources?.length > 0 && (
                  <div className="mt-2">
                    <h5 className="font-semibold">Learning Resources:</h5>
                    <ul className="list-disc list-inside text-blue-600">
                      {skill.learning_resources.map((res, i) => (
                        <li key={i}>
                          <a
                            href={res.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {res.name} ({res.platform})
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Networking Strategy */}
      {Array.isArray(data.networking_strategy) && (
        <section>
          <h3 className="text-lg font-semibold text-gray-800">Networking Strategy</h3>
          <ul className="list-disc list-inside text-gray-700">
            {data.networking_strategy.map((net, index) => (
              <li key={index}>
                {net.tip} — <span className="text-green-600">{net.platform_or_event}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Milestone Checkpoints */}
      {Array.isArray(data.milestone_checkpoints) && (
        <section>
          <h3 className="text-lg font-semibold text-gray-800">Milestone Checkpoints</h3>
          <ul className="list-disc list-inside text-gray-700">
            {data.milestone_checkpoints.map((mile, index) => (
              <li key={index}>
                <span className="font-semibold">{mile.milestone}</span> —{" "}
                <span className="text-sm text-gray-500">{mile.expected_timeframe}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
