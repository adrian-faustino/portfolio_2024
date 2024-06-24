import { USER_DATA } from "@/db";

interface IntroProps {}

export function Intro({}: IntroProps) {
  const {
    first_name,
    last_name,
    title,
    description,
    location,
    email,
    avatar_url,
    resume_url,
    linkedin_url,
    github_url,
  } = USER_DATA;

  return (
    <div>
      <div className="flex">
        <div>{avatar_url}</div>

        <div>
          <h2>
            {first_name} {last_name}
          </h2>

          <h3>{title}</h3>

          <div className="flex gap-2">
            <span>{location}</span>
            <span>{email}</span>
          </div>

          <div className="flex gap-2">
            <span>{resume_url}</span>
            <span>{linkedin_url}</span>
            <span>{github_url}</span>
          </div>
        </div>
      </div>

      <div>{description}</div>
    </div>
  );
}
