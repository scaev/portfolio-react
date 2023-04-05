import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaDribbble, FaInstagram, FaLinkedin } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import portfolio from "./assets/portfolio.jpg"
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <FaDribbble />,
  <FaInstagram />,
  <FaLinkedin />,
  <BsMedium />
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Kaan Karadag"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+16475546296"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "kenkaraa@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <SiTypescript />, <FaReact />, <FaNodeJs />, <FaSass />, <FaFigma />]


export const workImages = [
  {
    id: 1,
    img: work1,
    name: "Slot Game",
    category: "web"
  },
  {
    id: 2,
    img: work2,
    name: "Event Library",
    category: "app"
  },
  {
    id: 3,
    img: work3,
    name: "eAuctions",
    category: "app"
  },
  {
    id: 4,
    img: work4,
    name: "Time Capsule",
    category: "app"
  },
  {
    id: 5,
    img: work5,
    name: "Code Mate",
    category: 'app'
  },
  {
    id: 6,
    img: work6,
    name: "Old Portfolio",
    category: "design"
  }
]


export const workNavs = [
  "All", "Web", "App", "Design"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "71 Godstone Road, North York , Toronto"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "kenkaraa@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+1-647-554-6296"
  }
]
