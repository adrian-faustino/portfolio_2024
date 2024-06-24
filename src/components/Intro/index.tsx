import { USER_DATA } from "@/db";

interface IntroProps {}

export function Intro({}: IntroProps) {
  const {
    first_name,
    last_name,
    title,
    description,
    location,
    avatar_url,
    resume_url,
    linkedin_url,
    github_url,
  } = USER_DATA;

  return (
    <div>
      <div>
        {/* Avatar */}
        <div>AVTR PLACEHOLDER</div>

        {/* Title, Location... */}
        <div>
          <h2>
            {first_name} {last_name}
          </h2>

          <h3>{title}</h3>

          <div>
            <span>{location}</span>

            <span>{linkedin_url}</span>

            <span>{github_url}</span>
          </div>
        </div>
      </div>

      {/* Desc */}
      <div>{description}</div>
    </div>
  );
}
