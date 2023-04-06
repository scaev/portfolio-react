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

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [
  <FaGithub />,
  <FaInstagram />,
  <FaLinkedin />,
  <BsTwitter />,
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
  <FaCss3 />,
  <FaHtml5 />,
  <FaJs />,
  <SiMongodb />,
  <FaNodeJs />,
  <FaPython />,
  <FaFigma />,
  <FaReact />,
  <FaSass />,
  <SiTypescript />,
  <SiBlender />,
  <SiMui />,
  <FaBootstrap />,
  <DiMaterializecss />,
  <SiAmazonaws />,
  <SiAdobephotoshop />,
];

export const workImages = [
  {
    id: 1,
    img: work1,
    name: "Slot Game",
    category: "web",
  },
  {
    id: 2,
    img: work2,
    name: "Event Library",
    category: "app",
  },
  {
    id: 3,
    img: work3,
    name: "eAuctions",
    category: "app",
  },
  {
    id: 4,
    img: work4,
    name: "Time Capsule",
    category: "app",
  },
  {
    id: 5,
    img: work5,
    name: "Code Mate",
    category: "app",
  },
  {
    id: 6,
    img: work6,
    name: "Old Portfolio",
    category: "design",
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
