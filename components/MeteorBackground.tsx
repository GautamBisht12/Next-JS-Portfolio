import React from "react";
import { Meteors } from "./ui/meteors";
import BoxReveal from "./ui/box-reveal";
import { BoxRevealDemo } from "./BoxReveal";

export function MeteorsDemo() {
  return (
    <div className="w-full ">
      <div className=" w-full relative">
        <div className="absolute inset-0  w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl  bg-gray-900 border border-gray-800  px-4 py-4  overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
          <BoxRevealDemo title="Chat Application"/>
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
