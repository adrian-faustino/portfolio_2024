import { Skill } from "@/app/types";
import { TypeScriptSVG } from "@/svg/TypeScriptSVG";
import { Link } from "../common/Link";
import { NextJsSVG } from "@/svg/NextJsSVG";
import { ReactSVG } from "@/svg/ReactSVG";

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  const { title, docs_url, logo_url, type } = skill;

  const getLogoComponent = () => {
    switch (logo_url) {
      case "typescript":
        return <TypeScriptSVG />;
      case "nextjs":
        return <NextJsSVG />;
      case "react":
        return <ReactSVG />;
      default:
        return <span>NO_LOGO</span>;
    }
  };

  return (
    <div className="debugWhite">
      <Link href={docs_url}>{title}</Link>

      <div>{type}</div>

      <div>{getLogoComponent()}</div>
    </div>
  );
}
