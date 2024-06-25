import { EXPERIENCES_DATA } from "@/db";
import { ExperienceCard } from "./ExperienceCard";

interface ExperiencesProps {}

export function Experiences({}: ExperiencesProps) {
  return (
    <div>
      <h3>Experiences</h3>

      <div>
        {EXPERIENCES_DATA.map((experience) => (
          <ExperienceCard experience={experience} />
        ))}
      </div>
    </div>
  );
}
