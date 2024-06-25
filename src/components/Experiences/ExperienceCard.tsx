import { Experience } from "@/app/types";
import { DateRange } from "../common/DateRange";
import { Divider } from "../common/Divider";
import { Link } from "../common/Link";
import { SkillCard } from "../Skills/SkillCard";

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
        <span>{job_title}</span>
        <DateRange dateRange={dateRange} />
      </div>

      {/* Company, desc */}
      <div className="flex gap-2">
        <Link href={company_url}>{company_title}</Link>
        <Divider />
        <span>{location}</span>
      </div>

      {/* TODO: Technologies */}
      <div>
        <span>Technologies:</span>
        {technologies.map((technology) => (
          <SkillCard key={technology.title} skill={technology} />
        ))}
      </div>

      {/* Achievements */}
      <ul>
        {achievements.map((achievement, i) => (
          <li key={i} style={{ listStyleType: "disc" }}>
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
}
