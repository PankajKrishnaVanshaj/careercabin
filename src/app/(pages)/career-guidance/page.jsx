export const metadata = {
  title: "PK CareerCabin | AI Career Guidance Based on Your Interests & Skills",
  description:
    "Discover the right career path with PK CareerCabin's AI-powered career guidance tool. Get personalized suggestions based on your interests, strengths, and goals.",
  keywords: [
    "Career Guidance",
    "AI Career Tool",
    "Career Planning",
    "PK CareerCabin",
    "Career Assessment",
    "Find Right Career",
    "Career Advice",
    "Personalized Career Guidance",
    "Interest Based Career Suggestions",
    "Skill Based Career Path",
  ],
  authors: [{ name: "Pankri", url: "https://pankri.com" }],
  openGraph: {
    title: "PK CareerCabin | Personalized Career Guidance with AI",
    description:
      "Explore career options tailored to your interests and skills using PK CareerCabin’s AI-driven guidance platform.",
    url: "https://careercabin.pankri.com/career-guidance",
    siteName: "PK CareerCabin",
    images: [
      {
        url: "/careercabin.png",
        width: 1200,
        height: 630,
        alt: "AI Career Guidance by PK CareerCabin",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PK CareerCabin | AI Career Guidance",
    description:
      "Get expert AI-driven career advice based on your skills, interests, and personality. Start your journey with PK CareerCabin today.",
    images: ["/careercabin.png"],
  },
  metadataBase: new URL("https://careercabin.pankri.com"),
};

import React from 'react';

const CareerGuidance = () => {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalProgram",
  name: "PK CareerCabin Career Guidance",
  description:
    "AI-powered platform that provides personalized career guidance based on individual skills, interests, and goals.",
  url: "https://careercabin.pankri.com/career-guidance", 
  provider: {
    "@type": "Organization",
    name: "PK CareerCabin",
    sameAs: "https://careercabin.pankri.com",
  },
  educationalProgramMode: "online",
  hasCourse: {
    "@type": "Course",
    name: "Career Exploration & Planning",
  },
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
              Discover Your <span className="text-green-700">Ideal Career</span>
              <br />
              <span className="text-green-600">With AI-Powered Guidance</span>
            </h1>
            <p className="text-lg mb-6 text-green-800">
              Let <strong>PK CareerCabin</strong> help you find the perfect career path
              based on your interests, strengths, and personality. Fast, free, and personalized.
            </p>
            <a
              href="/career-guidance/start"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-green-700 transition-all duration-200 hover:scale-105"
            >
              🚀 Start Career Guidance
            </a>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center">
            <img
              src="/careerguidance.png"
              alt="AI Career Guidance"
              className="w-full max-w-md rounded-2xl shadow-2xl shadow-green-500 border border-green-200"
            />
          </div>
        </div>

        {/* Features */}
        <div className="mt-24 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-green-800 mb-6">
  Why Choose <span className="text-green-900">PK CareerCabin</span> Career Guidance?
</h2>
<p className="text-center text-green-700 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
  Our intelligent AI blends career psychology and smart algorithms to deliver personalized guidance that aligns with your goals, strengths, and aspirations — helping you make confident, informed career decisions.
</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "🔍 Personalized Career Matching",
                text: "Get tailored suggestions based on your interests, personality traits, and aspirations.",
              },
              {
                title: "🧠 AI + Psychology Insights",
                text: "Blend of AI analysis and behavioral science to find the career path that fits you best.",
              },
              {
                title: "📈 Real-World Job Insights",
                text: "Explore trending fields, salaries, and demand for various professions in your country.",
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
          <p className="text-green-800 mb-12">
            Follow these simple steps and discover your future with clarity.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "1. Take the Assessment",
                desc: "Answer a few questions about your interests, values, and strengths.",
              },
              {
                title: "2. Get Matched",
                desc: "Receive AI-driven career recommendations based on your responses.",
              },
              {
                title: "3. Explore & Plan",
                desc: "Learn about the recommended fields, required skills, and future opportunities.",
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
            Loved by Students & Career Seekers
          </h2>
          <p className="text-green-800 mb-12">
            Real stories from users who found their direction through PK CareerCabin.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                quote:
                  "I was lost after graduation. PK CareerCabin helped me discover my passion for digital marketing!",
                name: "Nimra K., Marketing Specialist",
              },
              {
                quote:
                  "I always thought I’d be a coder, but the test suggested UX design — and now I love it!",
                name: "Bilal H., UX Designer",
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
            Start Your Career Journey Today
          </h2>
          <p className="text-lg text-green-800 mb-8">
            Discover careers that align with your true self — guided by AI and backed by psychology.
          </p>
          <a
            href="/career-guidance/start"
            className="inline-block bg-green-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-green-800 hover:scale-105 transition-all"
          >
            🚀 Begin Assessment
          </a>
        </div>
      </section>
    </>
  );
};

export default CareerGuidance;