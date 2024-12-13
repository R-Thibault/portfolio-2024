"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProjectBlogType } from "@/types/projetBlogType";

export default function BlogContent({ project }: { project: ProjectBlogType }) {
  return (
    <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 py-8">
      {/* Blog Header */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4">{project.title}</h1>
        <p className="text-gray-500 text-sm mb-6">{project.description}</p>

        <Image
          src={project.imageUrl}
          alt={project.title}
          width={800}
          height={450}
          className="w-full h-auto mb-8"
        />
      </div>

      {/* Technologies */}
      <div className="flex flex-col md:flex-row my-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
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
        <div className="mt-10 flex gap-4">
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
              Website
            </Link>
          </Button>
        </div>
      </div>
      {/* Blog Content */}
      <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
        <p>{project.content}</p>
      </div>
    </div>
  );
}
