import _369labs__presentation from "../assets/imgs/projects/369labs/369labs-presentation.png";
import _369labs__preview from "../assets/imgs/projects/369labs/369labs-preview.png";

import _social__presentation from "../assets/imgs/projects/social/social-presentation.png";
import _social__preview from "../assets/imgs/projects/social/social-preview.png";

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
        title: "The problem",
        image: _369labs__presentation,
        paragraphs: [
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione deserunt, at nostrum impedit blanditiis minima facilis expedita tenetur accusantium error, modi sint quaerat sunt nihil repellat. Rerum, corrupti! Necessitatibus, fugit",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione deserunt, at nostrum impedit blanditiis minima facilis expedita tenetur accusantium error, modi sint quaerat sunt nihil repellat. Rerum, corrupti! Necessitatibus, fugit",
        ],
      },
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
        image: _social__presentation,
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
    dribbble?: string,
    github?: string,
    live?: string
  }
  
  type sectionProject = {
    title: string
    image: any
    paragraphs: string[]
  }
