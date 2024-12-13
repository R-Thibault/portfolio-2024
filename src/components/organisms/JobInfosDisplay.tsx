"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkillsDisplay from "../molecules/SkillsDisplay";
import { skillsDatas } from "@/datas/skills";

import { experiencesDatas } from "@/datas/experiences";
import ExperiencesDisplay from "../molecules/ExperiencesDisplay";
import EducationsDisplay from "../molecules/EducationsDisplay";
import { educationsDatas } from "@/datas/educations";

export default function JobInfosDisplay() {
  const [skills] = useState(skillsDatas);
  const [experiences] = useState(experiencesDatas);
  const [educations] = useState(educationsDatas);
  return (
    <Tabs defaultValue="experience" className="w-full mt-8 border-solid">
      <div className="bg-[#DCD5D5] rounded-xl shadow">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="experience" className="hover:bg-gray-200">
            Experiences
          </TabsTrigger>
          <TabsTrigger value="skills" className="hover:bg-gray-200">
            Skills
          </TabsTrigger>
          <TabsTrigger value="education" className="hover:bg-gray-200">
            Educations
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
