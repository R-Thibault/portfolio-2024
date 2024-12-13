"use client";
import React from "react";
import Image from "next/image";
import { SkillType } from "@/types/skillType";

export default function SkillLogo(props: SkillType) {
  return (
    <div
      className="flex flex-col m-4 items-center justify-center"
      id={String(props.id)}
    >
      <Image src={props.src} alt={props.alt} width={60} height={60} />
      <span className="text-center">{props.title}</span>
    </div>
  );
}
