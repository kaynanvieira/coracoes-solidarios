import Hero from "./components/Hero";
import HowToHelp from "./components/HowToHelp";
import Sponsors from "./components/Sponsors";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <HowToHelp />
        <Sponsors />
      </main>
      <Contact />
    </>
  );
}