"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BlogArticle from "@/components/organisms/BlogArticle";
import enTranslations from "../../../../../messages/en.json";
import frTranslations from "../../../../../messages/fr.json";
import { ProjectCardBlog } from "@/components/molecules/ProjectCardBlog";
import { useLocale, useTranslations } from "next-intl";

export default function Page() {
  const locale = useLocale();
  const { id } = useParams();
  const parsedId = parseInt(id as string, 10);
  const [currentProjectId, setCurrentProjectId] = useState<number | undefined>(
    parsedId
  );
  const loading = useTranslations("loading");
  const articleNotFound = useTranslations("articleNotFound");
  const translations = locale === "fr" ? frTranslations : enTranslations;
  const router = useRouter();
  const currentProject = translations.projectsBlog.find(
    (data) => data.id === currentProjectId
  );
  useEffect(() => {
    if (parsedId) {
      setCurrentProjectId(parsedId);
    }
  }, [parsedId]);

  const handleCardClick = (projectId: number) => {
    setCurrentProjectId(projectId);
    router.push(`/${locale}/projects/${projectId}`, undefined);
  };
  if (!id) {
    // While the router is still initializing
    return <div>{loading("loading")}</div>;
  }
  return (
    <>
      <div className="flex justify-center w-full ">
        <Carousel
          opts={{
            align: "center",
            startIndex: currentProjectId ? currentProjectId - 1 : 0,
          }}
          className="w-full md:max-w-xl max-w-md"
        >
          <CarouselContent>
            {translations.projectCards.map((projectCard, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 basis-2/3 md:p-4 p-1"
              >
                <Card>
                  <CardContent
                    className="flex aspect-square items-center justify-center p-4 cursor-pointer"
                    onClick={() => handleCardClick(projectCard.id)}
                  >
                    <ProjectCardBlog
                      id={projectCard.id}
                      title={projectCard.title}
                      description={projectCard.description}
                      imageUrl={projectCard.imageUrl}
                      technologies={projectCard.technologies}
                    ></ProjectCardBlog>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
      {!currentProject ? (
        <div className="text-center py-10">
          <h2 className="text-xl font-semibold">
            {articleNotFound("notFound")}
          </h2>
          <p className="text-gray-500">{articleNotFound("moved")}</p>
        </div>
      ) : (
        <BlogArticle project={currentProject}></BlogArticle>
      )}
    </>
  );
}
