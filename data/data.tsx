import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const navItem = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#project" },
  { name: "Contact", link: "#contact" },
];
type SocialIcon = {
  link: string;
  icon: React.ReactElement;
};
export const social: SocialIcon[] = [
  {
    link: "https://github.com/Khairatul-bit",
    icon: <FaGithub />,
  },
  {
    link: "https://www.linkedin.com/in/muhammad-khairatul-931357281/",
    icon: <FaLinkedin />,
  },
  {
    link: "https://www.instagram.com/kkhai20/?__pwa=1",
    icon: <FaInstagram />,
  },
];

export const techStack = [
  {
    id: 1,
    name: "Java",
    image: "/java.svg",
  },
  {
    id: 2,
    image: "/typescript.png",
    name: "Typescript",
  },
  {
    id: 32,
    image: "/flutter.svg",
    name: "Flutter",
  },
  {
    id: 4,
    image: "/python.png",
    name: "Python",
  },
  {
    id: 5,
    image: "/laravel.png",
    name: "Laravel",
  },
  {
    id: 6,
    image: "/django.png",
    name: "Django",
  },
  {
    id: 7,
    image: "/postgres.svg",
    name: "Postgres",
  },
  {
    id: 8,
    image: "/Figma.svg",
    name: "Figma",
  },
];

export const experience = [
  {
    id: 1,
    title: "Operation Support Analyst Intern",
    company: " PT Sumber Alfaria Trijaya",
    timeline: "Sep 2025 - Present",
    image: "alfa.jpg",
    description: [
      "Process and compile operational data using Microsoft Excel for daily/weekly reports.",
      "Create and edit presentation materials (PPT) and simple visual content using Canva.",
      "Support the operations team with documentation, administration, and internal coordination."
    ],
  },
  {
    id: 2,
    title: "Multimedia and Design Division",
    company: "FPCI Presuniv",
    timeline: "Aug 2024 - May 2025",
    image: "/fpci.png",
    description: [
      "Responsible for producing visual content for both internal and external organizational needs.",
      "Collaborated with the design team to develop promotional materials for campus events.",
      "Proficient in tools like Canva and graphic design principles to support visual communication.",
    ],
  },
  {
    id: 3,
    title: "Landing Page Builder Intern",
    company: "PT Rencana Sinergi Indonesia - UI/UX Web Development",
    timeline: "Jan 2025 - Apr 2025",
    image: "/rsi.png",
    description: [
      "Designed and developed a product landing page (Kafamilk) with a strong focus on UI and UX.",
      "Applied responsive design principles to improve customer conversion and visual appeal.",
      "Worked remotely with creative and marketing teams to meet campaign goals.",
    ],
  },
  {
    id: 4,
    title: "Media Center and Documentation",
    company: "Educana Community",
    timeline: "Sep 2024 - Mei 2025",
    image: "/ipb.png",
    description: [
      "Produced impactful media materials to maintain a cohesive and professional visual identity for campaigns and organizational activities.",
      "Led the development of a profile video, showcasing the community, its environment, and mission to engage and inform the public.",
      "Enhanced public awareness on disaster education by delivering creative multimedia content aligned with the community's mission to inspire and educate.",
    ],
  },
  {
    id: 5,
    title: "COMPSPHERE",
    company: "PUFA Computing Event", 
    timeline: "Jul 2024 - Nov 2024",
    image: "/comp.png",
    description: [
      "Responsible for the smooth distribution of logistics during the preparation and execution of a university-level tech event.",
      "Managed inventory and supported operational needs throughout the event.",
      "Worked on-site to ensure the availability and security of materials during the event.",
    ],
  },
];

export const projects = [
  {
    type: "web",
    title: "E-Commerce Bakery",
    desc: "This website is a bakery-themed e-commerce platform designed to make it easier for customers to view and order various bread and cake products online.",
    image: "/web-bread.png",
    linkWeb: "https://khairatul-bit.github.io/e-commerce-bakery/",
    linkGithub: "https://github.com/Khairatul-bit/e-commerce-bakery",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    type: "web",
    title: "E-Commerce Nasi Padang",
    desc: "The Nasi Padang Pincuran Tujuah website is a digital platform designed to promote and facilitate customer access to authentic Minangkabau cuisine.",
    image: "/web-naspad.png",
    linkWeb: "https://khairatul-bit.github.io/e-commerce-naspad/",
    linkGithub: "https://github.com/Khairatul-bit/e-commerce-naspad",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    type: "web",
    title: "E-Commerce Kafamilk",
    desc: "Kafamilk's website effectively conveys the product profile of herbal goat milk with a complete herbal combination, transparent nutritional information, and quality assurance (Halal, BPOM).",
    image: "/web-kafamilk.png",
    linkWeb: "https://susukafamilk.com/",
    linkGithub: "",
    stack: ["HTML", "PHP", "JavaScript"],
  },
  {
    type: "web",
    title: "Website Travel",
    desc: "This website provides a complete booking service for all your travel needs in one integrated platform.",
    image: "/web-travel.png",
    linkWeb: "",
    linkGithub: "https://github.com/Khairatul-bit/web-travel",
    stack: ["HTML", "PHP", "JavaScript"],
  },
  {
  "type": "web",
  "title": "Student Grade Prediction Dashboard",
  "desc": "This interactive dashboard visualizes the process of training and testing machine learning models in real-time to predict student grade point average.",
  "image": "/Django-web.png",
  "linkWeb": "",
  "linkGithub": "https://github.com/Khairatul-bit/django-project1",
  "stack": ["Python", "Django", "JavaScript",]
  },
  {
  "type": "web",
  "title": "Student Analytics Dashboard",
  "desc": "This dashboard provides various machine learning-based prediction features to analyze learning behavior and student engagement.",
  "image": "/Django-web2.png",
  "linkWeb": "",
  "linkGithub": "https://github.com/Khairatul-bit/django-timproject",
  "stack": ["Python", "Django", "JavaScript",]
  },
  {
  "type": "web",
  "title": "Intership and Careeer Center",
  "desc": "President University's Internship and Career Center (ICC) connects students with industry partners to support internships and career development.",
  "image": "/icc.png",
  "linkWeb": "",
  "linkGithub": "https://github.com/Khairatul-bit/django-timproject",
  "stack": ["Python", "Django", "Reactjs",]
  },
  {
    type: "mobile",
    title: "Projectify",
    desc: "Projectify is a mobile-based application designed to help students and young professionals manage projects, share work, and build interactive digital portfolios.",
    image: "/mobile.png",
    linkWeb: "",
    linkGithub: "https://github.com/Khairatul-bit/mobile-app",
    stack: ["Flutter", "Dart",],
  },
];

export const videoProject = [
  {
    title: "After Movie Focus Group Discussion 2025",
    company: "FPCI Presuniv",
    link: "https://www.youtube.com/embed/Cxts6Az-S_E",
    desc: "Dokumentasi kegiatan Focus Group Discussion tahun 2025",
    stack: ["Capcut", "Canva"],
  },
  {
    title: "After Movie Focus Group Discussion 2024",
    company: "FPCI Presuniv",
    link: "https://www.youtube.com/embed/-1wvv0ySMHg",
    desc: "Dokumentasi kegiatan Focus Group Discussion tahun 2024",
    stack: ["Capcut", "Canva"],
  },
  {
    title: "Educana Video",
    company: "Educana",
    link: "https://www.youtube.com/embed/wJUg-OSNVU0",
    desc: "Video promosi untuk platform Educana",
    stack: ["Capcut", "Canva",],
  },
];
