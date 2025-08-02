export const metadata = {
  title: "PK CareerCabin | Industry Insights & Career Trends",
  description:
    "Stay ahead in your career with PK CareerCabin’s expert Industry Insights. Discover job market trends, in-demand skills, and emerging career opportunities.",
  keywords: [
    "Industry Insights",
    "Career Trends",
    "Job Market Analysis",
    "PK CareerCabin",
    "Employment Trends",
    "Future of Work",
    "In-Demand Skills",
    "Career Growth",
    "Workforce Development",
    "Career Planning",
  ],
  authors: [{ name: "Pankri", url: "https://pankri.com" }],
  openGraph: {
    title: "PK CareerCabin | Explore Industry Insights & Career Trends",
    description:
      "Gain strategic career insights, stay ahead of market demands, and understand what’s shaping the future of work — all with PK CareerCabin.",
    url: "https://careercabin.pankri.com/industry-insights",
    siteName: "PK CareerCabin",
    images: [
      {
        url: "/careercabin.png",
        width: 1200,
        height: 630,
        alt: "Industry Insights & Job Trends - PK CareerCabin",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PK CareerCabin | Industry Insights & Career Trends",
    description:
      "Explore expert-backed career and industry insights. Discover the latest job market trends and future-proof your skills with PK CareerCabin.",
    images: ["/careercabin.png"],
  },
  metadataBase: new URL("https://careercabin.pankri.com"),
};

import React from "react";

const IndustryInsights = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Industry Insights & Career Trends | PK CareerCabin",
    description:
      "Explore job market trends, in-demand skills, and emerging opportunities with PK CareerCabin's expert industry insights and guidance.",
    url: "https://careercabin.pankri.com/industry-insights",
    publisher: {
      "@type": "Organization",
      name: "PK CareerCabin",
      url: "https://pankri.com",
      logo: {
        "@type": "ImageObject",
        url: "/careercabin.png",
      },
    },
    mainEntity: {
      "@type": "CreativeWork",
      headline: "Explore Industry Insights",
      about: ["Career Trends", "Job Market", "Future Skills"],
      audience: {
        "@type": "Audience",
        audienceType: "Job Seekers & Career Professionals",
      },
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
              Explore{" "}
              <span className="text-green-700">Industry Insights</span>
              <br />
              <span className="text-green-600">
                and Career Trends that Matter
              </span>
            </h1>
            <p className="text-lg mb-6 text-green-800">
              Discover future-ready skills, job market movements, and expert
              guidance tailored for career success — all with{" "}
              <strong>PK CareerCabin</strong>.
            </p>
            <a
              href="/blog"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-green-700 transition-all duration-200 hover:scale-105"
            >
              📘 Read Insights Now
            </a>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center">
            <img
              src="/careercabin.png"
              alt="Industry Insights"
              className="w-full max-w-md rounded-2xl shadow-2xl shadow-green-500 border border-green-200"
            />
          </div>
        </div>

        {/* Why Choose */}
        <div className="mt-24 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-green-800 mb-6">
  Why Choose <span className="text-green-900">PK CareerCabin</span> Industry Insights?
</h2>
<p className="text-green-700 text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 leading-relaxed">
  Stay ahead of the curve with expert-driven, actionable insights from PK CareerCabin. 
  Whether you're exploring new industries, planning your next move, or actively job hunting — 
  our curated content empowers smarter career decisions.
</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "📈 Latest Career Trends",
                text: "Stay informed with real-time updates on the fastest-growing roles and skill demands.",
              },
              {
                title: "🎯 Expert-Backed Insights",
                text: "Content curated and reviewed by industry experts and recruiters across fields.",
              },
              {
                title: "🔍 Strategic Job Market Tips",
                text: "Find hidden opportunities, avoid common pitfalls, and plan a smarter job hunt.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            How It Works
          </h2>
          <p className="text-green-800 mb-10 max-w-2xl mx-auto">
            Our platform breaks down complex labor market data and expert
            advice into easy-to-understand articles and tools. Here's what you
            can expect:
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "1. Browse Industry Trends",
                desc: "Explore up-to-date reports, articles, and visuals curated by experts.",
              },
              {
                title: "2. Analyze Key Skills",
                desc: "Identify in-demand skills in your field and tailor your career development accordingly.",
              },
              {
                title: "3. Take Informed Action",
                desc: "Use our insights to upgrade your resume, switch industries, or upskill strategically.",
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
            Loved by Career Professionals Everywhere
          </h2>
          <p className="text-green-800 mb-10 max-w-xl mx-auto">
            Don’t just take our word for it. See how job seekers and industry
            professionals use PK CareerCabin to stay ahead of the game.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                quote:
                  "The insights on PK CareerCabin helped me align my resume with current hiring trends. I landed more interviews within a month!",
                name: "Ayesha N., UX Designer",
              },
              {
                quote:
                  "I love how clearly the content is written. The skill breakdowns and job market visuals are super helpful!",
                name: "Umar T., Data Analyst",
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
            Stay Ahead of the Curve
          </h2>
          <p className="text-lg text-green-800 mb-8">
            Begin exploring PK CareerCabin’s expert insights and never miss a
            shift in the job market again.
          </p>
          <a
            href="/blog"
            className="inline-block bg-green-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-green-800 hover:scale-105 transition-all"
          >
            📘 Visit the Blog
          </a>
        </div>
      </section>
    </>
  );
};

export default IndustryInsights;