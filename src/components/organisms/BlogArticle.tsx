"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProjectBlogType } from "@/types/projetBlogType";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { useTranslations } from "next-intl";

export default function BlogArticle({ project }: { project: ProjectBlogType }) {
  const t = useTranslations("projectBlog");
  return (
    <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 py-8 ">
      {/* Blog Header */}
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4 ">{project.title}</h1>
        <p className="text-gray-500 text-lg mb-6 ">{project.description}</p>
        <div className="flex justify-center items-center">
          <Carousel
            className="sm:max-w-lg  max-w-md my-4 h-[16em] "
            opts={{
              align: "center",
            }}
          >
            <CarouselContent>
              {project.imageUrl.map((image, index) => (
                <CarouselItem key={index}>
                  <div>
                    <Card className="bg-slate-100 max-h-64">
                      <CardContent className="flex md:max-w-md sm:max-w-md max-w-xs items-center justify-center p-0 rounded-xl">
                        <Link href={image} target="_blank">
                          <Image
                            src={image}
                            alt={project.title + index}
                            width={800}
                            height={800}
                            style={{
                              objectFit: "fill",
                            }}
                            className="rounded-xl"
                          />
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {project.imageUrl.length > 1 && (
              <>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </>
            )}
          </Carousel>
        </div>
      </div>

      {/* Technologies */}
      <div className="flex flex-col md:flex-row my-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">{t("projectBlog")}</h2>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-primary text-primary-foreground"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        {/* Links */}
        <div className="mt-10 flex gap-4 ml-4">
          <Button variant="outline" size="sm" asChild>
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/logos/github.svg"
                width={20}
                height={20}
                alt="github logo"
              ></Image>
              GitHub
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="w-4 h-4 mr-2" />
              {project.website}
            </Link>
          </Button>
        </div>
      </div>
      {/* Blog Content */}
      <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
        {project.content.map((paragraph, index) => (
          <p key={index} className="py-4 ">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
