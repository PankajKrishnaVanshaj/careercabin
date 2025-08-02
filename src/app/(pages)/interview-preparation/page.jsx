export const metadata = {
  title: "PK CareerCabin | AI Interview Preparation Tool",
  description:
    "Prepare for job interviews with PK CareerCabin's AI-powered tools. Get mock questions, personalized tips, and expert advice to boost your confidence and land the job.",
  keywords: [
    "Interview Preparation",
    "AI Interview Tool",
    "Mock Interview Questions",
    "Job Interview Tips",
    "PK CareerCabin",
    "Interview Coaching",
    "HR Interview Practice",
    "Technical Interview Guide",
    "Job Readiness",
    "CareerCabin Interview",
  ],
  authors: [{ name: "Pankri", url: "https://pankri.com" }],
  openGraph: {
    title: "PK CareerCabin | Interview Preparation with AI",
    description:
      "Ace your job interviews with confidence using PK CareerCabin’s AI-based interview preparation tools. Practice common questions and get expert guidance.",
    url: "https://careercabin.pankri.com/interview-preparation",
    siteName: "PK CareerCabin",
    images: [
      {
        url: "/careercabin.png",
        width: 1200,
        height: 630,
        alt: "PK CareerCabin Interview Prep",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PK CareerCabin | AI Interview Preparation Tool",
    description:
      "Use AI to prepare for interviews. Get mock questions, answer feedback, and tips from PK CareerCabin.",
    images: ["/careercabin.png"],
  },
  metadataBase: new URL("https://careercabin.pankri.com"),
};

import React from "react";

const InterviewPreparation = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: "AI Interview Preparation - PK CareerCabin",
    provider: {
      "@type": "Organization",
      name: "PK CareerCabin",
      url: "https://careercabin.pankri.com",
    },
    educationalProgramMode: "Online",
    hasCourse: [
      {
        "@type": "Course",
        name: "Mock Interview Practice",
      },
      {
        "@type": "Course",
        name: "Technical & HR Interview Questions",
      },
    ],
    audience: {
      "@type": "Audience",
      audienceType: ["Job Seekers", "Students", "Career Switchers"],
    },
    url: "https://careercabin.pankri.com/interview-preparation",
    description:
      "AI-driven interview preparation platform offering mock questions, smart feedback, and expert advice to help job seekers succeed.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="min-h-screen bg-green-50 text-green-900 px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* Hero Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
              Ace Your Interviews with{" "}
              <span className="text-green-700">AI-Powered Practice</span>
              <br />
              <span className="text-green-600">Smart. Personalized. Free.</span>
            </h1>
            <p className="text-lg mb-6 text-green-800">
              Prepare confidently with <strong>PK CareerCabin</strong>. Get
              real-time mock questions, instant AI feedback, and expert-curated
              guidance — all at no cost.
            </p>
            <a
              href="/interview-preparation/start"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-green-700 transition-all duration-200 hover:scale-105"
            >
              🎯 Start Practicing Now
            </a>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center">
            <img
              src="/interview-prep.png"
              alt="AI Interview Preparation"
              className="w-full max-w-md rounded-2xl shadow-2xl shadow-green-500 border border-green-200"
            />
          </div>
        </div>

        {/* Features */}
        <div className="mt-24 max-w-6xl mx-auto">
         <h2 className="text-4xl md:text-5xl font-extrabold text-center text-green-800 mb-6">
  Why Use <span className="text-green-900">PK CareerCabin</span> Interview Preparation?
</h2>
<p className="text-green-700 text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 leading-relaxed">
  Whether you're a fresh graduate, career changer, or experienced professional, 
  our interview preparation tools are designed to adapt to your journey—helping 
  you build confidence and perform at your best in any interview setting.
</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "💬 Realistic Mock Questions",
                text: "Practice with AI-generated questions based on your role and experience level.",
              },
              {
                title: "🧠 Smart AI Feedback",
                text: "Get personalized insights and tips to improve your answers instantly.",
              },
              {
                title: "🎓 Expert Guidance",
                text: "Explore resources curated by professionals across industries.",
              },
            ].map(({ title, text }, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition-all border border-green-100"
              >
                <h3 className="text-xl font-semibold mb-3 text-green-700">
                  {title}
                </h3>
                <p className="text-green-800">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-28 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>
          <p className="text-green-800 mb-8 max-w-3xl mx-auto">
            Getting started is simple — just follow these three steps and be on
            your way to job interview success.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "1. Choose Your Role",
                desc: "Select your job title, industry, and experience level to tailor questions.",
              },
              {
                title: "2. Practice Interviews",
                desc: "Answer mock questions and get instant, AI-powered suggestions to improve.",
              },
              {
                title: "3. Boost Your Confidence",
                desc: "Track progress and enter every interview fully prepared and confident.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-green-100 shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-lg font-semibold text-green-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-green-800">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-28 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Loved by Candidates Everywhere
          </h2>
          <p className="text-green-800 mb-8 max-w-2xl mx-auto">
            Thousands have landed their dream jobs with the help of PK
            CareerCabin’s AI tools. Here's what a few of them say:
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                quote:
                  "The AI feedback helped me refine my answers like a pro. I landed my role at a top tech company!",
                name: "Anika K., Data Analyst",
              },
              {
                quote:
                  "Mock interviews were so accurate and insightful. Highly recommend PK CareerCabin to all job seekers!",
                name: "Rahul D., Marketing Specialist",
              },
            ].map(({ quote, name }, i) => (
              <blockquote
                key={i}
                className="bg-white p-6 rounded-xl shadow-md border border-green-100 text-left"
              >
                <p className="italic text-green-800">“{quote}”</p>
                <p className="mt-4 text-sm font-semibold text-green-700">
                  — {name}
                </p>
              </blockquote>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Nail Your Next Interview?
          </h2>
          <p className="text-lg text-green-800 mb-8">
            Start preparing with PK CareerCabin's smart interview tools — fast,
            personalized, and free.
          </p>
          <a
            href="/interview-preparation/start"
            className="inline-block bg-green-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-green-800 hover:scale-105 transition-all"
          >
            🎯 Launch Interview Prep
          </a>
        </div>
      </section>
    </>
  );
};

export default InterviewPreparation;