import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import allBirds from "../src/assets/allBirds.png";
import birkFilter from "../src/assets/birkFilter.png";
import CRUD from "../src/assets/CRUD.png";
import fuRN from "../src/assets/fuRN.png";
import fayWuCV from "../src/assets/FayWuCV.pdf";

export const links = [
  // { id: nanoid(), href: "#home", text: "home" },

  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-12 w-12 text-slate-400" />,
    text: "Advanced command of React, creating responsive and robust front-end applications with a strong emphasis on component-based architecture. Tools: React-dom/Router-dom, Redux, Toastify.",
  },

  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-12 w-12 text-slate-400" />,
    text: "Possessing proficiency in JavaScript, specializing in constructing dynamic and interactive web applications, prioritizing fluid user interactions and optimal functionality.",
  },
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-12 w-12 text-slate-400" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal UX/UI.",
  },
  {
    id: nanoid(),
    title: "Redux",
    icon: <SiRedux className="h-12 w-12 text-slate-400" />,
    text: "Proficient in Redux, ensuring efficient state management and streamlined data flow in complex front-end applications.",
  },
  {
    id: nanoid(),
    title: "Tailwind",
    icon: <SiTailwindcss className="h-12 w-12 text-slate-400" />,
    text: "Skilled at designing responsive and visually captivating user interfaces through the use of utility-first CSS principles.",
  },
  {
    id: nanoid(),
    title: "NextJs",
    icon: <TbBrandNextjs className="h-12 w-12 text-slate-400" />,
    text: "Proficient in Next.js, I leverage its capabilities to create dynamic and engaging web experiences.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: CRUD,
    url: "https://crud-review-app-fwudesign.netlify.app/",
    github: "https://github.com/Jpcjo/crud-review-app",
    title: "CRUD Review",
    tools:
      "HTML&CSS | Javascript | React/React-Router-Dom | Redux | Tailwind | Toastify",
    text: "This CRUD app for managing user reviews is designed to enable the creation, modification, and deletion of personalized reviews based on individual login credentials. Built from scratch, no pre-builds.  ",
    highlights:
      "Tabs | copy to clipboard | local-time-based dynamic business hour formats | user log-in & log-out & registration | local storage user details & inputs | review filter | pagination | image slides | modals",
  },
  {
    id: nanoid(),
    img: allBirds,
    url: "https://singleproduct-page-fwudesign.netlify.app/",
    github: "https://github.com/Jpcjo/SingleProudct-Page-Component",
    title: "Product Page Component",
    tools: "HTML&CSS | Javascript | React | Redux | Tailwind",
    text: "Built from scratch, no pre-builds. This project focuses on a sophisticated sneaker product page, encompassing various interactive components, including detailed product information, Q&A features, customer reviews, and additional functionalities. ",
    highlights:
      "carousel | modal slides | products selection & display  | Q&A accordion | product card slides | review search & filter functions | pagination",
  },
  {
    id: nanoid(),
    img: birkFilter,
    url: "https://birk-products-filter-fwudesign.netlify.app/",
    github: "https://github.com/Jpcjo/birk-products-filter",
    title: "Products Filter Component",
    tools: "HTML&CSS | Javascript | React | Redux | Tailwind ",
    text: "Built from scratch, no pre-builds. Introducing this dynamic React component tailored for product filtering, empowering users to easily navigate and refine their footwear choices with precision and efficiency. ",
    highlights:
      "marqueen | sidebar | dynamic height-calculation collapses | multiple-sorting filters | price-input restriction | clear function | pagination ",
  },

  {
    id: nanoid(),
    img: fuRN,
    url: "https://furnu-store-fwudesign.netlify.app/",
    github: "https://github.com/Jpcjo/FurNu-Store-e-commerce-",
    title: "Furniture Store (Add-Ons)",
    tools:
      "HTML&CSS | Javascript | React/React-Router-Dom | Redux | Tailwind | DaisyUI | Toastify | Axios",
    text: "Enhance John Smilga's e-commerce project by incorporating dynamic functionalities and introducing innovative design elements to showcase and elevate the overall project accessibility and UX/UI.",
    highlights:
      "hamburger drop-down | nav search bar | retractable navbar | Quick Add | bounce cart button | pop-up cart sidebar delete / modify / remove functions & express check-out | collapse | about us ",
  },
];

export { fayWuCV };
