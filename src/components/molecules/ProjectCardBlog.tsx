import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectCardBlogType } from "@/types/projectCardType";

export function ProjectCardBlog({
  title,
  description,
  imageUrl,
  technologies,
}: ProjectCardBlogType) {
  return (
    <Card className="w-full md:max-w-sm max-w-xs h-72 overflow-hidden relative group">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={400}
        style={{
          objectFit: "cover",
        }}
        className="transition-transform duration-300 group-hover:scale-110 w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />

      <CardContent className="absolute inset-0 flex flex-col justify-center items-center p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-4 left-0 z-10">
          <h3 className="text-lg font-semibold text-white bg-primary px-2 py-1 rounded inline-block">
            {title}
          </h3>
          <p className="text-sm my-4 text-center">{description}</p>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {technologies.map((tech, index) => (
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
    </Card>
  );
}
