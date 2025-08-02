export const metadata = {
  title: "PK CareerCabin | AI Cover Letter Generator",
  description:
    "Generate personalized and professional cover letters instantly with PK CareerCabin's AI-powered tool. Impress employers and land interviews faster.",
  keywords: [
    "AI Cover Letter Generator",
    "Cover Letter Builder",
    "Professional Cover Letter",
    "Free Cover Letter Tool",
    "PK CareerCabin",
    "Job Application Letter",
    "Generate Cover Letter",
    "Cover Letter AI",
    "Resume and Cover Letter",
    "Custom Cover Letter",
  ],
  authors: [{ name: "Pankri", url: "https://pankri.com" }],
  openGraph: {
    title: "PK CareerCabin | Create a Cover Letter with AI",
    description:
      "Craft compelling cover letters tailored to your resume and job role using PK CareerCabin’s AI generator.",
    url: "https://careercabin.pankri.com/cover-letter-generator",
    siteName: "PK CareerCabin",
    images: [
      {
        url: "/careercabin.png",
        width: 1200,
        height: 630,
        alt: "AI Cover Letter Generator by PK CareerCabin",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PK CareerCabin | AI Cover Letter Generator",
    description:
      "Generate professional, tailored cover letters instantly using PK CareerCabin’s intelligent AI tool.",
    images: ["/careercabin.png"],
  },
  metadataBase: new URL("https://careercabin.pankri.com"),
};

import React from "react";

const CoverLetterGenerator = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PK CareerCabin Cover Letter Generator",
    description:
      "A free AI-powered tool by PK CareerCabin to generate personalized cover letters tailored to resumes and job descriptions.",
    applicationCategory: "AI Writing Assistant",
    operatingSystem: "All",
    url: "https://careercabin.pankri.com/cover-letter-generator",
    featureList: [
      "Custom cover letters based on job descriptions",
      "Professional formatting and tone",
      "Instant generation and preview",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: {
      "@type": "Organization",
      name: "PK CareerCabin",
      url: "https://pankri.com",
      sameAs:"https://careercabin.pankri.com",
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
          Create a <span className="text-green-700">Tailored AI Cover Letter</span>
          <br />
          <span className="text-green-600">in Minutes, 100% Free</span>
        </h1>
        <p className="text-lg mb-6 text-green-800">
          Write persuasive cover letters quickly with <strong>PK CareerCabin</strong>.
          Our AI suggests the best content based on your resume and job description —
          fully customizable, no signup needed.
        </p>
        <a
          href="/cover-letter-generator/create"
          className="inline-block bg-green-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-green-700 transition-all duration-200 hover:scale-105"
        >
          ✍️ Generate Your Cover Letter
        </a>
      </div>

      {/* Hero Image */}
      <div className="flex justify-center">
        <img
          src="/cover-letter-builder.png"
          alt="AI Cover Letter Generator"
          className="w-full max-w-md rounded-2xl shadow-2xl shadow-green-500 border border-green-200"
        />
      </div>
    </div>

    {/* Features */}
    <div className="mt-24 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-green-800 mb-6">
  Why Choose <span className="text-green-900">PK CareerCabin</span> Cover Letter Generator?
</h2>
<p className="text-green-700 text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 leading-relaxed">
  Create professional, personalized cover letters in seconds. Our AI-powered tool crafts compelling content based on your resume and job description — helping you stand out with zero hassle and at zero cost.
</p>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "🤖 AI-Generated Content",
            text: "Automatically create personalized and powerful cover letters tailored to any job.",
          },
          {
            title: "📄 Job-Specific Tailoring",
            text: "Highlight your strengths for each specific job with targeted suggestions.",
          },
          {
            title: "⚡ Instant & Unlimited",
            text: "No waiting, no limits. Create and download cover letters as many times as you want.",
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
      <p className="text-green-800 mb-8 max-w-2xl mx-auto">
        It only takes three simple steps to craft a standout cover letter using our AI-powered tool.
      </p>
      <div className="grid md:grid-cols-3 gap-8 text-left">
        {[
          {
            title: "1. Add Resume & Job Info",
            desc: "Paste your resume and job description to guide the AI’s suggestions.",
          },
          {
            title: "2. Customize the Output",
            desc: "Refine the tone and tweak the content to match your voice and experience.",
          },
          {
            title: "3. Download or Share",
            desc: "Export your cover letter as PDF or copy the content — ready to apply instantly.",
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
        Loved by Job Seekers Worldwide
      </h2>
      <p className="text-green-800 mb-8">
        Our cover letter generator is trusted by thousands to simplify and accelerate their job application process.
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          {
            quote:
              "I used to dread writing cover letters. With CareerCabin, I had a strong one ready in 5 minutes — and I got an interview!",
            name: "Ayesha K., Marketing Specialist",
          },
          {
            quote:
              "The suggestions were incredibly accurate. It helped me focus on what matters and saved me tons of time.",
            name: "Rizwan L., Data Analyst",
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
        Ready to Write a Powerful Cover Letter?
      </h2>
      <p className="text-lg text-green-800 mb-8">
        Start now with PK CareerCabin’s AI-powered generator — it’s fast, effective, and completely free.
      </p>
      <a
        href="/cover-letter-generator/create"
        className="inline-block bg-green-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-green-800 hover:scale-105 transition-all"
      >
        ✍️ Start Writing Your Cover Letter
      </a>
    </div>
  </section>
</>

  );
};

export default CoverLetterGenerator;
