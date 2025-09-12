import { tiledLights } from "three/examples/jsm/tsl/lighting/TiledLightsNode.js";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  shopify,
  docker,
  meta,
  starbucks,
  tesla,
  carrent,
  threejs,
  java,
  kubernetes,
  jobit,
  tripguide,
  SpringBoot,
} from "../assets";
import { color } from "framer-motion";

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
    id:"tech",
    title:"Tech",
  },

  {
    id:"mywork",
    title:"Projects",
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
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI/ML Model Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
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
    name: "Vite",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name:"Spring Boot",
    icon:SpringBoot,
  }
];

const experiences = [
  {
    title: "Image classification of cats and dog",
    company_name: "College Project",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2025 - August 2025",
    points: [
      "Developing and maintaining web applications using Stream lit and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "EzyTranship: Web application for booking commercial vehicles",
    company_name: "Internship Project",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - july 2025",
    points: [
      "Developing and maintaining the web applications using javascript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "File Hider App using Java SMTP JDBC & Encryption via OTP",
    company_name: "College Project",
    icon: shopify,
    iconBg: "#383E56",
    date: "Aug 2025 - Sep 2025",
    points: [
      "Designed and developed a Command Line application in Java for securely hiding and managing files.",
      "Implemented SMTP functionality to enable secure Email OTP Verification For Login and Signup with the help of javax mail.",
      "Using JDBC for database connectivity to handle files operation i.e show, hidden, open, unide ",
      "Applied encryption techniques to protect sensitive files and ensure secure storage.",
      "Tested and optimized the application for reliability, performance, and security."
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Satwik proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Satwik does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Satwik optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Commercial Vehicle: A Web based booking system",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "HTML5, CSS3, Javascript6",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/satwik12dev/BookingWebApplication.git",
  },
  {
    name: "Cat and Dog Image Classification Using CNN & DL",
    description:
      "It is an AI model that automatically identifies whether an image contains a cat or a dog. It uses machine learning techniques to classify images with high accuracy.",
      tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Convolution Neural Netwok ",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/satwik12dev/Image-Classification-of-cat--and-dog-using-CNN-DL.git",
  },
  {
    name: "File Hider App using Java SMTP JDBC & Encryption via OTP",
    description:
      "A Java-based Command Line application that securely hides, encrypts, and manages files. Integrates SMTP for secure notifications and uses MySQL for data storage, with Maven for project management.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "SMTP",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name:"Maven",
        color : "white-text-gradient",
      },
      {
        name:"Database Management System",
        color:"green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/satwik12dev/File-Hider.git",
},
];

export { services, technologies, experiences, testimonials, projects };