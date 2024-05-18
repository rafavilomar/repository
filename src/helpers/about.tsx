import { LogoDocker, LogoJavascript, LogoNodejs, LogoReact } from "react-ionicons";
import { SiSpringboot, SiMongodb, SiMysql, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql, BiLogoAws, BiLogoJava } from "react-icons/bi";
import { RiJavaLine } from "react-icons/ri";
import { TbBrandMysql } from "react-icons/tb";


export const Experiences = [
  { client: "Stefanini Group", title: "Senior Software Engineer", time: "2023 - Present" },
  { client: "MQA Americas", title: "Full Stack Developer", time: "2021 - 2023" },
  { client: "369labs", title: "Full Stack Developer", time: "2020 - 2021" },
];

export const TechStackList = [
  {icon: <LogoJavascript color="#b9c1d0"/>, text: "JavaScript"},
  {icon: <SiTypescript/>, text: "TypeScript"},
  {icon: <RiJavaLine/>, text: "Java"},
  {icon: <LogoNodejs color="#b9c1d0"/>, text: "NodeJS"},
  {icon: <SiSpringboot/>, text: "SpringBoot"},
  {icon: <SiMongodb/>, text: "MongoDB"},
  {icon: <TbBrandMysql/>, text: "MySQL"},
  {icon: <BiLogoPostgresql/>, text: "PostgreSQL"},
  {icon: <BiLogoAws/>, text: "AWS"},
  {icon: <LogoDocker color="#b9c1d0"/>, text: "Docker"},
  {icon: <LogoReact color="#b9c1d0"/>, text: "ReactJS"},
]
