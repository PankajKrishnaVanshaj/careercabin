// Define the expected JSON output structure
const AIResponseFormat = `
{
  "keyTrends": [
    { "title": "string", "description": "string", "source": "string" }
  ],
  "opportunities": [
    { "title": "string", "description": "string", "marketSize": "string", "growthRate": "string" }
  ],
  "challenges": [
    { "title": "string", "description": "string", "impact": "string" }
  ],
  "futureOutlook": [
    { "prediction": "string", "reasoning": "string", "confidenceLevel": "string" }
  ],
  "recommendedActions": [
    { "action": "string", "details": "string", "priority": "string", "timeHorizon": "string" }
  ],
  "realWorldExamples": [
    { "company": "string", "description": "string", "outcome": "string", "source": "string" }
  ]
}
`;

export const IndustryInsightsPrompt = ({
  industry,
  region,
  timeFrame,
  focusArea
}) => `
You are a **world-class market research analyst** with deep expertise in analyzing trends, risks, and opportunities across industries.

Task:
Produce **data-driven insights** for the **${region || "global"} ${industry || "target"} industry** in the time frame: ${timeFrame || "the current year"}.

Output Format Rules:
- Output **only** valid JSON strictly matching the schema:
${AIResponseFormat}
- No text, commentary, or markdown outside the JSON.
- Every array must contain **at least 3 well-researched, specific, and non-generic entries**.
- Each fact must be **plausible, specific, and backed by recent real-world data**.
- When citing sources (in "keyTrends"), give credible publications, research reports, or reputable websites.
- Keep descriptions **clear, concise, and actionable** — avoid fluff.

Content Requirements:
1. **keyTrends** — Highlight the top developments shaping ${industry} in ${region}. Include causes, impact, and credible sources.
2. **opportunities** — Identify high-potential growth areas, emerging niches, or under-served markets.
3. **challenges** — Explain critical risks, market constraints, or competitive threats with context.
4. **futureOutlook** — Provide specific predictions and the reasoning behind them, considering economic, technological, and policy factors.
5. **recommendedActions** — Suggest clear, practical steps companies or investors can take to succeed.
6. **realWorldExamples** — Share case studies of companies that have acted successfully (or failed) in similar contexts.

Focus:
${focusArea || "Include all relevant market dimensions: consumer trends, technology, competition, regulations, and supply chain factors."}
`;
