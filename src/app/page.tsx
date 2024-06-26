import { Experiences } from "@/components/Experiences";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro />
      <Experiences />
      <Projects />
      <Skills />
    </main>
  );
}
