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

export const projectList: project[] = [
  {
    id: "369labs",
    name: "369labs",
    previewImg: _369labs__preview,
    presentationImg: _369labs__presentation,
    category: "Design UI and web developer",
    date: "2021",
    live: 'https://www.369labstech.com',
    section: [
      {
        title: "Context",
        image: [
          {src: _369labs_partner, alt: 'partner' },
          {src: _369labs_investor, alt: 'investor' }
        ],
        col: 1,
        colxl: 1,
        paragraphs: [
          "369labs is a new company that seeks to enter into the development of technological products for companies through web and mobile applications.",
          "At this time they are developing their brand, presence in social networks, website, as well as their first product.",
        ],
      },
      {
        title: "The Problem",
        // image: [_369labs_partner, _369labs_investor],
        col: 1,
        colxl: 1,
        paragraphs: [
          "A platform or website was required to present the brand as well as its products. This site should also serve as a form of contact, clients, distributors and investors who wanted to be part of and join the project.",
        ],
      },
      {
        title: "The Solution",
        // image: [_369labs_partner, _369labs_investor],
        col: 1,
        colxl: 1,
        paragraphs: [
          "A landing page was built. It should serve to convert potential distributors and investors into partners of the brand and work together with the company.",
          "The landing page has several forms according to the objectives sought, it has a section of products and technologies applied by the development team.",
        ],
      }
    ],
  },
  {
    id: "vyrx-app",
    name: "VYR-X APP",
    previewImg: _vyrx_app__preview,
    presentationImg: _vyrx_app__presentation,
    category: "Design UI/UX",
    date: "2021",
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
          {src: _vyrx_app_sketch_home, alt: 'home', class:'vyrx_app-sketchs__home' },
          {src: _vyrx_app_sketch_reports, alt: 'reports', class:'img' },
          {src: _vyrx_app_sketch_profile, alt: 'profile', class:'img' }
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
          {src: _vyrx_app_login, alt: 'login' },
          {src: _vyrx_app_home, alt: 'home' },
          {src: _vyrx_app_map, alt: 'map' },
          {src: _vyrx_app_events, alt: 'events' },
          {src: _vyrx_app_tasks, alt: 'tasks' },
          {src: _vyrx_app_supervision, alt: 'supervision' },
          {src: _vyrx_app_profile, alt: 'profile' },
          {src: _vyrx_app_round, alt: 'round' },
          {src: _vyrx_app_sos, alt: 'sos' }
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
  // {
  //   id: "social-dashboard",
  //   name: "Social Dashboard",
  //   previewImg: _social__preview,
  //   presentationImg: _social__presentation,
  //   category: "Design UI/UX",
  //   date: "2020",
  //   github: 'https://github.com/rafavilomar/Social-Card-Dashboard',
  //   live: 'https://social-card-dashboard.vercel.app',
  //   section: [
  //     {
  //       title: "The problem",
  //       image: [
  //         {src: _social__light1, alt: 'partner' },
  //         {src: _social__light2, alt: 'investor' },
  //         {src: _social__dark1, alt: 'partner2' },
  //         {src: _social__dark2, alt: 'investor2' }
  //       ],
  //       col: 2,
  //       colxl: 4,
  //       paragraphs: [
  //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione deserunt, at nostrum impedit blanditiis minima facilis expedita tenetur accusantium error, modi sint quaerat sunt nihil repellat. Rerum, corrupti! Necessitatibus, fugit",
  //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione deserunt, at nostrum impedit blanditiis minima facilis expedita tenetur accusantium error, modi sint quaerat sunt nihil repellat. Rerum, corrupti! Necessitatibus, fugit",
  //       ],
  //     },
  //   ],
  // }
]

export type project = {
    id: string
    name: string
    previewImg: any
    presentationImg: any
    category: string
    date: string
    section: sectionProject[]
    behance?: string,
    github?: string,
    live?: string
  }
  
  type sectionProject = {
    title: string
    image?: images[]
    col: number
    colxl: number
    paragraphs: string[]
  }

  type images = {
    src: any
    alt: string
    class?: string
  }