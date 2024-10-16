"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/aniamted-tooltip";
const people = [
    {
        id: 1,
        name: "HTML",
        designation: "",
        image:
          "https://pixelmechanics.com.sg/wp-content/uploads/2019/06/html5-logo-for-web-development.png",
      },
  {
    id: 2,
    name: "CSS",
    designation: "",
    image:
      "https://wildlearner.com/learn-static/courses/course-6683a98c-8ae3-4a0b-9a55-512692e38f1b/images_1652106838072.jpg",
  },

  {
    id: 3,
    name: "JavaScript",
    designation: "",
    image:
      "https://2ality.com/2011/10/logo-js/js.jpg",
  },
  {
    id: 4,
    name: "React Js",
    designation: "",
    image:
      "https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
