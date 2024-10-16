import { VelocityScroll } from "../components/ui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
 <div className="md:mt-5 mt-20">
     <VelocityScroll
      text="Javascript Wordpress React.Js Next.Js Node.Js Express.  Js HTML CSS Tailwind CSS "
      default_velocity={2}
      className=" font-display text-center text-4xl font-bold tracking-[-0.02em]  drop-shadow-sm md:text-7xl md:leading-[5rem]"
    />
 </div>
  );
}
