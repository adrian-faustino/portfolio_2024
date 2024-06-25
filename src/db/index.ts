// Refactor: persist in ext DB
import { Experience, Project, Skill, SkillType, User } from "@/app/types";

export const USER_DATA: User = {
  first_name: "Adrian",
  last_name: "Faustino",
  title: "Software Developer",
  description:
    "Experienced Software Developer based in Vancouver, with a proven track record in both small to mid-sized startups and at tech giant Amazon.com.",
  location: "Vancouver, BC",
  email: "contact.adrianfaustino@gmail.com",
  avatar_url: "avatar_url_TODO",
  resume_url: "resume_url_TODO",
  linkedin_url: "https://www.linkedin.com/in/adrianfaustino",
  github_url: "https://github.com/adrian-faustino",
};

export const SKILLS: { [name: string]: Skill } = {
  TypeScript: {
    title: "TypeScript",
    docs_url: "https://www.typescriptlang.org",
    logo_url: "typescript",
    type: SkillType.PROGRAMMING_LANGUAGE,
  },
  NextJS: {
    title: "NextJS",
    docs_url: "https://nextjs.org",
    logo_url: "nextjs",
    type: SkillType.FRAMEWORK,
  },
};

const AMAZON_EXP: Experience = {
  dateRange: { start_date: new Date(2022, 7), end_date: new Date(2024, 0) },
  job_title: "Frontend Engineer",
  company_title: "Amazon.com",
  company_url: "https://www.aboutamazon.ca/about-us",
  location: "Vancouver, British Columbia, Canada",
  technologies: [SKILLS.TypeScript],
  achievements: [
    "Worked on Amazon.com’s Stores - Customer Stores and Advertiser Builder web applications",
    "Implemented UI improvements such as out of stock filter, dynamic navigation widget, mobile web app navigation experiments, and contact rate reduction mechanisms to improve customer UX",
    "Expanded metrics dashboards to track feature performance",
    "Performed on-call duties to ensure high severity tickets were addressed in a timely manner",
  ],
};
export const EXPERIENCES_DATA: Experience[] = [AMAZON_EXP];

const SHUFFLE_PROJ: Project = {
  dateRange: { start_date: new Date(2024, 0) },
  title: "Shuffle",
  description: "Spaced reptition learning tool for dancers",
  technologies: [SKILLS.NextJS, SKILLS.TypeScript],
  site_url: "https://shuffle-baila.pro",
};
export const PROJECTS: Project[] = [SHUFFLE_PROJ];
