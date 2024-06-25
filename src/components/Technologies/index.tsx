import { Skill } from "@/app/types";
import { SkillPill } from "./SkillPill";

interface TechnologiesProps {
  technologies: Skill[];
}

export function Technologies({ technologies }: TechnologiesProps) {
  return (
    <div>
      <span>Technologies:</span>
      {technologies.map((technology) => (
        <SkillPill key={technology.title} skill={technology} />
      ))}
    </div>
  );
}
