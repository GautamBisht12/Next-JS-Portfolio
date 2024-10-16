import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";
import { useTheme } from "next-themes";
import Image from "next/image";

export async function BoxRevealDemo({ title }: { title: string }) {
  const { theme } = useTheme;
  return (
    <div className="main-wrapper flex justify-between ">
      <div className="size-full max-w-lg   overflow-hidden ">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-[3rem] font-semibold">
            {title}
            <span className="text-[#5046e6]">.</span>
          </p>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h2 className="mt-[.5rem] text-[1rem]">
            UI library for{" "}
            <span
              className={`${
                theme === "dark" ? "text-[#5046e6]" : "text-white"
              }`}
            >
              Design Engineers
            </span>
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-6 text-sm">
            <p>
              -&gt; 20+ free and open-source animated components built with
              <span className="font-semibold text-[#5046e6]"> React</span>,
              <span className="font-semibold text-[#5046e6]"> Typescript</span>,
              <span className="font-semibold text-[#5046e6]">
                {" "}
                Tailwind CSS
              </span>
              , and
              <span className="font-semibold text-[#5046e6]">
                {" "}
                Framer Motion
              </span>
              . <br />
              -&gt; 100% open-source, and customizable. <br />
            </p>
          </div>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
        </BoxReveal>
      </div>
      <div className="project-img bg-green-200 h-full w-full mb-7">
        <Image
          src="https://github.com/GautamBisht12/Portfolio-1/blob/main/public/assets/chat-app.png?raw=true"
          alt="Project"
          width="500"
          height="500"
        />
      </div>
    </div>
  );
}
