import React from "react";
import { Briefcase, FileText, Compass, Mic, Mail, BarChart2 } from "lucide-react";

const cards = [
  {
    id: 1,
    title: "AI Resume Builder",
    desc: "Effortlessly design a modern, ATS-optimized resume that stands out to recruiters.",
    Icon: FileText,
  },
  {
    id: 2,
    title: "Resume Analyzer",
    desc: "Leverage AI insights to refine your resume’s structure, tone, and keyword relevance.",
    Icon: BarChart2,
  },
  {
    id: 3,
    title: "Career Guidance",
    desc: "Discover growth opportunities and career paths tailored to your unique strengths.",
    Icon: Compass,
  },
  {
    id: 4,
    title: "Interview Preparation",
    desc: "Simulate interviews with AI-generated questions, tips, and performance feedback.",
    Icon: Mic,
  },
  {
    id: 5,
    title: "Cover Letter Generator",
    desc: "Craft personalized, persuasive cover letters that complement your resume perfectly.",
    Icon: Mail,
  },
  {
    id: 6,
    title: "Industry Insights",
    desc: "Access up-to-date trends, salary benchmarks, and emerging skill demands.",
    Icon: Briefcase,
  },
];

export default function Dashboard() {
  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-green-400  to-green-900 bg-clip-text text-transparent">Dashboard</h1>
        <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
          Explore powerful AI-driven tools to supercharge your career growth and job search success.
        </p>
      </header>

      <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ id, title, desc, Icon }) => (
          <article
            key={id}
            className="group bg-white p-6 rounded-2xl shadow-green-500 shadow-sm hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-green-400 hover:bg-green-50/30"
          >
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-green-100 to-green-100 text-green-700 group-hover:from-green-200 group-hover:to-green-200">
                <Icon className="w-7 h-7" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-green-600 transition-colors duration-200">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>

                <div className="mt-5 flex items-center justify-between">
                  <button
                    className="px-4 py-1.5 text-sm rounded-full font-medium border border-slate-300 bg-white hover:bg-green-50 hover:text-green-700 transition-colors duration-200 shadow-sm"
                    aria-label={`Open ${title}`}
                  >
                    Open
                  </button>

                  <span className="text-xs font-semibold text-green-600 bg-green-100 px-2.5 py-1 rounded-full shadow-sm">New</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}