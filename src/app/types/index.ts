export interface User {
  first_name: string;
  last_name: string;
  title: string;
  description: string;
  avatar_url: string;
  resume_url: string;
  linkedin_url: string;
  github_url: string;
}

export type DateRange = {
  start_date: string;
  end_date?: string;
};

export type Technology = {
  title: string;
  logo_url: string;
  docs_url: string;
};

export interface Experience {
  dateRange: DateRange;
  job_title: string;
  job_description: string;
  company_title: string;
  company_url: string;
  location: string;
  achievements: string[];
  technologies: Technology[];
}

export interface Projects {
  dateRange: DateRange;
  title: string;
  description: string;
  technologies: Technology[];
  site_url: string;
}

export interface Education {
  dateRange: DateRange;
  institution_title: string;
  institution_url: string;
  degree: string;
  location: string;
}

export enum SkillType {
  PROGRAMMING_LANGUAGE,
  FRAMEWORK,
  CLOUD,
  TESTING,
  DATABASE,
  TOOL,
  SOFT_SKILL,
  CONCEPT,
  STACK,
  MISC,
}

export interface Skill {
  title: string;
  description?: string;
  docs_url: string;
  logo_url: string;
  type: SkillType;
}
