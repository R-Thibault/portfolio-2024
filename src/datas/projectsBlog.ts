export const projectsBlogDatas = [
  {
    id: 1,
    title: "My Portfolio",
    description:
      "Portfolio built with Next.js for now, with plans to integrate an API and a backend.",
    content: [
      "This portfolio is a personal project designed to showcase my skills and projects. Developed with Next.js, it uses TailwindCSS for a modern and responsive design and Shadcn UI for reusable and elegant components.",
      "The site is currently a static showcase, but additional features are planned, such as API integration and a backend to dynamically manage the displayed data. This evolving project reflects my constant desire to learn and improve my web development skills.",
      "My portfolio is hosted on an OVH server with Docker and Traefik. I host my other projects on the same server as well; all the projects are under Docker and managed via Traefik for routing.",
    ],
    imageUrl: ["/projects/portfolio/portfolio.png"],
    technologies: ["JS", "TS", "Next.JS", "Tailwind", "Shadcn"],
    websiteUrl: "https://portfolio.thibault-rossa.fr/",
    githubUrl: "https://github.com/R-Thibault/portfolio-2024",
  },
  {
    id: 2,
    title: "A Photographer's Website: Simplified Management and Modern Design",
    description:
      "Explore this photographer's website, developed with Next.js and TailwindCSS. With a headless CMS (Contentful), the photographer can manage photos, albums, pricing, and more.",
    content: [
      "This photographer's website project combines aesthetics and practicality. Built with Next.js and TailwindCSS, it offers a modern interface and optimal performance. Using Contentful, a headless CMS, the photographer can easily manage galleries, albums, and pricing without technical effort.",
      "With a focus on design and user experience, this site is the perfect tool for image professionals looking to present their work elegantly.",
      "This project was the first one I completed during my journey of learning JavaScript and Next.js/React. I am planning to improve the UI/UX of this website and replace the CMS with a back-office that has a more user-friendly interface.",
    ],
    imageUrl: [
      "/projects/photowebsite/photowebsitegallery1.png",
      "/projects/photowebsite/photowebsitegallery2.png",
      "/projects/photowebsite/photowebsitegallery3.png",
      "/projects/photowebsite/photowebsitegallery4.png",
      "/projects/photowebsite/photowebsitegallery5.png",
      "/projects/photowebsite/photowebsitegallery6.png",
    ],
    technologies: ["JS", "TS", "Next.JS"],
    websiteUrl: "https://photowebsite.thibault-rossa.fr/",
    githubUrl: "https://github.com/R-Thibault/contentful-photowebsite",
  },
  {
    id: 3,
    title: "Le Quai Antique: A Culinary Web Project",
    description:
      "Discover Le Quai Antique, a showcase website created with Symfony and Twig, designed for a fictional gourmet restaurant. This project combines elegance and modernity, while offering dynamic features like a reservation system.",
    content: [
      "Le Quai Antique is a project created with Symfony and the Twig template engine, hosted under Docker with a PostgreSQL database. ",
      "The goal was to provide a modern and functional website reflecting the refined universe of a gourmet restaurant. With a responsive design, interactive menu, and reservation management, this site perfectly illustrates the combination of creativity and technicality.",
      "This project was my first experience with Symfony. I enjoyed working on it, though I faced some challenges with handling collections of forms.",
    ],
    imageUrl: [
      "/projects/quaiAntique/quaiAntique1.png",
      "/projects/quaiAntique/quaiAntique2.png",
      "/projects/quaiAntique/quaiAntique3.png",
      "/projects/quaiAntique/quaiAntique4.png",
    ],
    technologies: ["PHP", "TWIG", "Symfony"],
    websiteUrl: "https://quai-antique.thibault-rossa.fr/",
    githubUrl: "https://github.com/R-Thibault/le_quai_antique",
  },
  {
    id: 4,
    title: "Ressources: A Complete and Versatile Project",
    description:
      "A year-end project developed with Next.js, Node.js, and GraphQL. This site includes file upload and instant messaging features, offering a rich and interactive user experience.",
    content: [
      "The Ressources project is a website developed as part of my Application Designer and Developer Bachelor's Degree, combining modern technologies like Next.js for the frontend and Node.js for the backend. The integration of a GraphQL API enables optimized data management, while advanced features such as file uploads and instant messaging enhance the user experience.",
      "I came up with the idea for this project during my Bachelor's degree year, as I noticed the difficulty we faced in keeping track of the knowledge shared throughout the year. I designed the specifications based on the requirements of my degree, ensuring the project could be used as my final exam submission for my Bachelor's degree.",
    ],
    imageUrl: [
      "/projects/ressources/ressources1.png",
      "/projects/ressources/ressources2.png",
      "/projects/ressources/ressources3.png",
      "/projects/ressources/ressources4.png",
    ],
    technologies: [
      "JS",
      "TS",
      "NodeJS",
      "Next.JS",
      "Express",
      "GraphQL",
      "REST",
    ],
    websiteUrl: "https://ressources.thibault-rossa.fr/",
    githubUrl: "https://github.com/R-Thibault/portfolio.git",
  },
];
