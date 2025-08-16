const AIResponseFormat = `
[Full Name]
[Address]
[City, State, ZIP]
[Email Address]
[Phone Number]
[Date]

[Hiring Manager's Name]
[Company Name]
[Company Address]
[City, State, ZIP]

Dear [Hiring Manager's Name],

[Opening Paragraph: Begin with a compelling hook that shows genuine enthusiasm for the role and the company. Briefly connect your career journey to the job, making it clear why this opportunity excites you.]

[Body Paragraph 1: Highlight 2–3 of your strongest and most relevant achievements. Use specific numbers, metrics, or outcomes to prove impact. Align these directly with the requirements of the target job.]

[Body Paragraph 2: Demonstrate how your skills, personality, and work ethic align with the company’s mission, culture, or current initiatives. Reference company projects, values, or industry contributions to show research.]

[Closing Paragraph: Reaffirm your excitement for the role, summarize your key value proposition in one sentence, and confidently invite the hiring manager to discuss your candidacy further.]

Sincerely,
[Full Name]
`;

export const CoverLetterGeneratorPrompt = ({
  fullName,
  address,
  cityStateZip,
  email,
  phone,
  date,
  hiringManager,
  companyName,
  companyAddress,
  companyCityStateZip,
  jobTitle,
  experience,
  skills,
  achievements,
  motivation,
  valuesAlignment,
}) => `
You are an award-winning career consultant and expert in persuasive, high-impact cover letter writing.

Your task: Write a **personalized, professional, and achievement-focused cover letter** for the following candidate details:

Full Name: ${fullName || "Not Provided"}
Address: ${address || "Not Provided"}
City, State, ZIP: ${cityStateZip || "Not Provided"}
Email Address: ${email || "Not Provided"}
Phone Number: ${phone || "Not Provided"}
Date: ${date || "Not Provided"}

Hiring Manager: ${hiringManager || "Not Provided"}
Company Name: ${companyName || "Not Provided"}
Company Address: ${companyAddress || "Not Provided"}
Company City, State, ZIP: ${companyCityStateZip || "Not Provided"}

Target Job Title: ${jobTitle || "Not Provided"}
Relevant Experience: ${experience || "Not Provided"}
Key Skills: ${skills || "Not Provided"}
Key Achievements: ${achievements || "Not Provided"}
Motivation for Applying: ${motivation || "Not Provided"}
Alignment with Company Values/Projects: ${valuesAlignment || "Not Provided"}

Strict Output Instructions:
- Output must follow **exactly** this structure:
${AIResponseFormat}
- Replace every placeholder in [brackets] with actual, contextually relevant content.
- Word count: **250–350 words**.
- Language style: confident, concise, persuasive, and human-like.
- Every sentence should be tailored to the candidate and **specific to the target company**.
- Avoid clichés such as “I am a hard worker” or “I think I’m a good fit.”
- Include measurable results (%, $, time saved, growth numbers) where possible.
- Use smooth paragraph transitions so the letter reads naturally.
- Ensure the tone balances professionalism with genuine enthusiasm.
`;
