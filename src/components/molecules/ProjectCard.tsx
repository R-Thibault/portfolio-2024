import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";
import { ProjectCardType } from "@/types/projectCardType";
import Link from "next/link";
import { useLocale } from "next-intl";

export function ProjectCard({ projectCard }: { projectCard: ProjectCardType }) {
  const locale = useLocale();
  return (
    <Card className="w-full max-w-md h-[16em] overflow-hidden relative group">
      <Image
        src={projectCard.imageUrl}
        alt={projectCard.title}
        width={500}
        height={500}
        style={{
          objectFit: "fill",
        }}
        className="transition-transform duration-300 group-hover:scale-110 w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />

      <CardContent className="absolute inset-0 flex flex-col justify-center items-center p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-4 left-4 z-10">
          <h3 className="text-lg font-semibold text-white bg-primary px-2 py-1 rounded inline-block">
            {projectCard.title}
          </h3>
          <p className="text-sm my-4 text-center">{projectCard.description}</p>
          <div className="flex flex-wrap justify-center gap-1 mb-4">
            {projectCard.technologies.map((tech, index) => (
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
      </CardContent>

      <CardFooter className="p-1  absolute bottom-0 left-0 right-0 flex flex-wrap gap-2 justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <Button variant="outline" size="sm" asChild className="p-2">
          <Link
            href={projectCard.githubUrl}
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
        <Button variant="outline" size="sm" asChild className="p-2">
          <Link
            href={projectCard.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe className="w-4 h-4" />
            {projectCard.website}
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild className="p-2">
          <Link
            href={`/${locale}/projects/` + projectCard.id}
            rel="noopener noreferrer"
          >
            <Globe className="w-4 h-4" />
            {projectCard.moreInfos}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
