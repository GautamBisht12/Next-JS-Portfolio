import React from "react";
import { MovingBorderDemo } from "./Button";
import {
  FaJs,
  FaReact,
  FaNode,
  FaWordpress,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaNpm,
} from "react-icons/fa"; // Import the icons
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import {
  SiTypescript,
  SiAppwrite,
  SiMongodb,
  SiNetlify,
  SiVercel,
  SiPostman,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { CardSpotlightDemo } from "./CardSpotlight";

const TechSkill = {
  Frontend: {
    title: "Frontend",
    metadesc: "Here’s an overview of my frontend skills:",
    point1: "Proficient in HTML for clean, semantic structure.",
    point2:
      "Expert in CSS (including Tailwind CSS) for responsive, appealing designs.",
    point3:
      "Strong in JavaScript and TypeScript for dynamic, interactive features.",
    point4: "Skilled in React.js for building component-based user interfaces.",
    point5:
      "Focused on performance with optimized load times and SEO best practices.",
    desc: "I ensure that my frontend development creates intuitive, user-friendly, and efficient web experiences, prioritizing performance and modern design patterns.",
  },

  Backend: {
    title: "Backend",
    metadesc: "Here’s an overview of my backend skills:",
    point1:
      "Proficient in Node.js for building scalable and efficient backend systems.",
    point2: "Experienced in Express.js for developing robust RESTful APIs.",
    point3:
      "Skilled in working with MongoDB for flexible, NoSQL database management.",
    point4:
      "Familiar with Firebase for real-time database integration and authentication.",
    point5: "Knowledgeable in server-side rendering with Next.js.",
    desc: "I focus on creating secure, scalable, and maintainable backend architectures, ensuring high performance and data integrity across all server operations.",
  },

  Others: {
    title: "Additional Tools",
    metadesc: "Here’s an overview of additional tools and technologies I use:",
    point1:
      "Version control with Git and GitHub for efficient code management.",
    point2: "Experience with WordPress for custom CMS development.",
    point3: "Proficient in using Postman for API testing and debugging.",
    point4:
      "Skilled in working with NPM for package management and dependency handling.",
    point5:
      "Experience in data visualization using Chart.js or similar libraries.",
    desc: "I utilize a wide range of tools to enhance my workflow, improve collaboration, and ensure the quality of my projects.",
  },
};

const TechStack = () => {
  return (
    <>
      <div className="main h-auto">
        <h2 className="text-center text-[20px]">Skills & Experience</h2>
        <div className="tech-stack flex gap-5 flex-wrap justify-center pt-10">
          <MovingBorderDemo
            content=""
            icon={<FaJs size="35" color="yellow" />}
          />
          <MovingBorderDemo
            content=""
            icon={<FaReact size="35" color="skyblue" />}
          />
          <MovingBorderDemo
            content=""
            icon={<RiTailwindCssFill size="35" color="skyblue" />}
          />
          <MovingBorderDemo
            content=""
            icon={<FaNode size="35" color="green" />}
          />
          <MovingBorderDemo
            content=""
            icon={<SiExpress size="35" color="skyblue" />}
          />
          <MovingBorderDemo
            content=""
            icon={<SiTypescript size="35" color="skyblue" />}
          />
          <MovingBorderDemo
            content=""
            icon={<RiNextjsFill size="35" color="white" />}
          />
          <MovingBorderDemo
            content=""
            icon={<FaWordpress size="35" color="skyblue" />}
          />
          <MovingBorderDemo
            content=""
            icon={<FaGithub size="35" color="white" />}
          />
          <MovingBorderDemo
            content=""
            icon={<IoLogoFirebase size="35" color="orange" />}
          />
          <MovingBorderDemo
            content=""
            icon={<SiAppwrite size="35" color="red" />}
          />
          <MovingBorderDemo
            content=""
            icon={<SiMongodb size="35" color="lightgreen" />}
          />
          <MovingBorderDemo
            content=""
            icon={<SiNetlify size="35" color="skyblue" />}
          />
          <MovingBorderDemo
            content=""
            icon={<FaHtml5 size="35" color="skyblue" />}
          />
          <MovingBorderDemo
            content=""
            icon={<FaCss3 size="35" color="skyblue" />}
          />
          <MovingBorderDemo
            content=""
            icon={<SiVercel size="35" color="skyblue" />}
          />
          <MovingBorderDemo
            content=""
            icon={<FaNpm size="35" color="skyblue" />}
          />
          <MovingBorderDemo
            content=""
            icon={<SiPostman size="35" color="orange" />}
          />
        </div>
        <div className="tech-cards flex gap-5 justify-center py-12 flex-wrap">
          <CardSpotlightDemo profile="Frontend" content={TechSkill} />
          <CardSpotlightDemo profile="Backend" content={TechSkill} />
          <CardSpotlightDemo profile="Others" content={TechSkill} />
        </div>
      </div>
    </>
  );
};

export default TechStack;
