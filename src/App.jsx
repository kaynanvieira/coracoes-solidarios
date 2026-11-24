import Hero from "./components/Hero";
import HowToHelp from "./components/HowToHelp";
import Sponsors from "./components/Sponsors";
import Contact from "./components/Contact";
import Impact from "./components/Impact";
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <HowToHelp />
        <Impact />
        <Gallery />
        <Sponsors />
      </main>
      <Contact />
    </>
  );
}