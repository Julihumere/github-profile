import GithubInfo from "@/components/GithubInfo";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="w-full h-auto flex flex-col items-center bg-background">
      <Hero />
      <GithubInfo />
    </div>
  );
}
