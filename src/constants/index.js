import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  ceeri,
  devrev,
  onfinance,
  providence,
  pricely,
  traveladvisor,
  preview,
  threejs,
  golang,
  nextjs,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Golang",
    icon: golang,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Python",
    icon: python,
  }
];

const experiences = [
  {
    title: "Software Development Engineer",
    company_name: "OnFinance.ai",
    icon: onfinance,
    iconBg: "#383E56",
    date: "September 2023 - October 2023",
    points: [
      "Built the landing pages for the company's website and its solutions and developed the backend for the product APIs.",
      "ReactJS and TailwindCSS were the front-end frameworks and the backend tech stack was based on Golang.",
      "IMPACT: Landing pages are the first POC between the customers and the company. APIs formed the basic communication between the front-end and the back-end. ",
    ],
  },
  {
    title: "Member of Technical Staff Intern",
    company_name: "DevRev Cloud India Pvt. Ltd.",
    icon: devrev,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - July 2023",
    points: [
      "Worked in the 'Product Led user Growth (PLuG)' widget team (first line of support between DevRev and its users).",
      "Deployed three fully functional 'snap-ins' (extensions on DevRev framework) on top of PLuG: 'Book a demo' (Rego), 'Contact us form' and 'UserExperior' (both JavaScript based).",
      "Used Golang to include user-type of customer (anonymous or identified) in the backend and data dump metric data of 'snap-kit actions' or UI actions on snap-ins for analytics.",
      "Captured user browser data and online status from the widget using Websockets, ReactJS and Cypress for testing.",
      "IMPACT: PLuG is first line of support, so my snap-ins came into direct contact with the customers. User type of customers helped validation of users and user browser data helped dynamic, customized user experience of PLuG widget."
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company_name: "Providence India",
    icon: providence,
    iconBg: "#383E56",
    date: "May 2022 - July 2022",
    points: [
      "Part of the CRCA team and I worked on databases.",
      "Normalization of databases using SQL Server Management Studio (SSMS) to reduce data redundancy and better structure.",
      "Optimized stored procedures to bring down the time of execution from 30-40s to 3-5s (~10 times improvement).",
      "Stored secrets in Azure Key Vault using C# and Dotnet.",
      "IMPACT: Organized database structure and performed normalizations to improve loading time. Stored procedure optimization speeded up query execution time."
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "CSIR-CEERI Pilani",
    icon: ceeri,
    iconBg: "#E6DEDD",
    date: "May 2021 - July 2021",
    points: [
      "Part of a team to develop real-time solution to detecting diseases in fruits.",
      "Used Generative Adversarial Networks (GANs) to augment datasets in preparation for model training.",
      "Project: Design a system to detect diseases in fruits moving on a conveyer belt in real-time.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Pricely",
    description:
      "Web scraper built using , TypeScript and TailwindCSS that takes Amazon product URLs and displays the images, title, description and prices obtained by scraping the Amazon page. Track the updates with emails using cron jobs.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "orange-text-gradient"
      }
    ],
    image: pricely,
    source_code_link: "https://github.com/daredevil0905/pricely",
  },
  {
    name: "Travel Advisor",
    description:
      "A Google Maps companion created using ReactJS, MaterialUI and RapidAPI displays a map with restaurants and attractions nearby. Filter functionality based on ratings available. Automatic updates to list based on map location",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "RapidAPI",
        color: "green-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "pink-text-gradient",
      },
    ],
    image: traveladvisor,
    source_code_link: "https://github.com/daredevil0905/travel-advisor",
  },
  {
    name: "Chess Membership",
    description:
      "Based on a database, automate FIDE/AICF ID (unique IDs) verification ( active/inactive ) by making an API call to the FIDE website using Golang. Generate the MCA ID by using the unique FIDE/AICF ID as the query parameter. Save human verification efforts.",
    tags: [
      {
        name: "Golang",
        color: "blue-text-gradient",
      },
      {
        name: "Excelize",
        color: "green-text-gradient",
      }
    ],
    image: preview,
    source_code_link: "https://github.com/daredevil0905/chess-membership-status",
  },
  {
    name: "Chess Delay",
    description:
      "Implement delay in live chess broadcasting using Python. Use tempfile and ftplib libraries to upload the chess moves file to the live FTP server after the required delay as input by user. Automate the process eliminating human intervention.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "ftplib",
        color: "green-text-gradient",
      },
      {
        name: "tempfile",
        color: "pink-text-gradient"
      }
    ],
    image: preview,
    source_code_link: "https://github.com/daredevil0905/chess-delay",
  },
];

export { services, technologies, experiences, testimonials, projects };
