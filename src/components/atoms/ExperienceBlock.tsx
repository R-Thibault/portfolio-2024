"use client";
import React from "react";

import { experienceType } from "@/types/experienceType";

export default function ExperienceBlock(props: experienceType) {
  // Fonction pour formater les dates
  const formatDate = (dateString: string) => {
    const options = { year: "numeric", month: "long" } as const;
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("fr-FR", options).format(date);
  };
  return (
    <div className="flex flex-col border-b-2 gap-2 px-4 py-4 my-5">
      <div className="flex ">
        <h3 className="font-bold pr-2 text-lg">{props.companyName}</h3>
        <span className="font-medium text-lg"> - {props.jobTitle}</span>
      </div>
      <div className="flex border-b-2 pb-4">
        <span className="text-lg">{props.jobWhere}</span>
        <span className="px-4 text-lg">
          {formatDate(props.from)} - {formatDate(props.to)}
        </span>
      </div>

      <div>
        {props.jobDescription.map((sentence, index) => (
          <p key={index} className="text-gray-700 text-lg ">
            {sentence}
          </p>
        ))}
      </div>
    </div>
  );
}
