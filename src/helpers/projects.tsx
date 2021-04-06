import _369labs__presentation from "../assets/imgs/projects/369labs/369labs-presentation.png";
import _369labs__preview from "../assets/imgs/projects/369labs/369labs-preview.png";
import _369labs_investor from "../assets/imgs/projects/369labs/investor-form.png"
import _369labs_partner from "../assets/imgs/projects/369labs/partner-form.png"

import _social__presentation from "../assets/imgs/projects/social/social-presentation.png";
import _social__preview from "../assets/imgs/projects/social/social-preview.png";
import _social__light1 from "../assets/imgs/projects/social/light1.png";
import _social__light2 from "../assets/imgs/projects/social/light2.png";
import _social__dark1 from "../assets/imgs/projects/social/dark1.png";
import _social__dark2 from "../assets/imgs/projects/social/dark2.png";

export const projectList: project[] = [
  {
    id: "369labs",
    name: "369labs",
    previewImg: _369labs__preview,
    presentationImg: _369labs__presentation,
    category: "Design UI/UX",
    date: "2021",
    live: 'https://www.369labstech.com',
    section: [
      {
        title: "Context",
        image: [_369labs_partner, _369labs_investor],
        col: 1,
        colxl: 1,
        paragraphs: [
          "369labs is a new company that seeks to enter into the development of technological products for companies through web and mobile applications.",
          "At this time they are developing their brand, presence in social networks, website, as well as their first product.",
        ],
      },
      {
        title: "The problem",
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
    id: "social-dashboard",
    name: "Social Dashboard",
    previewImg: _social__preview,
    presentationImg: _social__presentation,
    category: "Design UI/UX",
    date: "2020",
    github: 'https://github.com/rafavilomar/Social-Card-Dashboard',
    live: 'https://social-card-dashboard.vercel.app',
    section: [
      {
        title: "The problem",
        image: [_social__light1, _social__light2, _social__dark1, _social__dark2],
        col: 2,
        colxl: 4,
        paragraphs: [
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione deserunt, at nostrum impedit blanditiis minima facilis expedita tenetur accusantium error, modi sint quaerat sunt nihil repellat. Rerum, corrupti! Necessitatibus, fugit",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione deserunt, at nostrum impedit blanditiis minima facilis expedita tenetur accusantium error, modi sint quaerat sunt nihil repellat. Rerum, corrupti! Necessitatibus, fugit",
        ],
      },
    ],
  }
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
    image?: any[]
    col: number
    colxl: number
    paragraphs: string[]
  }
