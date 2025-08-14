export default function CareerRoadmap({ roadmap }) {
  if (!roadmap) return null;

  return (
    <div className="mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Your Career Roadmap</h2>
      <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
        {roadmap}
      </div>
    </div>
  );
}
