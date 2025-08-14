export const metadata = {
  title: "PK CareerCabin | AI Resume Analyzer Tool",
  description:
    "Optimize your resume instantly with PK CareerCabin’s AI-powered Resume Analyzer. Get real-time feedback on structure, keywords, and ATS compatibility.",
  keywords: [
    "AI Resume Analyzer",
    "Resume Review Tool",
    "ATS Checker",
    "CV Analyzer",
    "PK CareerCabin",
    "Resume Score",
    "Free Resume Analyzer",
    "Improve Resume",
    "Job Application Optimization",
    "Resume Keyword Checker",
  ],
  authors: [{ name: "Pankri", url: "https://pankri.com" }],
  openGraph: {
    title: "PK CareerCabin | AI Resume Analyzer",
    description:
      "Boost your job chances with instant resume feedback from PK CareerCabin's AI-powered Resume Analyzer. Check ATS readiness, keyword usage, and layout quality.",
    url: "https://careercabin.pankri.com/resume-analyzer",
    siteName: "PK CareerCabin",
    images: [
      {
        url: "/careercabin.png",
        width: 1200,
        height: 630,
        alt: "AI Resume Analyzer by PK CareerCabin",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PK CareerCabin | Resume Analyzer Tool",
    description:
      "Use PK CareerCabin’s AI Resume Analyzer to check formatting, keywords, and ATS-friendliness instantly.",
    images: ["/careercabin.png"],
  },
  metadataBase: new URL("https://careercabin.pankri.com"),
};

import React from "react";

const ResumeAnalyzer = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PK CareerCabin Resume Analyzer",
    description:
      "PK CareerCabin's Resume Analyzer is a free AI-powered tool that provides instant feedback on your resume. Analyze formatting, keyword usage, and ATS compatibility to improve your chances of landing your dream job.",
    url: "https://careercabin.pankri.com/resume-analyzer",
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: {
      "@type": "Organization",
      name: "PK CareerCabin",
      url: "https://pankri.com",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "142",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 leading-tight">
              Resume Analyzer Powered by{" "}
              <span className="text-green-600">PK CareerCabin</span>
            </h1>
            <p className="text-lg text-green-900">
              Instantly evaluate your resume for{" "}
              <span className="font-medium">ATS compatibility</span>,
              <span className="font-medium"> keyword relevance</span>, and{" "}
              <span className="font-medium">professional formatting</span>. Get
              AI-driven feedback in real-time.
            </p>
            <a
              href="/resume-analyzer/upload"
              className="inline-block bg-green-600 text-white text-lg font-medium px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition hover:scale-105"
            >
              🚀 Start Analyzing Now
            </a>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/resume-analyzer.png"
              alt="Resume Analyzer Tool"
              className="w-full max-w-md rounded-3xl shadow-xl border border-green-200"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6 text-center">
            Why Choose <span className="text-green-900">PK CareerCabin</span>{" "}
            Resume Analyzer?
          </h2>
          <p className="text-green-700 text-lg md:text-xl max-w-3xl mx-auto text-center mb-12 leading-relaxed">
            At PK CareerCabin, we’re dedicated to your career success. Our
            advanced AI-powered resume analyzer evaluates your resume against
            the most demanding hiring standards. Whether you're a recent
            graduate or a seasoned professional, we help you showcase your
            strengths and stand out.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "🎯 Keyword Optimization",
                desc: "Analyze and enhance keyword relevance to target job listings effectively.",
              },
              {
                title: "⚙️ ATS Compatibility",
                desc: "Ensure your resume passes automated systems used by employers.",
              },
              {
                title: "🧠 Real-Time Feedback",
                desc: "Instant suggestions to improve content, layout, and formatting.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-green-50 p-6 rounded-2xl border border-green-200 shadow hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {feature.title}
                </h3>
                <p className="text-green-800 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            How It Works
          </h2>
          <p className="text-green-700 max-w-2xl mx-auto text-lg mb-10">
            Our resume analyzer simplifies the optimization process. Upload your
            resume, receive real-time AI feedback, and implement the suggestions
            to make your resume ATS-friendly and recruiter-ready — all in just a
            few minutes.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10 text-left">
            {[
              {
                step: "1. Upload Resume",
                desc: "Choose your file and upload it securely. No sign-up required.",
              },
              {
                step: "2. Get AI Insights",
                desc: "Our system analyzes formatting, keyword density, and ATS readiness.",
              },
              {
                step: "3. Improve & Apply",
                desc: "Receive clear suggestions to strengthen your resume before applying.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-green-50 border border-green-200"
              >
                <h3 className="text-lg font-semibold text-green-700 mb-2">
                  {item.step}
                </h3>
                <p className="text-green-800">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-green-50 py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Loved by Job Seekers Worldwide
          </h2>
          <p className="text-green-700 max-w-2xl mx-auto mb-10 text-lg">
            Join thousands of satisfied users who have elevated their job search
            using PK CareerCabin. From entry-level applicants to senior
            professionals, our platform has helped users secure interviews and
            build confidence with better resumes.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ayesha K.",
                review:
                  "This tool gave me actionable tips and helped me pass the ATS screening. I got 3 interview calls in a week!",
              },
              {
                name: "Usman R.",
                review:
                  "Super helpful! The keyword suggestions matched exactly what the job description needed.",
              },
              {
                name: "Fatima S.",
                review:
                  "I love how easy and fast it is. The feedback felt like a career coach in my pocket!",
              },
            ].map((user, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-green-200 shadow hover:shadow-md transition text-left"
              >
                <p className="text-green-700 text-sm italic">“{user.review}”</p>
                <div className="mt-4 text-sm font-semibold text-green-700">
                  {user.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-green-700 py-16 px-6 md:px-12 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold">Ready to Optimize Your Resume?</h2>
          <p className="text-lg">
            Increase your chances of getting noticed by recruiters and ATS bots.
            Start your resume check now—it's fast and free!
          </p>
          <a
            href="/resume-analyzer/upload"
            className="inline-block mt-4 bg-white text-green-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-green-100 transition"
          >
            📄 Upload Resume
          </a>
        </div>
      </section>
    </>
  );
};

export default ResumeAnalyzer;
