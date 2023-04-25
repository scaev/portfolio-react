import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaJs,
  FaSass,
  FaFigma,
  FaPython,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaBootstrap,
} from "react-icons/fa";
import { DiMaterializecss } from "react-icons/di";
import {
  SiBlender,
  SiMongodb,
  SiTypescript,
  SiMui,
  SiAmazonaws,
  SiAdobephotoshop,
  SiPostgresql,
} from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import portfolio from "./assets/portfolio.jpg";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";
import work7 from "./assets/work7.png";

export const navLinks = ["home", "about", "skills", "projects", "contact"];

export const socialIcons = [
  {
    icon: <FaGithub />,
    href: "https://github.com/scaev",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/scaevolas/",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/m-kaan-karadag/",
  },
  {
    icon: <BsTwitter />,
    href: "https://twitter.com/kenkara_",
  },
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Kaan Karadag",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+16475546296",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "kenkaraa@gmail.com",
  },
];

export const icons = [
  {
    icon: <FaCss3 />,
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: <FaHtml5 />,
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: <FaJs />,
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: <SiMongodb />,
    href: "https://www.mongodb.com",
  },
  {
    icon: <FaNodeJs />,
    href: "https://nodejs.org/en/docs/",
  },
  {
    icon: <FaPython />,
    href: "https://www.python.org/doc/",
  },
  {
    icon: <FaFigma />,
    href: "https://www.figma.com",
  },
  {
    icon: <FaReact />,
    href: "https://legacy.reactjs.org",
  },
  {
    icon: <FaSass />,
    href: "https://sass-lang.com",
  },
  {
    icon: <SiTypescript />,
    href: "https://www.typescriptlang.org",
  },
  {
    icon: <SiBlender />,
    href: "https://www.blender.org",
  },
  {
    icon: <SiMui />,
    href: "https://mui.com",
  },
  {
    icon: <FaBootstrap />,
    href: "https://getbootstrap.com",
  },
  {
    icon: <DiMaterializecss />,
    href: "https://materializecss.com/getting-started.html",
  },
  {
    icon: <SiAmazonaws />,
    href: "https://aws.amazon.com",
  },
  {
    icon: <SiAdobephotoshop />,
    href: "https://www.adobe.com/ca/products/photoshop.html",
  },
];

export const workNavs = ["All", "Web", "App", "Design"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "71 Godstone Road, North York , Toronto",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "kenkaraa@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+1-647-554-6296",
  },
];

export const experiences = [
  {
    id: 1,
    year: "2022-2023",
    position: "Full-Stack Development",
    company: "General Assembly",
  },
  {
    di: 2,
    year: "2020-2022",
    position: "Full-Stack Development",
    company: "Udemy, FreeCodeCamp ",
  },
  {
    id: 3,
    year: "2019-2022",
    position: "R&D Engineer – Mechanical Design",
    company: "IQ Elevators Inc.",
  },
  {
    id: 4,
    year: "2017-2019",
    position: "R&D Design Engineer ",
    company: "Unlu Agriculture",
  },
];
export const finishes = [
  {
    id: 1,
    number: "3+",
    itemName: "Years Of Experience",
  },
  {
    id: 2,
    number: "1K+",
    itemName: "Coffee",
  },
  {
    id: 3,
    number: "65+",
    itemName: "Designed Projects",
  },
];

export const workImages = [
  {
    id: 1,
    img: work1,
    name: "Code Mate",
    category: "web",
    github: "https://github.com/scaev/codeMate",
    deployed: "https://codemate-wheat.vercel.app",
  },
  {
    id: 2,
    img: work2,
    name: "Time Capsule",
    category: "app",
    github: "https://github.com/scaev/TimeCapsule",
    deployed: "https://timecapsule.herokuapp.com",
  },
  {
    id: 3,
    img: work3,
    name: "eAuctions",
    category: "app",
    github: "https://github.com/scaev/eAuctions",
    deployed: "https://github.com/scaev/eAuctions",
  },
  {
    id: 4,
    img: work4,
    name: "Event Library",
    category: "app",
    github: "https://github.com/scaev/EventLibrary",
    deployed: "https://github.com/scaev/EventLibrary",
  },
  {
    id: 5,
    img: work5,
    name: "Old Portfolio",
    category: "app",
    github: "https://kaankara.dev",
    deployed: "https://kaankara.dev",
  },
  {
    id: 6,
    img: work6,
    name: "Slot Game",
    category: "design",
    github: "https://github.com/scaev/Slot-Machine",
    deployed: "https://scaev.github.io/Slot-Machine/",
  },
  {
    id: 7,
    img: work7,
    name: "myYoutube",
    category: "design",
    github: "https://github.com/scaev/my_youtube",
    deployed: "https://scaev.github.io/my_youtube/",
  },
];
