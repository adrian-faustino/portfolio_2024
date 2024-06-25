import { Skill } from "@/app/types";

interface SkillPillProps {
  skill: Skill;
}

export function SkillPill({ skill }: SkillPillProps) {
  const { title, docs_url, logo_url, type } = skill;

  return (
    <span className="rounded-xl px-2 py-0.5 border-2 border-white">
      {title}
    </span>
  );
}
