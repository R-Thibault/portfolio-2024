import React from "react";
import ProLinks from "@/components/molecules/ProLinks";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";

export default function PresentationCard() {
  return (
    <Card className="md:flex items-center shadow-md">
      <CardContent className=" pt-6 w-full flex justify-center items-center">
        <div className="image-wrapper  bg-gray-200 rounded-xl group shadow">
          <Image
            id="portrait1"
            src="/me/photo-1.jpg"
            fill={true}
            alt="Thibault Rossa 1"
            className="image-content rounded-xl absolute inset-0 w-full h-full opacity-100 object-cover group-hover:animate-fade-out"
          />
          <Image
            id="portrait2"
            src="/me/photo-2.jpg"
            fill={true}
            alt="Thibault Rossa 2"
            className="rounded-xl absolute inset-0 w-full h-full object-cover  opacity-0 group-hover:animate-fade-in-2"
          />
          <Image
            id="portrait3"
            src="/me/photo-3.jpg"
            fill={true}
            alt="Thibault Rossa 3"
            className="rounded-xl absolute inset-0 w-full h-full object-cover  opacity-0 group-hover:animate-fade-in-3"
          />
        </div>
      </CardContent>
      <div className="max-w-xl">
        <CardHeader>
          <CardTitle className="flex flex-row md:gap-4 gap-2 md:text-5xl text-4xl font-bold">
            <h1>Hi Thibault here </h1>
            <Image
              id="Hello"
              src="/waving-hand-svgrepo-com.svg"
              width={40}
              height={40}
              alt="waving-hand"
              className="hover:animate-waving-hand"
            ></Image>
          </CardTitle>
          <CardDescription className="pt-2">Lyon, France</CardDescription>
        </CardHeader>
        <CardContent>
          <ProLinks></ProLinks>
        </CardContent>
        <CardContent>
          <p>
            Developer skilled in JavaScript/TypeScript, PHP, and modern
            frameworks. Actively seeking opportunities while expanding expertise
            in Golang.
          </p>
        </CardContent>
      </div>
    </Card>
  );
}
