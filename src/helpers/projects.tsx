import _369labs__presentation from "../assets/imgs/projects/369labs/369labs-presentation.png";
import _369labs__preview from "../assets/imgs/projects/369labs/369labs-preview.png";
import _369labs_investor from "../assets/imgs/projects/369labs/investor-form.png"
import _369labs_partner from "../assets/imgs/projects/369labs/partner-form.png"

import _vyrx_app__presentation from "../assets/imgs/projects/vyrx_app/presentation.jpg";
import _vyrx_app__preview from "../assets/imgs/projects/vyrx_app/preview.jpg";
import _vyrx_app_home from "../assets/imgs/projects/vyrx_app/views/HOME.jpg"
import _vyrx_app_events from "../assets/imgs/projects/vyrx_app/views/EVENTS.jpg"
import _vyrx_app_login from "../assets/imgs/projects/vyrx_app/views/LOGIN.jpg"
import _vyrx_app_map from "../assets/imgs/projects/vyrx_app/views/MAP.jpg"
import _vyrx_app_profile from "../assets/imgs/projects/vyrx_app/views/PROFILE.jpg"
import _vyrx_app_round from "../assets/imgs/projects/vyrx_app/views/ROUND.jpg"
import _vyrx_app_sos from "../assets/imgs/projects/vyrx_app/views/SOS.jpg"
import _vyrx_app_supervision from "../assets/imgs/projects/vyrx_app/views/SUPERVISION.jpg"
import _vyrx_app_tasks from "../assets/imgs/projects/vyrx_app/views/TASKS.jpg"
import _vyrx_app_sketch_home from "../assets/imgs/projects/vyrx_app/sketchs/home.jpeg"
import _vyrx_app_sketch_reports from "../assets/imgs/projects/vyrx_app/sketchs/reports.jpeg"
import _vyrx_app_sketch_profile from "../assets/imgs/projects/vyrx_app/sketchs/profile.jpeg"

import _stay_focus__preview from '../assets/imgs/projects/stay_focus/preview.png'
import _stay_focus__presentation from '../assets/imgs/projects/stay_focus/presentation.png'
import _stay_focus__splash_dark from '../assets/imgs/projects/stay_focus/views/SPLASH (dark).png'
import _stay_focus__splash from '../assets/imgs/projects/stay_focus/views/SPLASH.png'
import _stay_focus__home from '../assets/imgs/projects/stay_focus/views/HOME.png'
import _stay_focus__home_dark from '../assets/imgs/projects/stay_focus/views/HOME (dark).png'
import _stay_focus__settings from '../assets/imgs/projects/stay_focus/views/SETTINGS.png'
import _stay_focus__settings_dark from '../assets/imgs/projects/stay_focus/views/SETTINGS (dark).png'
import _stay_focus__list from '../assets/imgs/projects/stay_focus/views/SONGS LIST.png'
import _stay_focus__listh_dark from '../assets/imgs/projects/stay_focus/views/SONGS LIST (dark).png'
import _stay_focus__theme from '../assets/imgs/projects/stay_focus/views/THEME.png'
import _stay_focus__theme_dark from '../assets/imgs/projects/stay_focus/views/THEME (dark).png'

import _chatting__presentation from "../assets/imgs/projects/chatting/chatting-presentation.png";

import microservices__presentation from "../assets/imgs/projects/microservices/microservices-presentation.png";
import microservice__purchase_flow from "../assets/imgs/projects/microservices/purchase_flow.png";
import microservice__login_flow from "../assets/imgs/projects/microservices/login_flow.png";

export const projectList: project[] = [
  {
    id: "chatting",
    name: "Chatting",
    description: "Chatting is room to connect people on a global chat. Every one will be able to talk to every online users with just an username.",
    previewImg: _chatting__presentation,
    presentationImg: _chatting__presentation,
    category: "Full-Stack",
    role: ["Full-Stack"],
    date: "2022",
    live: 'https://chatting-frontend.vercel.app/',
    github: "https://github.com/rafavilomar/chatting-backend",
    tools: ["TypeScript", "ReactJS", "NodeJS", "MongoDB", "Socket.io", "Docker"],
    section: [
      {
        image: [{ src: _chatting__presentation, alt: 'General Diagram' }],
        title: "About",
        paragraphs: [
          "Chatting is room to connect people on a global chat. Every one will be able to talk to every online users with just an username and password.",
          "This project is using Socket to mantain a real time communication between client (ReactJS) and server (NodeJS)."
        ],
        col: 1,
        colxl: 1,

      }
    ]
  },
  {
    id: "springboot-microservices",
    name: "SpringBoot Microservices",
    description: "An example of how to implement a microservice architecture based on Java technologies. The purpose is to show how I would handle different kind of communications for microservice looking for better performance and the perfect tools depending on the context.",
    previewImg: null,
    presentationImg: microservices__presentation,
    github: "https://github.com/rafavilomar/microservices-java",
    category: "Backend",
    role: ["Backend Developer"],
    date: "2024",
    tools: ["SpringBoot", "PostgreSQL", "Kafka", "gRPC", "Eureka", "Docker", "Spring Security", "Spring Gateway"],
    section: [
      {
        image: [{ src: microservices__presentation, alt: 'General Diagram' }],
        title: "About",
        paragraphs: [
          "This is just an example of how to implement a microservice architecture based on Java technologies. The purpose is to show how I would handle different kind of communications for microservice looking for better performance and the perfect tools depending on the context.",
          "This is not a product or application itself, but just a showcase of how Spring technologies could be implemented."
        ],
        col: 1,
        colxl: 1
      },
      {
        title: "Modules and Microservices",
        col: 1,
        colxl: 1,
        paragraphs: [],
        list: {
          elements: [
            "Api Gateway: It's the unique entry point for all users to the system. Use Spring Gateway to redirect all requests to the necessary microservice.",
            "Common: Consist of different classes and services necessary for many microservices. It's used to avoid code duplication and can be imported as a dependency from any microservice.",
            "Customer: Handle all customer and payment method information.",
            "Docs: Contains all documentation and images used for any Design Doc.",
            "Email Notification: Dedicated to all user's notification trough email. It isn't connected to API Gateway and use Kafka to communicate with other microservices.",
            "Eureka Server: Use Spring Cloud Netflix Eureka to act like a discovery service and register all running microservice.",
            "Loyalty: Handle all benefits for frequent customers.",
            "Product: Handle product inventory classified by categories.",
            "Security: Handle all service to create and validate JWT tokens, users, roles and permissions.",
            "Shopping: Perform basic services for shopping modules like purchase."
          ]
        }
      },
      {
        image: [{ src: microservice__purchase_flow, alt: "Purchase Flow" }],
        title: "Purchase Flow - Featured feature",
        col: 1,
        colxl: 1,
        paragraphs: [
          "Each purchase needs to handle product inventory, loyalty points and email notifications. So, it's necessary to use Grpc and Kafka to microservices interactions from a new microservice called Shopping."
        ],
        list: {
          title: "The goals for this feature are:",
          elements: [
            "Add a new microservice Shopping.",
            "Use grpc and kafka for microservices communication.",
            "Validate inventory and lot points.",
            "Send email notification."
          ]
        },
        learnMore: "https://github.com/rafavilomar/microservices-java/blob/main/docs/features/purchase_flow.md"
      },
      {
        image: [{ src: microservice__login_flow, alt: "Purchase Flow" }],
        title: "Login and Privileges Validations - Featured feature",
        col: 1,
        colxl: 1,
        paragraphs: [
          "I've been implemented Spring Security and JWT to handle login workflow and validate access to public and private resources.",
        ],
        list: {
          title: "The goals for this feature are:",
          elements: [
            "Handle access token with limited time to be used.",
            "Handle refresh token flow.",
            "Add authentication and authorization filters."
          ]
        },
        learnMore: "https://github.com/rafavilomar/microservices-java/blob/main/docs/features/implement_jwt.md"
      }
    ]
  },
  {
    id: "vyrx-app",
    name: "VYR-X APP",
    tools: ['Figma'],
    previewImg: _vyrx_app__preview,
    presentationImg: _vyrx_app__presentation,
    description: "The VYR-X APP mobile application was released with inconsistencies in the design and without some of the main functionalities with which it should have.",
    category: "Design UI/UX",
    date: "2021",
    role: ['Designer UI/UX'],
    behance: 'https://www.behance.net/gallery/117535947/VYR-X-APP',
    section: [
      {
        title: "About",
        col: 2,
        colxl: 4,
        paragraphs: [
          "The 369labs development group needed a redesign of the mobile application for their VYR-X APP product.",
          "VYR-X APP, a multiplatform tool for supervision, monitoring and statistical monitoring of the security operations of private companies and/or Private Security companies.",
        ],
      },
      {
        title: "The Problem",
        image: [
          { src: _vyrx_app_sketch_home, alt: 'home', class: 'vyrx_app-sketchs__home' },
          { src: _vyrx_app_sketch_reports, alt: 'reports', class: 'img' },
          { src: _vyrx_app_sketch_profile, alt: 'profile', class: 'img' }
        ],
        col: 2,
        colxl: 4,
        paragraphs: [
          "The VYR-X APP mobile application was released with inconsistencies in the design and without some of the main functionalities with which it should have.",
          "User experience was negatively affected when trying to navigate the application, fill out forms, and view information about locations and other users.",
        ],
      },
      {
        title: "The Solution",
        image: [
          { src: _vyrx_app_login, alt: 'login' },
          { src: _vyrx_app_home, alt: 'home' },
          { src: _vyrx_app_map, alt: 'map' },
          { src: _vyrx_app_events, alt: 'events' },
          { src: _vyrx_app_tasks, alt: 'tasks' },
          { src: _vyrx_app_supervision, alt: 'supervision' },
          { src: _vyrx_app_profile, alt: 'profile' },
          { src: _vyrx_app_round, alt: 'round' },
          { src: _vyrx_app_sos, alt: 'sos' }
        ],
        col: 2,
        colxl: 4,
        paragraphs: [
          "We take as a basis the previous version of VYR-X APP, views, function and color palette to make the new version.",
          "We have analyzedthe flow of actions and views that the user goes through in order to reduce the number of steps that must be taken to perform and access the main functionalities.",
          "During the development of this version, all those functionalities that were not included in the previous version were considered, such as: event calendar, task manager, location management, intuitive SOS alert, and others."
        ],
      }
    ],
  },
  {
    id: "stay-focus",
    tools: ['Figma', 'React native', 'Expo'],
    role: ['Designer', 'Mobile developer'],
    name: "Stay Focus",
    previewImg: _stay_focus__preview,
    presentationImg: _stay_focus__presentation,
    description: "Stay Focus is a mobile application to study or concentrate on a task, the application is based on the Pomodoro study method.",
    category: "Design UI, Mobile App",
    date: "2021",
    behance: 'https://www.behance.net/gallery/118332645/Stay-Focus',
    github: 'https://github.com/rafavilomar/stay-focus',
    section: [
      {
        title: "About",
        col: 2,
        colxl: 4,
        paragraphs: [
          "Stay Focus is a mobile application to study or concentrate on a task, the application is based on the Pomodoro study method.",
          "In this way the user can start work and study sessions, followed by short breaks and a long break. You can set how long each session will last, as well as additional features like theme change and background music.",
        ],
      },
      {
        title: "Pomodoro",
        image: [
          { src: _stay_focus__splash, alt: 'splash' },
          { src: _stay_focus__home, alt: 'home' },
          { src: _stay_focus__settings, alt: 'settings' },
          { src: _stay_focus__theme, alt: 'theme' },
          { src: _stay_focus__list, alt: 'songs list' }
        ],
        col: 2,
        colxl: 4,
        paragraphs: [
          "Pomodor is a popular time management method. It consists of frequent work sessions with short breaks, thus maintaining concentration and avoiding mental fatigue."
        ],
      },
      {
        title: "Dark theme",
        col: 2,
        colxl: 4,
        paragraphs: [
          "For all lovers of dark theme. users can switch between light and dark theme, or can choose \"Auto\" option.",
          "With the \"Auto\" option activated, the theme will adapt to the time of the device, a light theme during the day and a dark theme at night."
        ],
      },
      {
        title: "Music",
        image: [
          { src: _stay_focus__splash_dark, alt: 'splash dark' },
          { src: _stay_focus__home_dark, alt: 'home dark' },
          { src: _stay_focus__settings_dark, alt: 'settings dark' },
          { src: _stay_focus__theme_dark, alt: 'theme dark' },
          { src: _stay_focus__listh_dark, alt: 'songs list dark' }
        ],
        col: 2,
        colxl: 4,
        paragraphs: [
          "Many of us stayed and worked while listening to background music. That is why Stay Focus has a list of songs chosen so that they can be listened to without disturbing the user."
        ],
      }
    ],
  }
]

export type project = {
  id: string
  name: string
  description?: string
  previewImg: any
  presentationImg: any
  category: string
  date: string
  section: sectionProject[]
  behance?: string,
  github?: string,
  live?: string,
  role: string[],
  tools: string[]
}

export type sectionProject = {
  title: string
  image?: images[]
  col: number
  colxl: number
  paragraphs: string[]
  learnMore?: string,
  list?: list
}

type images = {
  src: any
  alt: string
  class?: string
}

type list = {
  title?: string;
  elements: string[]
}