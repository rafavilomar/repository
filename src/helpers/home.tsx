import {
  Globe,
  Cafe,
  Business,
  LogoGithub,
  LogoLinkedin,
  Mail,
  Download,
} from "react-ionicons";
import cross_platform from "../assets/imgs/skills/multi-plataform.svg";
import project from "../assets/imgs/skills/project.svg";
import ux_ui from "../assets/imgs/skills/ux-ui.svg";

export const secondaryButton = [
  {
    icon: <Business />,
    value: "369labs",
    title: "Current job",
    url: "https://www.369labstech.com",
    externalURL: true,
  },
  {
    icon: <Globe />,
    value: "Social Card",
    title: "Last project",
    url: "https://social-card-dashboard.vercel.app",
    externalURL: true,
  },
  {
    icon: <Cafe />,
    value: "VYR-X",
    title: "Coding",
    url: "https://vyrx.netlify.app",
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
    icon: <Mail />,
    title: "Contact me",
    url: "mailto:rafavilomar@gmail.com",
    externalURL: true,
  },
  {
    icon: <Download />,
    title: "Download CV",
    url:
      "https://drive.google.com/file/d/1WQQNIG46h532fjv0OfjTvVKkeLhfaXNW/view",
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
