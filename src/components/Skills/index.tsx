import { SKILLS } from "@/db";
import { SkillCard } from "./SkillCard";

interface SkillsProps {}

export function Skills({}: SkillsProps) {
  const allSkills = Object.values(SKILLS);

  return (
    <div>
      <h3>Skills</h3>

      <div>
        {allSkills.map((skill) => (
          <SkillCard skill={skill} />
        ))}
      </div>
    </div>
  );
}
