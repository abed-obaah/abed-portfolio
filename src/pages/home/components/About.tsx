import gsap from "gsap";
import SplitType from "split-type";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About = () => {
  const contRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const splitText = new SplitType(textRef.current, { types: "chars, words" });

    // gsap.from(splitText.chars, {
    //   scrollTrigger: {
    //     trigger: textRef.current,
    //     start: "top 50%",
    //     end: "top 10%",
    //     // pin: true,
    //     // start: "top top",
    //     // end: "+=100%",
    //     // pinSpacing: true,
    //     scrub: 1,
    //     markers: true,
    //   },
    //   color: "#352f2f",
    //   stagger: 0.1,
    // });

    const tween = gsap.from(splitText.chars, {
      color: "#352f2f",
      stagger: 0.1,
    });

    ScrollTrigger.create({
      trigger: contRef.current,
      start: "top 20%",
      end: `+=${textRef.current.offsetHeight}`,
      pin: true,
      animation: tween,
      scrub: true,
      markers: true,
    });
  }, []);

  return (
    <div ref={contRef} className="container bg-red-500">
      <p
        ref={textRef}
        className="font-bold text-white text-center"
        style={{ fontSize: "calc(2vw + 2vh)" }}
      >
        I'm a Frontend Developer based in Lagos. I derive interest in building
        things of the web with great performance assured. With my degree in
        Mathematics, I started off as a Maths Tutor for over 2 years before
        switching to web development. Currently, I'm working at Outcess as a
        Software Developer, where I build enhanced solution provided
        applications.
      </p>
    </div>
  );

  return (
    <section id="about">
      <div className="section-content">
        {/* <h2 className="title">About Me</h2> */}
        <div className="about-details">
          <p className="text-white text-5xl">
            I'm a Frontend Developer based in Lagos. I derive interest in
            building things of the web with great performance assured. With my
            degree in Mathematics, I started off as a Maths Tutor for over 2
            years before switching to web development. Currently, I'm working at
            Outcess as a Software Developer, where I build enhanced solution
            provided applications.
          </p>
          {/* <p>Below are the Tech stack I work with:</p>
          <ul>
            <li>
              <span>JavaScript</span>
            </li>
            <li>
              <span>Node</span>
            </li>
            <li>
              <span>React.JS</span>
            </li>
            <li>
              <span>GraphQL</span>
            </li>
            <li>
              <span>Redux</span>
            </li>
            <li>
              <span>Git</span>
            </li>
          </ul>
          <button>R&eacute;sum&eacute;</button> */}
        </div>
      </div>
    </section>
  );
};

export default About;
