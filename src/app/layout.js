import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NextAuthProvider } from "./Providers";
import { ResumeProvider } from "@/context/ResumeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://careercabin.pankri.com"),
  title: "PK CareerCabin | AI Resume Builder, Analyzer & Career Tools",
  description:
    "PK CareerCabin provides free AI-powered tools to build resumes, analyze CVs, prepare for interviews, and create cover letters. Optimize your career with intelligent features.",
  keywords: [
    "Resume Analyzer",
    "AI Resume Builder",
    "Interview Preparation",
    "Cover Letter Generator",
    "Industry Insights",
    "Career Guidance",
    "CareerCabin",
    "PK CareerCabin",
    "Job Resume Tool",
    "Free CV Creator",
    "AI Job Tools",
    "Professional Resume Maker",
    "ATS Resume Generator",
  ],
  authors: [{ name: "Pankri", url: "https://pankri.com" }],

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: "index, follow",
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: "PK CareerCabin | AI Resume Builder & Career Toolkit",
    description:
      "Build your resume, analyze your CV, and prepare for interviews — all in one place. Free, fast, and AI-powered.",
    url: "https://careercabin.pankri.com",
    siteName: "PK CareerCabin",
    images: [
      {
        url: "/careercabin.png",
        width: 1200,
        height: 630,
        alt: "AI Resume Builder - PK CareerCabin",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PK CareerCabin | AI Resume & Career Tools",
    description:
      "Create resumes, analyze CVs, and boost your career with PK CareerCabin’s free AI toolkit.",
    images: ["/careercabin.png"],
  },
};

const globalJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PK CareerCabin",
    url: "https://careercabin.pankri.com",
    logo: {
      "@type": "ImageObject",
      url: "/careercabin.png",
      width: 600,
      height: 60,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PK CareerCabin",
    url: "https://careercabin.pankri.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://careercabin.pankri.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://careercabin.pankri.com" />
        {/* <meta
          name="google-site-verification"
          content="YOUR_VERIFICATION_CODE"
        /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      ><ResumeProvider>
        <NextAuthProvider>
          <Header />
          {children}
          <Footer />
        </NextAuthProvider></ResumeProvider>
      </body>
    </html>
  );
}
