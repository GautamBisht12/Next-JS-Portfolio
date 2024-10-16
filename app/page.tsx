import { ScrollBasedVelocityDemo } from '@/components/ScrollAnimation';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import Projects from '@/components/Projects';
import {TimelineDemo} from '@/components/Experience';


export default function Home() {
  return (
    <>
   <Hero/>
   <TechStack/>
   <Projects/>
   <ScrollBasedVelocityDemo/>
   <TimelineDemo/>
    </>
  );
}
