import SectionTitle from "@/components/SectionTitle";
import { PROJECTS, SOCIAL_LINKS } from "./constant";

import "./home.scss";

const Home = () => {
  return (
    <>
      <section id="hero" className="container flex py-40 min-h-[80vh]">
        <div className="hero-content flex flex-col gap-4 items-center text-center m-auto">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold whitespace-nowrap animate-title">
            John Adibe
          </h1>
          <h2 className="text-lg sm:text-2xl animate-fade-in">
            Frontend Engineer
          </h2>
          <p className="text-white/50 text-base sm:text-lg font-light max-w-lg animate-fade-in">
            I am passionate about developing cutting-edge solutions and
            implementing scalable web and mobile applications.
          </p>
          <div className="flex gap-5 mt-8">
            {SOCIAL_LINKS.map((item, idx) => (
              <a
                href={item.link}
                key={idx}
                className="text-white/80"
                target="_blank"
              >
                <item.icon width={25} height={25} />
              </a>
            ))}
          </div>
        </div>
      </section>
      <section id="about" className="container animate-fade-in">
        <div className="bg-white/[.015] p-7 sm:p-14 md:px-20 md:py-14 border">
          <div className="flex flex-col md:flex-row justify-between gap-7 sm:gap-10 pb-10 border-b">
            <SectionTitle title="About Me" align="center" />
            <div className="flex flex-col gap-4 text-white/50 md:w-9/12 text-sm sm:text-base">
              <p>
                Enthusiastic frontend developer with over 3 years of experience
                building responsive and scalable web applications, with a
                particular passion for developing innovative UI/UX solutions. I
                look forward to applying this experience in my next role.
              </p>
              <p>
                Enthusiastic frontend developer with over 3 years of experience
                building responsive and scalable web applications, with a
                particular passion for developing innovative UI/UX solutions. I
                look forward to applying this experience in my next role.
              </p>
              <p>
                Enthusiastic frontend developer with over 3 years of experience
                building responsive and scalable web applications, with a
                particular passion for developing innovative UI/UX solutions. I
                look forward to applying this experience in my next role.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="container py-56">
        <div className="max-w-2xl">
          <SectionTitle title="Projects" />
          <p className="text-white/50 text-base mt-4">
            I have worked on some projects but these are the amazing ones.
          </p>
        </div>
        <div className="mt-14">
          {PROJECTS.map((item, idx) => (
            <div key={idx} className="bg-white/[.015] border p-4 md:p-8">
              <h3 className="text-white font-bold text-2xl sm:text-3xl whitespace-nowrap">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
