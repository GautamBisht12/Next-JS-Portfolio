

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import { MeteorsDemo } from "./MeteorBackground";

export function TabsDemo() {
  const tabs = [
    {
      title: "Javascript",
      value: "product",
      content: (
        <div className="w-full  overflow-hidden relative  rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-6">JavaSript </p>
          <div className="flex flex-col gap-5">
          <MeteorsDemo/>
          <MeteorsDemo/>
          </div>
        </div>
      ),
    },
    {
      title: "React Js",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative  rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-6">React Js</p>
          <div className="flex flex-col gap-5">
          <MeteorsDemo/>
          <MeteorsDemo/>
          </div>
         

        </div>
      ),
    },
    {
      title: "MERN",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative  rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-6">MERN </p>
          <div className="flex flex-col gap-5">
          <MeteorsDemo/>
          <MeteorsDemo/>
          </div>
        </div>
      ),
    },
    {
      title: "NEXT Js",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative  rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-6">NEXT Js</p>
          <div className="flex flex-col gap-5">
          <MeteorsDemo/>
          <MeteorsDemo/>
          </div>
        </div>
      ),
    },
    {
      title: "Extensions",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative  rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-6">Web Extensions</p>
          <div className="flex flex-col gap-5">
          <MeteorsDemo/>
          <MeteorsDemo/>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-full md:h-[34rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-8">
      <Tabs tabs={tabs} />
    </div>
  );
}


