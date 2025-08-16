const AIResponseFormat = `
{
  "introduction": "string - 2-3 sentences, motivational, directly referencing the user's background, aspirations, and challenges, while projecting a clear forward-looking vision.",
  "career_roadmap": [
    {
      "phase": "string - e.g., 'Foundation', 'Skill Building', 'Industry Entry', 'Growth & Leadership'",
      "timeframe": "string - e.g., '3-6 months', '6-12 months'",
      "goals": [
        "string - SMART goal (specific, measurable, achievable, relevant, time-bound, directly tied to the target role)"
      ],
      "actions": [
        "string - actionable next step the user can realistically begin now, practical and detailed"
      ],
      "resources": [
        {
          "type": "string - e.g., 'Course', 'Book', 'Mentor', 'Event', 'Community'",
          "name": "string - real, reputable resource (no placeholders, no vague text like 'online course')",
          "url": "string - direct working link to the resource"
        }
      ]
    }
  ],
  "skill_development": [
    {
      "skill": "string - critical skill for the target role (hard or soft)",
      "importance": "string - why mastering this skill is essential for career progression and how it connects to the user's goals",
      "learning_resources": [
        {
          "name": "string - specific resource (e.g., 'Deep Learning Specialization by Andrew Ng')",
          "platform": "string - e.g., Coursera, LinkedIn Learning, Udemy, O’Reilly",
          "url": "string - direct working link"
        }
      ]
    }
  ],
  "networking_strategy": [
    {
      "tip": "string - clear, actionable networking advice directly relevant to the user's field (no vague phrases like 'just connect with people')",
      "platform_or_event": "string - specific platform, group, or event (e.g., LinkedIn AI group, AWS re:Invent, PyCon)"
    }
  ],
  "milestone_checkpoints": [
    {
      "milestone": "string - measurable indicator of success (e.g., 'Published 3 technical articles on LinkedIn that gained >500 views each')",
      "expected_timeframe": "string - realistic timeframe aligned with career roadmap phases"
    }
  ]
}
`;

export const CareerGuidancePrompt = ({
  name,
  currentRole,
  targetRole,
  experienceLevel,
  skills,
  interests,
  challenges,
}) => `
You are an **elite career strategist** who designs **personalized, precise, and inspiring career roadmaps**. 
The roadmap must be **structured, data-rich, and practical** — no vague advice.

🎯 **Objective**
Using the user profile, produce a career roadmap that:
1. Breaks the journey into **phases with realistic timelines**.
2. Defines **SMART goals** (specific, measurable, achievable, relevant, time-bound).
3. Suggests **critical skills** to acquire, with a clear explanation of their importance.
4. Recommends **only verified, globally recognized resources** (Coursera, edX, LinkedIn Learning, reputable books, notable conferences, or active communities). ❌ No placeholders, ❌ No broken links.
5. Provides **networking strategies** tailored to the user’s industry (specific communities, events, meetups).
6. Ends with **milestone checkpoints** that act as measurable success markers.

🧾 **User Profile**
- Name: ${name || "Not provided"}
- Current Role: ${currentRole || "Not provided"}
- Target Role: ${targetRole || "Not provided"}
- Experience Level: ${experienceLevel || "Not provided"}
- Skills: ${skills || "Not provided"}
- Interests: ${interests || "Not provided"}
- Challenges: ${challenges || "Not provided"}

⚠ **Strict Output Rules**
- Output must be **valid JSON** only, strictly following the schema below.
- Do not include explanations, commentary, or text outside the JSON.
- Every resource must be **specific, real, and accessible**.
- Introduction must feel **personal and motivating**, referencing the user’s profile directly.
- Goals, actions, and milestones must be **measurable and time-bound**.
- Avoid vague, generic advice.

📄 **Schema**
${AIResponseFormat}
`;
