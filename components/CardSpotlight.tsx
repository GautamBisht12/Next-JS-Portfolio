import { CardSpotlight } from "@/components/ui/card-spotlight";
import { AnimatedTooltipPreview } from "./ToolTip";


interface ContentItem {
  title: string;
  metadesc: string;
  point1: string;
  point2: string;
  point3: string;
  point4: string;
  desc: string;
}

interface Content {
  Frontend?: ContentItem;
  Backend?: ContentItem;
  Others?: ContentItem;
}
type TechSkillType = {
  Frontend: {
    title: string;
    metadesc: string;
    point1: string;
    point2: string;
    point3: string;
    point4: string;
    point5: string;
    desc: string;
  };
  Backend: {
    title: string;
    metadesc: string;
    point1: string;
    point2: string;
    point3: string;
    point4: string;
    point5: string;
    desc: string;
  };
  Others: {
    title: string;
    metadesc: string;
    point1: string;
    point2: string;
    point3: string;
    point4: string;
    point5: string;
    desc: string;
  };
};


export function CardSpotlightDemo({ profile, content }: { profile: keyof Content, content: Content }) {
  if (!content || !content[profile]) {
    return <p>Content not available</p>; // Fallback in case of undefined content
  }

  const currentContent = content[profile];

  return (
    <CardSpotlight className="h-auto w-96">
      <h2>{currentContent?.title}</h2>
      <p className="text-base font-bold relative z-20 mt-2 text-white">
        {currentContent?.metadesc}
      </p>
      <div className="text-neutral-200 mt-4 relative z-20 text-sm">
        <ul className="list-none mt-2">
          <Step title={currentContent?.point1} />
          <Step title={currentContent?.point2} />
          <Step title={currentContent?.point3} />
          <Step title={currentContent?.point4} />
        </ul>
      </div>
      <p className="text-neutral-300 mt-4 relative z-20 text-sm">
        {currentContent?.desc}
      </p>
      <div className="mt-5 w-[250px]">
        <AnimatedTooltipPreview />
      </div>
    </CardSpotlight>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
