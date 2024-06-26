export interface User {
  first_name: string;
  last_name: string;
  title: string;
  description: string;
  location: string;
  email: string;
  avatar_url: string;
  resume_url: string;
  linkedin_url: string;
  github_url: string;
}

export type DateRange = {
  start_date: Date;
  end_date?: Date;
};

export enum SkillType {
  PROGRAMMING_LANGUAGE = "Programming Language",
  FRAMEWORK = "Framework",
  CLOUD = "Cloud",
  TESTING = "Testing",
  DATABASE = "Database",
  TOOL = "Tool",
  SOFT_SKILL = "Soft skill",
  METHOLOGY = "Methology",
  STACK = "Stack",
  MISC = "Misc",
}

export interface Skill {
  title: string;
  description?: string;
  docs_url: string;
  logo_url: string;
  type: SkillType;
}

export interface Experience {
  dateRange: DateRange;
  job_title: string;
  job_description?: string;
  company_title: string;
  company_url: string;
  location: string;
  technologies: Skill[];
  achievements: string[];
}

export interface Project {
  dateRange: DateRange;
  title: string;
  description: string;
  technologies: Skill[];
  site_url: string;
}

export interface Education {
  dateRange: DateRange;
  institution_title: string;
  institution_url: string;
  degree: string;
  location: string;
}
