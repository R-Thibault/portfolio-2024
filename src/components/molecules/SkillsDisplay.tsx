"use client";
import React from "react";
import { SkillType } from "@/types/skillType";
import SkillLogo from "../atoms/SkillLogo";
import { useTranslations } from "next-intl";

export default function SkillsDisplay({ skills }: { skills: SkillType[] }) {
  const skillsT = useTranslations("skillsCat");
  return (
    <div className="flex flex-col h-full">
      <h3 className="p-2 font-semibold">{skillsT("languages")}:</h3>
      <div className="flex flex-row flex-wrap gap-4 justify-between w-full">
        {skills.map((skill) =>
          skill.type === "languages" ? (
            <SkillLogo
              key={skill.id}
              id={skill.id}
              src={skill.src}
              alt={skill.alt}
              title={skill.title}
              type={skill.type}
            />
          ) : null
        )}
      </div>
      <h3 className="p-2 font-semibold">{skillsT("frameworks")}:</h3>
      <div className="flex flex-row flex-wrap gap-4 justify-between w-full items-center">
        {skills.map((skill) =>
          skill.type === "frameworks" ? (
            <SkillLogo
              key={skill.id}
              id={skill.id}
              src={skill.src}
              alt={skill.alt}
              title={skill.title}
              type={skill.type}
            />
          ) : null
        )}
      </div>
      <h3 className="p-2 font-semibold">{skillsT("applications")}:</h3>
      <div className="flex flex-row flex-wrap gap-4 justify-between w-full">
        {skills.map((skill) =>
          skill.type === "applications" ? (
            <SkillLogo
              key={skill.id}
              id={skill.id}
              src={skill.src}
              alt={skill.alt}
              title={skill.title}
              type={skill.type}
            />
          ) : null
        )}
      </div>
    </div>
  );
}
