import mongoose, { Schema } from "mongoose";

// Sub-schemas

const EducationSchema = new Schema(
  {
    universityName: { type: String, trim: true },
    degree: { type: String, trim: true },
    major: { type: String, trim: true },
    startDate: String,
    endDate: String,
    grade: { type: String, trim: true },
    location: { type: String, trim: true },
    description: { type: String, trim: true },
  },
  { _id: false }
);

const ExperienceSchema = new Schema(
  {
    title: { type: String, trim: true },
    companyName: { type: String, trim: true },
    location: { type: String, trim: true },
    startDate: String,
    endDate: String,
    currentlyWorking: { type: Boolean, default: false },
    responsibilities: [{ type: String }],
    achievements: [{ type: String }],
    workSummary: { type: String, trim: true },
  },
  { _id: false }
);

const SkillSchema = new Schema(
  {
    name: { type: String, trim: true },
    rating: { type: Number, min: 0, max: 5 },
    type: { type: String, trim: true }, // "Technical", "Soft", "Language"
  },
  { _id: false }
);

const CertificationSchema = new Schema(
  {
    title: { type: String, trim: true },
    issuer: { type: String, trim: true },
    date: String,
    link: { type: String, trim: true },
  },
  { _id: false }
);

const LanguageSchema = new Schema(
  {
    language: [{ type: String }],
    proficiency: { type: String, trim: true }, // "Native", "Fluent", etc.
  },
  { _id: false }
);

const ProjectSchema = new Schema(
  {
    name: { type: String, trim: true },
    description: { type: String, trim: true },
    technologies: [{ type: String }],
    link: { type: String, trim: true },
  },
  { _id: false }
);

const AwardSchema = new Schema(
  {
    title: { type: String, trim: true },
    issuer: { type: String, trim: true },
    date: String,
    description: { type: String, trim: true },
  },
  { _id: false }
);

const ReferenceSchema = new Schema(
  {
    name: { type: String, trim: true },
    position: { type: String, trim: true },
    company: { type: String, trim: true },
    email: { type: String, trim: true },
    phone: { type: String, trim: true },
  },
  { _id: false }
);

// Main Resume Schema

const ResumeSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    personalInfo: {
      firstName: { type: String, trim: true },
      lastName: { type: String, trim: true },
      email: { type: String, trim: true },
      phone: { type: String, trim: true },
      address: { type: String, trim: true },
      jobTitle: { type: String, trim: true },
      dateOfBirth: String,
      nationality: { type: String, trim: true },
      linkedIn: { type: String, trim: true },
      portfolio: { type: String, trim: true },
      github: { type: String, trim: true },
      profileImage: { type: String, trim: true },
      themeColor: { type: String, trim: true },
      summary: { type: String, trim: true },
    },
    education: [EducationSchema],
    experience: [ExperienceSchema],
    skills: [SkillSchema],
    certifications: [CertificationSchema],
    languages: [LanguageSchema],
    projects: [ProjectSchema],
    awards: [AwardSchema],
    hobbies: [{ type: String, trim: true }],
    references: [ReferenceSchema],
    createdBy: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const ResumeModel =
  mongoose.models.Resume || mongoose.model("Resume", ResumeSchema);

export default ResumeModel;
