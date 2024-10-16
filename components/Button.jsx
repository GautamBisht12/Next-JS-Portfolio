"use client";
import React from "react";
import  {Button}  from "./ui/moving-border";
import Image from "next/image";
import { FaJs ,FaReact } from "react-icons/fa";


export function MovingBorderDemo({content , icon}) {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="dark:text-white border-neutral-200 dark:border-slate-800"
      >
       {content && content}
       {icon && icon}
      </Button>
    </div>
  );
}
