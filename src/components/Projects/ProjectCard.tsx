import { Project } from "@/app/types";
import { DateRange } from "../common/DateRange";
import { Link } from "../common/Link";
import { Technologies } from "../Technologies";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { dateRange, title, description, technologies, site_url } = project;
  return (
    <div className="debugWhite">
      <div className="flex justify-between">
        <Link href={site_url}>{title}</Link>
        <DateRange dateRange={dateRange} />
      </div>

      <Technologies technologies={technologies} />

      <p>{description}</p>
    </div>
  );
}
