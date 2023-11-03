import { useRef } from "react";
import SectionTitle from "@/components/SectionTitle";

const About = () => {
  const textRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const splitText = new SplitType(textRef.current, { types: "chars, words" });

  //   gsap.from(splitText.chars, {
  //     scrollTrigger: {
  //       trigger: textRef.current,
  //       start: "top 80%",
  //       end: "top 20%",
  //       scrub: 1,
  //       markers: false,
  //     },
  //     color: "rgb(255, 255, 255, .6)",
  //     stagger: 0.1,
  //   });
  // }, []);

  return (
    <section id="about" className="container animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between gap-7 sm:gap-10 bg-white/[.025] p-7 sm:p-14 md:px-20 md:py-14 border">
        <SectionTitle title="About Me" />
        <div
          ref={textRef}
          className="flex flex-col gap-4 text-white/50 md:w-9/12 text-lg"
        >
          <p>
            Enthusiastic frontend developer with over 3 years of experience
            building responsive and scalable web applications, with a particular
            passion for developing innovative UI/UX solutions. I look forward to
            applying this experience in my next role.
          </p>
          <p>
            Enthusiastic frontend developer with over 3 years of experience
            building responsive and scalable web applications, with a particular
            passion for developing innovative UI/UX solutions. I look forward to
            applying this experience in my next role.
          </p>
          <p>
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
