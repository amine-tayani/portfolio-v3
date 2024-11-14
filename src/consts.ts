import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Amine Tayani",
  EMAIL: "amine.tayani@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 1,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Home of Amine's Portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of blog posts that I have written.",
};

export const WORK: Metadata = {
  TITLE: "Experience",
  DESCRIPTION: "A collection of my work experiences.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "Github",
    HREF: "https://github.com/amine-tayani/",
  },
  {
    NAME: "Twitter",
    HREF: "https://x.com/maximadotdev",
  },
  {
    NAME: "Linkedin",
    HREF: "https://www.linkedin.com/in/aminety/",
  },
];
