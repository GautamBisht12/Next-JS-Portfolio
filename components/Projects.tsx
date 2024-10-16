import React from "react";
import { BoxRevealDemo } from "./BoxReveal";
import { Meteors } from "./ui/meteors";
import { MeteorsDemo } from "./MeteorBackground";
import { TabsDemo } from "./Tabs";

const Projects = () => {
  return (
    <>
      <div className="main w-full  mt-20 mb-[60vh]">
        <p className="text-center text-[28px]">Projects</p>
        <div className=" px-20 py-4 flex ">
          <TabsDemo />
        </div>
      </div>
    </>
  );
};

export default Projects;
