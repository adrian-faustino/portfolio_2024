import { Experience } from "@/app/types";
import { DateRange } from "../common/DateRange";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const {
    dateRange,
    job_title,
    job_description,
    company_title,
    company_url,
    location,
    technologies,
    achievements,
  } = experience;
  return (
    <div>
      {/* Header (title, dateRange) */}
      <div className="flex justify-between">
        <span>{company_title}</span>
        <DateRange dateRange={dateRange} />
      </div>

      {/* Company, desc */}
      <div></div>

      {/* Technologies */}
      <div></div>

      {/* Achievements */}
      <div></div>
    </div>
  );
}
