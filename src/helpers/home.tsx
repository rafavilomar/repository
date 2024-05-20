import {
  Cafe,
  LogoGithub,
  LogoLinkedin,
  Golf,
  Mail,
} from "react-ionicons";
import cross_platform from "../assets/imgs/skills/multi-plataform.svg";
import project from "../assets/imgs/skills/project.svg";
import ux_ui from "../assets/imgs/skills/ux-ui.svg";
import { actionButton } from "./analytics";

export const secondaryButton = [
  // {
  //   icon: <Business />,
  //   value: "369labs",
  //   title: "Current job",
  //   url: "https://www.369labstech.com",
  //   externalURL: true,
  // },
  // {
  //   icon: <Globe />,
  //   value: "VYR-X APP",
  //   title: "Last project",
  //   url: "vyrx-app",
  // },
  {
    icon: <Cafe />,
    value: "Stay Focus",
    title: "Last project",
    url: "https://github.com/rafavilomar/stay-focus",
    externalURL: true,
  },
  {
    icon: <Golf />,
    value: "#100DaysOfCode",
    title: "See my progreess",
    url: "https://www.notion.so/100DaysOfCode-by-rafavilomar-41820e3eb1db40c197135ae55248a7d0",
    externalURL: true,
  },
];

export const shortButton = [
  {
    icon: <Mail />,
    title: "Copy rafavilomar@gmail.com",
    externalURL: false,
    onClick: () => navigator.clipboard.writeText("rafavilomar@gmail.com")
  },
  {
    icon: <LogoGithub />,
    title: "Github profile",
    url: "https://github.com/rafavilomar",
    externalURL: true,
    onClick: () => actionButton("Icon button", "Github profile")
  },
  {
    icon: <LogoLinkedin />,
    title: "Linkedin profile",
    url: "https://www.linkedin.com/in/rafavilomar/",
    externalURL: true,
    onClick: () => actionButton("Icon button", "Linkedin profile")
  }
];

export const skills = [
  {
    img: cross_platform,
    value: "Cross-Platform",
  },
  {
    img: project,
    value: "Project Administration",
  },
  {
    img: ux_ui,
    value: "Design UX/UI",
  },
];
