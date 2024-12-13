import React from "react";
import SocialMediaLinks from "../atoms/SocialMediaLinks";
import ResumeLink from "../atoms/ResumeLink";

export default function ProLinks() {
  return (
    <div className=" flex flex-wrap sm:flex-nowrap items-center gap-8">
      <ResumeLink></ResumeLink>
      <SocialMediaLinks></SocialMediaLinks>
    </div>
  );
}
