import mongoose, { Schema } from "mongoose";

// Sub-schemas

const EducationSchema = new Schema(
  {
    universityName: String,
    degree: String,
    major: String,
    startDate: String,
    endDate: String,
    grade: String,
    location: String,
    description: String,
  },
  { _id: false }
);

const ExperienceSchema = new Schema(
  {
    title: String,
    companyName: String,
    location: String,
    startDate: String,
    endDate: String,
    currentlyWorking: Boolean,
    responsibilities: [String],
    achievements: [String],
    workSummery: String,
  },
  { _id: false }
);

const SkillSchema = new Schema(
  {
    name: String,
    rating: Number,
    type: String, // e.g., "Technical", "Soft", "Language"
  },
  { _id: false }
);

const CertificationSchema = new Schema(
  {
    title: String,
    issuer: String,
    date: String,
    link: String,
  },
  { _id: false }
);

const LanguageSchema = new Schema(
  {
    language: String,
    proficiency: String, // e.g., "Native", "Fluent", "Intermediate"
  },
  { _id: false }
);

const ProjectSchema = new Schema(
  {
    name: String,
    description: String,
    technologies: [String],
    link: String,
  },
  { _id: false }
);

const AwardSchema = new Schema(
  {
    title: String,
    issuer: String,
    date: String,
    description: String,
  },
  { _id: false }
);

const ReferenceSchema = new Schema(
  {
    name: String,
    position: String,
    company: String,
    email: String,
    phone: String,
  },
  { _id: false }
);

// Main Resume Schema

const ResumeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    personal_info: {
      firstName: String,
      lastName: String,
      email: String,
      phone: String,
      address: String,
      jobTitle: String,
      dateOfBirth: String,
      nationality: String,
      linkedIn: String,
      portfolio: String,
      github: String,
      profileImage: String,
      themeColor: String,
      summery: String,
    },
    education: [EducationSchema],
    experience: [ExperienceSchema],
    skills: [SkillSchema],
    certifications: [CertificationSchema],
    languages: [LanguageSchema],
    projects: [ProjectSchema],
    awards: [AwardSchema],
    hobbies: [String],
    references: [ReferenceSchema],
    createdBy: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ResumeModel =
  mongoose.models.Resume || mongoose.model("Resume", ResumeSchema);

export default ResumeModel;
