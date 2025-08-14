import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import runChat from "@/utils/AIModal";
import { IndustryInsightsPrompt } from "@/constants/IndustryInsights";

export default function CheckIndustryInsights() {
  const [formData, setFormData] = useState({
    industry: "",
    region: "",
    timeFrame: "",
    focusArea: "",
  });

  const [loading, setLoading] = useState(false);
  const [insights, setInsights] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { industry, region, timeFrame, focusArea } = formData;

      const res = await runChat(
        IndustryInsightsPrompt(industry, region, timeFrame, focusArea)
      );
      setInsights(res);
    } catch (error) {
      console.error("Error generating insights:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto bg-gradient-to-br from-green-50 via-white to-green-50 shadow-xl rounded-3xl p-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-green-700 mb-3">
          Industry Insights & Trends
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Enter your industry and preferences to get tailored, up-to-date
          insights and market trends.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {[
          {
            label: "Industry / Sector",
            name: "industry",
            placeholder: "e.g., Technology, Healthcare, Finance",
          },
          {
            label: "Region (Optional)",
            name: "region",
            placeholder: "e.g., USA, Europe, Asia",
          },
          {
            label: "Time Frame",
            name: "timeFrame",
            placeholder: "e.g., 2025, Next 6 months",
          },
          {
            label: "Focus Area",
            name: "focusArea",
            placeholder: "e.g., AI trends, market growth, hiring patterns",
          },
        ].map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {field.label}
            </label>
            <input
              type="text"
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
            />
          </div>
        ))}

        {/* Submit */}
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" /> Generating...
              </>
            ) : (
              <>
                <Send size={18} /> Get Insights
              </>
            )}
          </button>
        </div>
      </form>

      {/* Result */}
      {insights && (
        <div className="mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Market Insights
          </h2>
          <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
            {insights}
          </div>
        </div>
      )}
    </div>
  );
}
