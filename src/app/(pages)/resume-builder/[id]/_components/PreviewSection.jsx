"use client";

import { useResume } from "@/context/ResumeContext";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  User,
  Briefcase,
  Linkedin,
  Github,
  Link,
} from "lucide-react";

const PreviewSection = () => {
  const { resume } = useResume();
  const personal = resume.personalInfo || {};
  const themeColor = resume.themeColor || "#16a34a"; // fallback green

  return (
    <div
      className="p-5 rounded-xl shadow-md bg-white border"
      style={{
        borderColor: themeColor,
        boxShadow: `0 0 10px ${themeColor}`,
      }}
    >
      <div className="w-full h-full flex flex-row gap-1.5">
        {/* Left Sidebar */}
        <div
          className="w-1/3 rounded-md p-3 flex flex-col items-center text-center"
          style={{ backgroundColor: `${themeColor}20` }} // light variant
        >
          <img
            src={personal.profileImage || "/careercabin.png"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-2 mb-3"
            style={{ borderColor: themeColor }}
          />
          <p className="text-sm text-gray-700">{personal.summary}</p>

          {/* Certifications */}
          <h3 className="text-lg font-bold mt-4">Certifications</h3>
          {resume.certifications?.map((cert, index) => (
            <div key={index} className="mb-2">
              <h4 className="font-semibold">{cert.title}</h4>
              <p>{cert.issuer}</p>
              <p>{cert.date}</p>
              <p>{cert.link}</p>
            </div>
          ))}

          {/* Awards */}
          {resume.awards?.length > 0 && (
            <div>
              <h3 className="text-lg font-bold mt-4">Awards</h3>
              {resume.awards.map((award, index) => (
                <div key={index} className="mb-2">
                  <h4 className="font-semibold">{award.title}</h4>
                  <p>{award.issuer}</p>
                  <p>{award.date}</p>
                  <p>{award.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Hobbies */}
          {resume.hobbies?.length > 0 && (
            <div>
              <h3 className="text-lg font-bold mt-4">Hobbies</h3>
              <ul className="list-disc list-inside">
                {resume.hobbies.map((hobby, index) => (
                  <li key={index}>{hobby}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Languages */}
          {resume.languages?.length > 0 && (
            <div>
              <h3 className="text-lg font-bold mt-4">Languages</h3>
              <ul className="list-disc list-inside">
                {resume.languages.map((lang, index) => (
                  <li key={index}>
                    {lang.language} {lang.proficiency}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Reference */}
          {resume.reference && (
            <>
              <h3 className="text-lg font-bold mt-4">Reference</h3>
              <div className="mb-2">
                <h4 className="font-semibold">{resume.reference.name}</h4>
                <p>{resume.reference.position}</p>
                <p>{resume.reference.company}</p>
                <p>{resume.reference.email}</p>
                <p>{resume.reference.phone}</p>
              </div>
            </>
          )}
        </div>

        {/* Right Content */}
        <div className="w-2/3 bg-white rounded-md p-3 space-y-4">
          <div className="flex flex-row gap-2 w-full">
            {/* Left Info Box */}
            <div className="rounded-md p-2 flex-1 space-y-2 text-sm text-gray-800">
              <h2
                className="font-semibold flex items-center gap-2"
                style={{ color: themeColor }}
              >
                <User className="w-4 h-4" style={{ color: themeColor }} />
                {personal.firstName} {personal.lastName}
              </h2>

              <p className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" style={{ color: themeColor }} />
                {personal.jobTitle}
              </p>

              <p className="text-xs text-gray-600">{personal.dateOfBirth}</p>

              <div className="space-y-1 text-sm text-gray-700">
                {personal.portfolio && (
                  <div className="flex items-center gap-2 break-all">
                    <Link className="w-4 h-4" style={{ color: themeColor }} />
                    {personal.portfolio}
                  </div>
                )}
                {personal.linkedIn && (
                  <div className="flex items-center gap-2 break-all">
                    <Linkedin
                      className="w-4 h-4"
                      style={{ color: themeColor }}
                    />
                    {personal.linkedIn}
                  </div>
                )}
                {personal.github && (
                  <div className="flex items-center gap-2 break-all">
                    <Github
                      className="w-4 h-4"
                      style={{ color: themeColor }}
                    />
                    {personal.github}
                  </div>
                )}
              </div>
            </div>

            {/* Right Info Box */}
            <div className="rounded-md p-2 flex-1 space-y-2 text-sm text-gray-800">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" style={{ color: themeColor }} />
                {personal.phone}
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" style={{ color: themeColor }} />
                {personal.email}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" style={{ color: themeColor }} />
                {personal.address}
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" style={{ color: themeColor }} />
                {personal.nationality}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-bold mt-4">Education</h3>
            {resume.education?.map((edu, index) => (
              <div key={index} className="mb-2">
                <h4 className="font-semibold">{edu.universityName}</h4>
                <p>{edu.degree}</p>
                <p>{edu.major}</p>
                <p>{edu.startDate}</p>
                <p>{edu.endDate}</p>
                <p>{edu.grade}</p>
                <p>{edu.location}</p>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-lg font-bold mt-4">Experience</h3>
            {resume.experience?.map((exp, index) => (
              <div key={index} className="mb-2">
                <h4 className="font-semibold">{exp.title}</h4>
                <p>{exp.companyName}</p>
                <p>{exp.location}</p>
                <p>{exp.startDate}</p>
                <p>{exp.endDate}</p>
                <p>{exp.currentlyWorking}</p>
                <p>{exp.responsibilities}</p>
                <p>{exp.achievements}</p>
                <p>{exp.workSummery}</p>
              </div>
            ))}
          </div>

          {/* Projects */}
          {resume.projects?.length > 0 && (
            <div>
              <h3 className="text-lg font-bold mt-4">Projects</h3>
              {resume.projects.map((project, index) => (
                <div key={index} className="mb-2">
                  <h4 className="font-semibold">{project.name}</h4>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-1">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded"
                        style={{ backgroundColor: `${themeColor}20` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p>{project.description}</p>
                  {project.link && (
                    <a href={project.link} style={{ color: themeColor }}>
                      {project.link}
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          <div>
            <h3 className="text-lg font-bold mt-4">Skills</h3>
            <ul className="list-disc list-inside">
              {resume.skills?.map((skill, index) => (
                <li key={index}>
                  {typeof skill === "string"
                    ? skill
                    : `${skill.name} (${skill.rating}) ${skill.type}`}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;
