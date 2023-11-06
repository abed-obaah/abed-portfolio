import gsap from "gsap";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Layout from "./layout";
import Home from "./pages";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <ReactLenis root>
      <Layout>
        <Home />
      </Layout>
    </ReactLenis>
  );
}

export default App;
