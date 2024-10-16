import React from "react";
import { IconGlobe } from "./IconGlobe";
import Image from "next/image";
import { FlipWords } from "./ui/flip-words";
import {MovingBorderDemo} from "./Button"





const words = ["Web", "React Js", "MERN Stack ", "Extensions" , "Wordpress"];

const Home = () => {
  return (
    <>
      <div className="main flex flex-col md:flex-row justify-between pt-10">

        <div className="profile mt-20 gap-5 w-full md:w-[60%] flex flex-col justify-center items-center ">
          <Image
            src="https://i.pinimg.com/originals/e4/af/70/e4af701a810fc2e259334c2f17953965.jpg"
            alt="Profile Pic"
            width="100"
            height="100"
            className="rounded-full"
          />
          <div className="content  ">
            <h1>Hello, I'm Monkey D Luffy</h1>
            <span className="text-blue-500">
              I am a{" "}
              <FlipWords
                words={words}
                className="bg-red-500 rounded-md font-bold text-white"
              />
              Developer
            </span>
          </div>

        <div className="flex gap-2">
       
          </div>  
      
    

        </div>

        <div className="IconGlobe ">
          <IconGlobe />
        </div>

      </div>
    </>
  );
};

export default Home;
