export const AIResponseFormat = `
interface Feedback {
  overallScore: number; // Weighted score from all categories (0-100)

  ATS: {
    score: number; // 0-100, ATS keyword and format suitability
    tips: {
      type: "good" | "improve";
      tip: string; // short and clear
      explanation: string; // detailed explanation
    }[]; // 3-4 items
  };

  toneAndStyle: {
    score: number; // 0-100, professionalism, clarity, readability
    tips: {
      type: "good" | "improve";
      tip: string; // short title
      explanation: string; // detailed explanation
    }[]; // 3-4 items
  };

  content: {
    score: number; // 0-100, relevance, impact, completeness
    tips: {
      type: "good" | "improve";
      tip: string;
      explanation: string;
    }[]; // 3-4 items
  };

  structure: {
    score: number; // 0-100, layout, section ordering, spacing, headings
    tips: {
      type: "good" | "improve";
      tip: string;
      explanation: string;
    }[]; // 3-4 items
  };

  skills: {
    score: number; // 0-100, skill alignment with target role
    tips: {
      type: "good" | "improve";
      tip: string;
      explanation: string;
    }[]; // 3-4 items
  };
}
`;

export const ResumeAnalyzerPrompt = ({
  resume,
  jobRole,
  experience,
  skills,
  jobDescription,
}) => `
You are an **expert in ATS optimization, resume writing, and recruitment analysis**.

**Input Resume (text content):**
${resume}

**Candidate Information:**
- Target Job Role: ${jobRole || "Not provided"}
- Years of Experience: ${experience || "Not provided"}
- Key Skills: ${skills || "Not provided"}
- Job Description: ${jobDescription || "Not provided"}

---

### **Your Task**
Analyze the resume according to **real-world recruiter and ATS standards**:

1. **ATS Evaluation (Score & Tips)**
   - Check for role-specific keywords from Job Description and Skills.
   - Verify correct section headings (e.g., "Work Experience", "Education").
   - Penalize for images, graphics, tables, or formatting that ATS might fail to parse.
   - Assess formatting for clean text extraction.

2. **Tone & Style**
   - Evaluate professionalism, confidence, and conciseness.
   - Identify weak language, passive voice, or lack of action verbs.

3. **Content**
   - Check relevance and completeness.
   - Look for quantified achievements (numbers, metrics).
   - Penalize vague or generic statements.

4. **Structure**
   - Assess logical flow, clarity, and consistency.
   - Penalize clutter, inconsistent formatting, or excessive whitespace.

5. **Skills Alignment**
   - Ensure listed skills match the target job role and description.
   - Highlight missing critical skills.

---

### **Scoring Rules**
- Categories (0–100 score each):
  - ATS: 30%
  - Content: 25%
  - Skills: 20%
  - Tone & Style: 15%
  - Structure: 10%
- **overallScore** = weighted average of these categories.

---

⚠️ **Important Output Rules**
- Output must be **valid JSON** strictly matching this schema:
${AIResponseFormat}
- No extra text, markdown, or explanations.
- Do not invent details not found in the resume or provided information.
`;
