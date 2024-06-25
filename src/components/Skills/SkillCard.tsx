import { Skill } from "@/app/types";
import { TypeScriptSVG } from "@/svg/TypeScriptSVG";
import { Link } from "../common/Link";

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  const { title, docs_url, logo_url, type } = skill;

  const getLogoComponent = () => {
    switch (logo_url) {
      case "typescript":
        return <TypeScriptSVG />;

      default:
        return <span>NO_LOGO</span>;
    }
  };

  return (
    <div>
      <Link href={docs_url}>{title}</Link>

      <div>{type}</div>

      <div>{getLogoComponent()}</div>
    </div>
  );
}
