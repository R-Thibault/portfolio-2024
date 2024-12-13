"use client";

import ExperienceBlock from "../atoms/ExperienceBlock";
import { experienceType } from "@/types/experienceType";

export default function ExperiencesDisplay({
  experiences,
}: {
  experiences: experienceType[];
}) {
  return (
    <div className="flex flex-row flex-wrap gap-4 justify-between h-full">
      {experiences.map((experience) => (
        <ExperienceBlock
          key={experience.id}
          id={experience.id}
          companyName={experience.companyName}
          jobTitle={experience.jobTitle}
          from={experience.from}
          to={experience.to}
          jobDescription={experience.jobDescription}
          jobWhere={experience.jobWhere}
        ></ExperienceBlock>
      ))}
    </div>
  );
}
