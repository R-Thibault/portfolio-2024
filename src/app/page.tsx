import PresentationCard from "@/components/organisms/PresentationCard";
import JobInfosDisplay from "@/components/organisms/JobInfosDisplay";
import ProjectsCardsDisplay from "@/components/organisms/ProjectsCardsDisplay";

export default function Home() {
  return (
    <>
      <PresentationCard></PresentationCard>
      <JobInfosDisplay></JobInfosDisplay>
      <ProjectsCardsDisplay></ProjectsCardsDisplay>
    </>
  );
}
