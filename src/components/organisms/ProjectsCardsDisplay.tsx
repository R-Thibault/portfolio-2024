"use client";
import React from "react";
import { ProjectCard } from "../molecules/ProjectCard";

import { Separator } from "@/components/ui/separator";
import enTranslations from "../../../messages/en.json";
import frTranslations from "../../../messages/fr.json";
import { useLocale, useTranslations } from "next-intl";

export default function ProjectsCardsDisplay() {
  const locale = useLocale();
  const t = useTranslations("myProjects");
  const translations = locale === "fr" ? frTranslations : enTranslations;

  return (
    <div className="border shadow rounded-xl p-2 my-6">
      <h3 className="m-2">{t("myProjects")}</h3>
      <Separator className="border-b my-2"></Separator>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 place-items-center">
        {translations.projectCards.map((project, index) => (
          <ProjectCard key={index} projectCard={project} />
        ))}
      </div>
    </div>
  );
}
