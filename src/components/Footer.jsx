import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-50 border-green-500 border-t-2 rounded-2xl text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-3">About</h3>
          <p className="text-sm leading-relaxed text-gray-600">
            PK CareerCabin offers AI-powered resume tools, job insights, and interview prep to help you grow your career with confidence.
          </p>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-3">Tools</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resume-builder" className="hover:text-green-600 transition">AI Resume Builder</Link></li>
            <li><Link href="/resume-analyzer" className="hover:text-green-600 transition">Resume Analyzer</Link></li>
            <li><Link href="/career-guidance" className="hover:text-green-600 transition">Career Guidance</Link></li>
            <li><Link href="/interview-preparation" className="hover:text-green-600 transition">Interview Preparation</Link></li>
            <li><Link href="/cover-letter-generator" className="hover:text-green-600 transition">Cover Letter Generator</Link></li>
            <li><Link href="/industry-insights" className="hover:text-green-600 transition">Industry Insights</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-green-600 transition">About Us</Link></li>
            <li><Link href="/faq" className="hover:text-green-600 transition">FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-green-600 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-3">Connect</h3>
          <div className="flex items-center space-x-4">
            <Link href="mailto:support@pkcareercabin.com" className="text-gray-600 hover:text-green-700 transition">
              <Mail size={20} />
            </Link>
            <Link href="https://facebook.com" target="_blank" className="text-gray-600 hover:text-green-700 transition">
              <Facebook size={20} />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="text-gray-600 hover:text-green-700 transition">
              <Twitter size={20} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-gray-600 hover:text-green-700 transition">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 py-4 border-t border-green-200">
        &copy; {new Date().getFullYear()} <span className="font-medium text-green-700">PK CareerCabin</span>. All rights reserved.
      </div>
    </footer>
  );
}
