import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

import "./home.scss";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
};

export default Home;
