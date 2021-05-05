import {
  Globe,
  Cafe,
  LogoGithub,
  LogoLinkedin,
  LogoBehance,
  LogoInstagram,
} from "react-ionicons";
import cross_platform from "../assets/imgs/skills/multi-plataform.svg";
import project from "../assets/imgs/skills/project.svg";
import ux_ui from "../assets/imgs/skills/ux-ui.svg";

export const secondaryButton = [
  // {
  //   icon: <Business />,
  //   value: "369labs",
  //   title: "Current job",
  //   url: "https://www.369labstech.com",
  //   externalURL: true,
  // },
  {
    icon: <Globe />,
    value: "VYR-X APP",
    title: "Last project",
    url: "vyrx-app",
  },
  {
    icon: <Cafe />,
    value: "Stay Focus",
    title: "Coding",
    url: "https://github.com/rafavilomar/stay-focus",
    externalURL: true,
  },
];

export const shortButton = [
  {
    icon: <LogoGithub />,
    title: "Github profile",
    url: "https://github.com/rafavilomar",
    externalURL: true,
  },
  {
    icon: <LogoLinkedin />,
    title: "Linkedin profile",
    url: "https://www.linkedin.com/in/rafavilomar/",
    externalURL: true,
  },
  {
    icon: <LogoBehance />,
    title: "Behance profile",
    url: "https://www.behance.net/rafaelvilomar",
    externalURL: true,
  },
  // {
  //   icon: <Download />,
  //   title: "Download CV",
  //   url:
  //     "https://drive.google.com/file/d/1WQQNIG46h532fjv0OfjTvVKkeLhfaXNW/view",
  //   externalURL: true,
  // },
  {
    icon: <LogoInstagram />,
    title: "Instagram profile",
    url:
      "https://www.instagram.com/rafavilomar/",
    externalURL: true,
  },
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
