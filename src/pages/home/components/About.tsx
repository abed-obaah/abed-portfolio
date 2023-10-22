import gsap from "gsap";
import SplitType from "split-type";
import { useEffect, useRef } from "react";
import SectionTitle from "@/components/SectionTitle";

const About = () => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const splitText = new SplitType(textRef.current, { types: "chars, words" });

    gsap.from(splitText.chars, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
        markers: false,
      },
      color: "rgb(247, 254, 231, .25)",
      stagger: 0.1,
    });
  }, []);

  return (
    <section id="about" className="container">
      <div className="flex gap-6">
        <SectionTitle title="About Me" size="lg" />
        <div className="flex-1 p-8 border border-[#1a1a1a] border-opacity-70">
          <p ref={textRef} className={`text-lime-50 text-[calc(1vw_+_1vh)]`}>
            Enthusiastic frontend developer with over 3 years of experience
            building responsive and scalable web applications, with a particular
            passion for developing innovative UI/UX solutions. I look forward to
            applying this experience in my next role.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
