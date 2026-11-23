import Hero from "./components/Hero";
import HowToHelp from "./components/HowToHelp";
import Sponsors from "./components/Sponsors";
import Contact from "./components/Contact";
import Impact from "./components/Impact";

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <HowToHelp />
        <Sponsors />
        <Impact />
      </main>
      <Contact />
    </>
  );
}