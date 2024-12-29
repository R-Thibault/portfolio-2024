"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkillsDisplay from "../molecules/SkillsDisplay";
import { skillsDatas } from "@/datas/skills";
import { useLocale } from "next-intl";
import enTranslations from "../../../messages/en.json";
import frTranslations from "../../../messages/fr.json";
import ExperiencesDisplay from "../molecules/ExperiencesDisplay";
import EducationsDisplay from "../molecules/EducationsDisplay";

import { useTranslations } from "next-intl";

export default function JobInfosDisplay() {
  const jobInfosDisplay = useTranslations("JobInfosDisplay");
  const locale = useLocale();

  const translations = locale === "fr" ? frTranslations : enTranslations;
  const experiences = translations.experiences;
  const educations = translations.educations;
  const [skills] = useState(skillsDatas);

  return (
    <Tabs defaultValue="experience" className="w-full mt-8 border-solid">
      <div className="bg-[#DCD5D5] rounded-xl shadow">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="experience" className="hover:bg-gray-200">
            {jobInfosDisplay("experiencesTab")}
          </TabsTrigger>
          <TabsTrigger value="skills" className="hover:bg-gray-200">
            {jobInfosDisplay("skillsTab")}
          </TabsTrigger>
          <TabsTrigger value="education" className="hover:bg-gray-200">
            {jobInfosDisplay("educationsTab")}
          </TabsTrigger>
        </TabsList>
      </div>
      <div className="borde-solid border-black rounded-2xl">
        <TabsContent value="experience">
          <ExperiencesDisplay experiences={experiences} />
        </TabsContent>
        <TabsContent value="skills">
          <SkillsDisplay skills={skills}></SkillsDisplay>
        </TabsContent>
        <TabsContent value="education">
          <EducationsDisplay educations={educations} />
        </TabsContent>
      </div>
    </Tabs>
  );
}
