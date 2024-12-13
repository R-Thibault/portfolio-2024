import React from "react";
import EducationBlock from "../atoms/EducationBlock";
import { educationType } from "@/types/educationType";

export default function experienceDisplay({
  educations,
}: {
  educations: educationType[];
}) {
  return (
    <div className="flex flex-row flex-wrap gap-4 justify-between h-full">
      {educations.map((education) => (
        <EducationBlock
          key={education.id}
          id={education.id}
          schoolName={education.schoolName}
          educationTitle={education.educationTitle}
          from={education.from}
          to={education.to}
          educationDescription={education.educationDescription}
          educationWhere={education.educationWhere}
        ></EducationBlock>
      ))}
    </div>
  );
}
