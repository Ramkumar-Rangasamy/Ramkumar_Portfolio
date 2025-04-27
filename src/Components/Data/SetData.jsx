import { BiSolidDashboard, BiSolidUserPin, BiSolidSpreadsheet } from "react-icons/bi";
import { FaAward, FaLightbulb, FaLaptopCode } from "react-icons/fa";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { PiNewspaperClippingFill } from "react-icons/pi";
import { FaSquarePhone } from "react-icons/fa6";
import { FiMenu, FiBookOpen } from "react-icons/fi";
import { MdOutlineLiveTv } from "react-icons/md";
import { RiServiceFill } from "react-icons/ri";
import { MdDevices } from "react-icons/md"; // 📱 For Responsiveness

// Sidebar items config
export const sidebarItems = [
  { id: "home", label: "Home", icon: BiSolidDashboard },
  { id: "about", label: "About Me", icon: BiSolidUserPin },
  { id: "service", label: "Service", icon: RiServiceFill },
  { id: "experience", label: "Experience", icon: FaAward },
  { id: "projects", label: "Projects", icon: BiSolidSpreadsheet },
  { id: "skills", label: "Skills", icon: TbRosetteDiscountCheckFilled },
  { id: "certificates", label: "Certificates", icon: PiNewspaperClippingFill },
  { id: "contact", label: "Get in Touch", icon: FaSquarePhone },
];

// General site settings
const SetData = {
  logo: "Ram",

  navLinks: ["Home", "About", "Service", "Portfolio", "Blog", "Contact"],

  home: {
    name: "Ram Kumar R",
    role: "React Developer",
    rolesall: [
      "Software Developer",
      "MERN Stack Dev...",
      "React Developer",
      "Web Designer",
      "Frontend Developer",
    ],
  },
  FeaturesDatas: [
    {
      icon: <FiMenu />,
      title: "User Interface Development",
      description:
        "I engineer responsive, interactive UIs with React, HTML & CSS.Designed to captivate users and elevate experiences.",
    },
    {
      icon: <FiBookOpen />,
      title: "Backend Architecture",
      description:
        "I build robust and scalable backend systems with Node.js and Express.js.These power fast, interactive, and secure web applications.",
    },
    {
      icon: <MdOutlineLiveTv />,
      title: "Web Solutions (MERN Stack)",
      description:
        "I develop end-to-end solutions using the MERN stack.My apps are built for performance, scalability, and usability.",
    },
    {
      icon: <FaLightbulb />,
      title: "Strategic Web Development",
      description:
        "I align development with business goals to drive engagement.Every project is a step toward sustainable digital growth.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Unique Design",
      description:
        "I create modern, eye-catching websites tailored to your brand.Design meets function for a standout digital presence.",
    },
    {
      icon: <MdDevices />,
      title: "Responsiveness",
      description:
        "I ensure your site works flawlessly on all devices and screens.From desktop to mobile, the experience stays consistent.",
    },
  ],  
};

export default SetData;
