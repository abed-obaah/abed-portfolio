import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/assets/icons";
import IslandLuxury from "@/assets/island-luxury.png";
import Em2geeFoods from "@/assets/em2gee-foods.png";

export const SOCIAL_LINKS = [
  {
    link: "https://github.com/johnphealipto",
    icon: GithubIcon,
  },
  {
    link: "https://www.linkedin.com/in/johnadibe",
    icon: LinkedinIcon,
  },
  {
    link: "https://twitter.com/johnphealipto",
    icon: TwitterXIcon,
  },
];

export const PROJECTS = [
  {
    name: "Island Luxury Property Listings",
    image: IslandLuxury,
    desc: "A web application with varieties of property listings ranging from Flats, Houses, Land & Commercial Property.",
    date: "Feb 10, 2022",
    stacks: ["React.js", "Javascript", "CSS", "Redux"],
    live: "https://island-luxury-demo.netlify.app/",
  },
  {
    name: "AK Pressure Wash",
    desc: "Trusted pressure washing service provider.",
    date: "Jul 30, 2023",
    stacks: ["Next.js", "Typescript", "Tailwind CSS", "SASS", "Google Map"],
    live: "https://www.akpressurewash.com/",
  },
  {
    name: "AK Pressure Wash",
    desc: "Trusted pressure washing service provider",
    date: "Feb 10, 2022",
    stacks: ["React.js"],
  },
  {
    name: "Em2gee Foods",
    image: Em2geeFoods,
    desc: "A branded bean flour website. This project is my first attempt building a full business website using jQuery 😄",
    date: "Jan 27, 2021",
    stacks: ["jQuery", "Javascript", "HTML", "CSS"],
    live: "https://johnphealipto.github.io/em2gee-foods/",
    code: "https://github.com/johnphealipto/em2gee-foods",
  },
];
