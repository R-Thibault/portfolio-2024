"use client";
import React from "react";

import { experienceType } from "@/types/experienceType";

export default function ExperienceBlock(props: experienceType) {
  return (
    <div className="flex flex-col gap-2 p-10">
      <div className="flex ">
        <h3 className="font-bold pr-2">{props.companyName}</h3>
        <span className="font-medium"> - {props.jobTitle}</span>
      </div>
      <div className="flex border-b-2 pb-4">
        <span>{props.jobWhere}</span>
        <span className="px-4">
          {String(props.from)} - {String(props.to)}
        </span>
      </div>

      <div>
        {props.jobDescription.map((sentence, index) => (
          <p key={index} className="text-gray-700">
            {sentence}
          </p>
        ))}
      </div>
    </div>
  );
}
