import {
  Target,
  CheckCircle,
  BookOpen,
  Network,
  Flag,
  Rocket,
} from "lucide-react";

export default function CareerRoadmap({ roadmap }) {
  if (!roadmap) return null;
  const data = typeof roadmap === "string" ? JSON.parse(roadmap) : roadmap;

  return (
    <div className="p-8 rounded-2xl shadow-xl space-y-12 animate-fadeIn">
      {/* Header */}
      <h2 className="text-4xl font-extrabold text-green-700 text-center flex items-center justify-center gap-3">
        <Rocket className="w-9 h-9 text-green-800" /> Your Career Roadmap
      </h2>

      {/* Introduction */}
      {data.introduction && (
        <section className="mx-auto text-center bg-white/70 p-6 rounded-2xl border border-green-200 shadow-sm backdrop-blur">
          <h3 className="text-xl font-semibold text-green-800 mb-3">
            Introduction
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            {data.introduction}
          </p>
        </section>
      )}

      {/* Career Roadmap */}
      {Array.isArray(data.career_roadmap) && (
        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
            <Target className="w-7 h-7 text-green-600" /> Career Roadmap
          </h3>

          <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-4 md:space-y-0">
            {data.career_roadmap.map((phase, index) => (
              <div
                key={index}
                className="relative flex-1 bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg hover:scale-[1.02] transition"
              >
                {/* Connector line */}
                {index !== data.career_roadmap.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-10 h-[3px] bg-gradient-to-r from-green-400 to-green-200 translate-x-1/2"></div>
                )}

                {/* Phase timeframe */}
                <span className="inline-block px-4 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700 mb-2">
                  {phase.timeframe}
                </span>

                <h4 className="text-lg font-bold text-green-700 mb-4">
                  {phase.phase}
                </h4>

                {/* Goals */}
                {phase.goals?.length > 0 && (
                  <div className="mb-3">
                    <h5 className="font-semibold flex items-center gap-2 text-gray-800">
                      <Target className="w-4 h-4 text-green-600" /> Goals
                    </h5>
                    <ul className="list-disc list-inside text-gray-700 text-sm ml-3 space-y-1">
                      {phase.goals.map((goal, i) => (
                        <li key={i}>{goal}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Actions */}
                {phase.actions?.length > 0 && (
                  <div className="mb-3">
                    <h5 className="font-semibold flex items-center gap-2 text-gray-800">
                      <CheckCircle className="w-4 h-4 text-green-600" /> Actions
                    </h5>
                    <ul className="list-disc list-inside text-gray-700 text-sm ml-3 space-y-1">
                      {phase.actions.map((action, i) => (
                        <li key={i}>{action}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Resources */}
                {phase.resources?.length > 0 && (
                  <div>
                    <h5 className="font-semibold flex items-center gap-2 text-gray-800">
                      <BookOpen className="w-4 h-4 text-green-600" /> Resources
                    </h5>
                    <ul className="list-disc list-inside text-blue-600 text-sm ml-3 space-y-1">
                      {phase.resources.map((res, i) => (
                        <li key={i}>
                          <a
                            href={res.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-600 hover:underline transition"
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
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <BookOpen className="w-7 h-7 text-green-600" /> Skill Development
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {data.skill_development.map((skill, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-2xl bg-white shadow-md hover:shadow-lg hover:scale-[1.02] transition"
              >
                <h4 className="font-bold text-green-700 text-lg mb-2">
                  {skill.skill}
                </h4>
                <p className="text-gray-700 mb-3">{skill.importance}</p>

                {skill.learning_resources?.length > 0 && (
                  <div>
                    <h5 className="font-semibold mb-2 text-gray-800">
                      📚 Resources
                    </h5>
                    <ul className="list-disc list-inside text-blue-600 text-sm ml-3 space-y-1">
                      {skill.learning_resources.map((res, i) => (
                        <li key={i}>
                          <a
                            href={res.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-600 hover:underline transition"
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
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Network className="w-7 h-7 text-green-600" /> Networking Strategy
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {data.networking_strategy.map((net, index) => (
              <div
                key={index}
                className="p-5 bg-white border border-gray-200 rounded-2xl shadow hover:shadow-md transition"
              >
                <p className="text-gray-700">
                  {net.tip} —{" "}
                  <span className="text-green-600 font-medium">
                    {net.platform_or_event}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Milestones */}
      {Array.isArray(data.milestone_checkpoints) && (
        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Flag className="w-7 h-7 text-green-600" /> Milestone Checkpoints
          </h3>
          <div className="flex flex-wrap gap-4">
            {data.milestone_checkpoints.map((mile, index) => (
              <div
                key={index}
                className="px-5 py-3 bg-gradient-to-r from-green-100 to-green-50 border border-green-300 rounded-lg text-sm shadow-sm hover:scale-105 transition"
              >
                <span className="font-semibold text-green-800">
                  {mile.milestone}
                </span>{" "}
                <span className="text-gray-500">
                  ({mile.expected_timeframe})
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
