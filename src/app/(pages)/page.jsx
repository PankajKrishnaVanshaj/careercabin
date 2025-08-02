"use client";

import Link from "next/link";
import {
  FileText,
  SearchCheck,
  Briefcase,
  Mic,
  Mail,
  Star,
  User,
  Building2,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-100 to-green-50 py-20 px-6 border-b border-green-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 leading-tight">
              Empower Your Career with{" "}
              <span className="text-green-800 decoration-green-400">
                PK CareerCabin
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              PK CareerCabin is your all-in-one AI career platform — build
              powerful resumes, analyze and improve them, get career guidance,
              generate cover letters, and practice interviews.
            </p>
            <p className="mt-2 text-sm text-gray-500 italic">
            Resume Builder · Resume Analyzer · Career Guidance · Interview
              Prep · Cover Letter Generator
            </p>
            <div className="mt-8">
              <Link
                href="/dashboard"
                className="inline-block bg-green-600 text-white px-6 py-3 text-base font-semibold rounded-full shadow hover:bg-green-700 transition duration-300"
              >
                Get Started for Free
              </Link>
            </div>
          </div>
          <div className="hidden md:block w-full md:w-1/2">
            <Image
              src="/careercabin.png"
              alt="PK CareerCabin Illustration"
              width={500}
              height={400}
              className="w-full h-auto rounded-xl shadow-md border border-green-200"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-green-100">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">
            Why Choose PK CareerCabin?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore smart features designed to boost your career journey.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="bg-white rounded-xl border border-green-200 p-6 shadow-sm hover:shadow-md hover:border-green-400 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-700 mb-5 border border-green-300">
                {tool.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {tool.title}
              </h3>
              <p className="text-sm text-gray-600">{tool.description}</p>
              <Link
                href={tool.link}
                className="inline-block mt-4 text-green-600 hover:text-green-800 text-sm font-medium underline"
              >
                Explore →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-green-50 py-20 px-6 border-t border-b border-green-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            What Users Say
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-3 mb-12">
            Professionals across industries trust PK CareerCabin to support
            their job search.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-white p-6 rounded-xl border border-green-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center border border-green-300">
                    <User size={20} />
                  </div>
                  <div className="ml-3 text-left">
                    <p className="font-semibold text-gray-800">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.title}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  "{review.comment}"
                </p>
                <div className="flex mt-3 text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-t border-green-100">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <div key={i} className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {faq.question}
              </h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

const tools = [
  {
    title: "AI Resume Builder",
    description:
      "Craft ATS-ready resumes that get noticed by recruiters using smart templates.",
    icon: <FileText size={24} />,
    link: "/resume-builder",
  },
  {
    title: "Resume Analyzer",
    description:
      "Instantly scan your resume and receive actionable AI-powered feedback.",
    icon: <SearchCheck size={24} />,
    link: "/resume-analyzer",
  },
  {
    title: "Career Guidance",
    description:
      "Get suggestions based on your interests, skills, and job trends.",
    icon: <Briefcase size={24} />,
    link: "/career-guidance",
  },
  {
    title: "Interview Preparation",
    description:
      "Practice real-world interview questions tailored to your field.",
    icon: <Mic size={24} />,
    link: "/interview-preparation",
  },
  {
    title: "Cover Letter Generator",
    description:
      "Write cover letters with tone, intent, and clarity in just one click.",
    icon: <Mail size={24} />,
    link: "/cover-letter-generator",
  },
  {
    title: "Industry Insights",
    description:
      "Explore top industry trends, skills in demand, and hiring insights to stay ahead.",
    icon: <Building2 size={24} />,
    link: "/industry-insights",
  },
];

const reviews = [
  {
    name: "Sarah T.",
    title: "Marketing Graduate",
    comment:
      "The resume builder helped me land interviews at top companies. The AI suggestions were spot on!",
    rating: 5,
  },
  {
    name: "Ali Khan",
    title: "Frontend Developer",
    comment:
      "The resume analyzer showed me what I was missing. I got a callback the next week!",
    rating: 5,
  },
  {
    name: "Fatima R.",
    title: "HR Consultant",
    comment:
      "I use CareerCabin for all my coaching clients. The tools are accurate, fast, and easy to use.",
    rating: 4,
  },
];

const faqs = [
  {
    question: "Is PK CareerCabin free?",
    answer:
      "Yes, we offer a generous free plan for job seekers. Advanced features are available with our Pro plan.",
  },
  {
    question: "Do I need any design skills to use the tools?",
    answer:
      "Not at all. PK CareerCabin is beginner-friendly, with AI handling the formatting and suggestions for you.",
  },
  {
    question: "What makes PK CareerCabin different from other resume builders?",
    answer:
      "We combine resume building, AI feedback, interview prep, and career insights — all in one seamless platform.",
  },
  {
    question: "How do I get started with PK CareerCabin?",
    answer:
      "Just click the “Get Started” button on the dashboard, and follow the simple steps to create your first resume.",
  },
];
