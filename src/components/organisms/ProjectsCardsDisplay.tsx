"use client";
import React, { useState } from "react";
import { ProjectCard } from "../molecules/ProjectCard";
import { projectsCardDatas } from "@/datas/projectsCardData";
import { Separator } from "@/components/ui/separator";

export default function ProjectsCardsDisplay() {
  const [projectsCards] = useState(projectsCardDatas);
  return (
    <div className="border shadow rounded-xl p-2 my-6">
      <h3 className="m-2">My projects</h3>
      <Separator className="border-b my-2"></Separator>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 place-items-center">
        {projectsCards.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
