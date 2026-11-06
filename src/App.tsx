import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import About from "./components/About";
import Playground from "./components/Playground";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";
import "./index.css";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 origin-left h-[2px]"
      style={{ scaleX, backgroundColor: "var(--color-accent)" }}
    />
  );
}

export default function App() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />

      <main className="min-h-screen" style={{ backgroundColor: "var(--color-ivory)" }}>
        <Hero />
        <SelectedWork />
        <About />
        <Playground />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
