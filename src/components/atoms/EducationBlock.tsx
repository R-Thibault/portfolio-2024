import { educationType } from "@/types/educationType";

import React from "react";

export default function EducationBlock(props: educationType) {
  return (
    <div className="flex flex-col gap-2 p-10">
      <div className="flex ">
        <h3 className="font-bold pr-2">{props.schoolName}</h3>
        <span className="font-medium"> - {props.educationTitle}</span>
      </div>
      <div className="flex border-b-2 pb-4">
        <span>{props.educationWhere}</span>
        <span className="px-4">
          {String(props.from)} - {String(props.to)}
        </span>
      </div>

      <div>
        <p>{props.educationDescription}</p>
      </div>
    </div>
  );
}
