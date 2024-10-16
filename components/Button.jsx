"use client";
import React from "react";
import  {Button}  from "./ui/moving-border";



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
