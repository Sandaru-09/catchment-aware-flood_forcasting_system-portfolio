import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProjectScope from '@/components/ProjectScope';
import Objectives from '@/components/Objectives';
import Methodology from '@/components/Methodology';
import Technologies from '@/components/Technologies';
import Timeline from '@/components/Timeline';
import Team from '@/components/Team';
import Downloads from '@/components/Downloads';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <ProjectScope />
        <Objectives />
        <Methodology />
        <Technologies />
        <Timeline />
        <Team />
        <Downloads />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
