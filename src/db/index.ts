import { Experience, User } from "@/app/types";
import { formatDate } from "@/utils/date";

// Refactor: persist in ext DB
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

const AMAZON_EXP: Experience = {
  dateRange: { start_date: new Date(2022, 7), end_date: new Date(2024, 0) },
  job_title: "Frontend Engineer I",
  company_title: "Aamazon.com",
  company_url: "https://www.amazon.com",
  location: "Vancouver, British Columbia, Canada",
  technologies: [],
  achievements: [
    "Worked on Amazon.com’s Stores - Customer Stores and Advertiser Builder web applications",
    "Implemented UI improvements such as out of stock filter, dynamic navigation widget, mobile web app navigation experiments, and contact rate reduction mechanisms to improve customer UX",
    "Expanded metrics dashboards to track feature performance",
    "Performed on-call duties to ensure high severity tickets were addressed in a timely manner",
  ],
};
export const EXPERIENCES_DATA: Experience[] = [AMAZON_EXP];
