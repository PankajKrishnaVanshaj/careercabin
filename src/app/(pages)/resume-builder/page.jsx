export const metadata = {
  title: "PK CareerCabin | AI Resume Builder & CV Creator",
  description:
    "Create professional resumes and CVs instantly with PK CareerCabin's AI-powered Resume Builder. ATS-friendly, fully customizable, and 100% free to use.",
  keywords: [
    "AI Resume Builder",
    "Resume Creator",
    "CV Maker",
    "Free Resume Builder",
    "Create Resume Online",
    "PK CareerCabin",
    "Job Resume Tool",
    "AI CV Generator",
    "Professional Resume",
    "Online Resume Maker",
    "ATS Friendly Resume",
  ],
  authors: [{ name: "Pankri", url: "https://pankri.com" }],
  openGraph: {
    title: "PK CareerCabin | Build Your Resume with AI",
    description:
      "Design your standout resume with ease using PK CareerCabin’s free AI-powered builder. Fully ATS-compatible and customizable.",
    url: "https://careercabin.pankri.com/resume-builder",
    siteName: "PK CareerCabin",
    images: [
      {
        url: "/careercabin.png",
        width: 1200,
        height: 630,
        alt: "AI Resume Builder by PK CareerCabin",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PK CareerCabin | AI Resume Builder",
    description:
      "Design your job-winning resume using PK CareerCabin’s AI builder. Free, fast, and fully ATS-friendly.",
    images: ["/careercabin.png"],
  },
  metadataBase: new URL("https://careercabin.pankri.com"),
};

const ResumeBuilder = () => {
  const publisherInfo = {
    "@type": "Organization",
    name: "PK CareerCabin",
    url: "https://pankri.com",
    logo: {
      "@type": "ImageObject",
      url: "/careercabin.png",
    },
  };

  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "PK CareerCabin",
      url: "https://careercabin.pankri.com/resume-builder",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://careercabin.pankri.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
      publisher: publisherInfo,
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "PK CareerCabin Resume Builder",
      description:
        "PK CareerCabin’s AI Resume Builder helps job seekers craft professional, ATS-optimized resumes in minutes. It's free, intuitive, and powered by smart AI technology.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "All",
      url: "https://careercabin.pankri.com/resume-builder",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "289",
      },
      publisher: {
        "@type": "Organization",
        name: "PK CareerCabin",
        url: "https://pankri.com",
      },
    },
  ];

  return (
    <>
      {jsonLdData.map((entry, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}

      <section className="min-h-screen bg-green-50 text-green-900 px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* Hero Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
              Build Your{" "}
              <span className="text-green-700">AI-Powered Resume</span>
              <br />
              <span className="text-green-600">100% Free & ATS-Optimized</span>
            </h1>
            <p className="text-lg mb-6 text-green-800">
              Craft stunning, professional resumes in minutes with{" "}
              <strong>PK CareerCabin</strong>. Use AI suggestions, customizable
              templates, and export your resume — completely free.
            </p>
            <a
              href="/resume-builder/create"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-green-700 transition-all duration-200 hover:scale-105"
            >
              🚀 Get Started Now
            </a>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center">
            <img
              src="/resume-builder.png"
              alt="AI Resume Builder"
              className="w-full max-w-md rounded-2xl shadow-2xl shadow-green-500 border border-green-200"
            />
          </div>
        </div>

        {/* Features */}
        <div className="mt-24 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 text-center mb-6 leading-snug">
            Why Choose <span className="text-green-900">PK CareerCabin</span>{" "}
            Resume Builder?
          </h2>
          <p className="text-lg md:text-xl text-green-800 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Combining smart AI with sleek design, our resume builder is fast,
            effective, and completely free. Whether you're making a career
            switch or applying for your first job, our intelligent tools are
            here to help you shine.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "🤖 AI-Powered Builder",
                text: "Generate resumes with smart AI suggestions tailored to your industry and experience.",
              },
              {
                title: "📄 ATS-Friendly Templates",
                text: "Pass hiring filters with optimized templates recruiters and HR love.",
              },
              {
                title: "📤 Easy Export & Share",
                text: "Download as PDF or share via link — no watermarks or hidden fees.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-green-800 mb-12 max-w-2xl mx-auto">
            Getting started is easy. Just follow these three steps and you’ll
            have a professional resume ready in minutes — no design or writing
            skills needed.
          </p>{" "}
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "1. Enter Your Info",
                desc: "Fill in your details — work history, skills, education, and more. Simple & guided.",
              },
              {
                title: "2. Get AI Suggestions",
                desc: "Use powerful AI recommendations to enhance your resume content.",
              },
              {
                title: "3. Download & Share",
                desc: "Instantly download your polished resume or share it online with a single click.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by Job Seekers Worldwide
          </h2>
          <p className="text-green-800 mb-12 max-w-2xl mx-auto">
            Thousands of professionals trust PK CareerCabin to craft resumes
            that stand out. Here’s what some of our users have to say:
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                quote:
                  "PK CareerCabin’s resume builder made my job search so much easier. I got hired within two weeks!",
                name: "Farhan M., Software Developer",
              },
              {
                quote:
                  "Super intuitive, fast, and no fluff. The AI suggestions were spot on. Highly recommended!",
                name: "Alina R., Product Manager",
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
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-lg text-green-800 mb-8">
            Start building your professional resume with PK CareerCabin today —
            fast, easy, and completely free.
          </p>
          <a
            href="/resume-builder/create"
            className="inline-block bg-green-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-green-800 hover:scale-105 transition-all"
          >
            🚀 Launch Resume Builder
          </a>
        </div>
      </section>
    </>
  );
};

export default ResumeBuilder;
