import Title from "@/components/title";
import { PROJECTS, SOCIAL_LINKS, TECH_STACKS_TOOLS } from "./constant";
import ProjectCard from "../components/project";
import CustomButton from "@/components/button";
import CustomLink from "@/components/link";

const Home = () => {
  return (
    <>
      <section id="hero" className="container flex pt-24 min-h-[60vh]">
        <div className="hero-content flex flex-col gap-4 items-center text-center m-auto">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold whitespace-nowrap animate-title">
            John Adibe
          </h1>
          <h2 className="text-lg sm:text-2xl animate-fade-in">
            Frontend Engineer
          </h2>
          <p className="text-zinc-500 text-base sm:text-lg font-light max-w-lg animate-fade-in">
            I'm passionate about developing cutting-edge solutions and
            implementing scalable web and mobile applications.
          </p>
          <div className="flex gap-5 mt-8">
            {SOCIAL_LINKS.map((item, idx) => (
              <a
                href={item.link}
                key={idx}
                className="text-zinc-400 transition duration-300 hover:text-orange-strong"
                target="_blank"
              >
                <item.icon width={25} height={25} />
              </a>
            ))}
          </div>
        </div>
      </section>
      <section id="about" className="container pt-24 pb-16 animate-fade-in">
        <div className="bg-card p-7 sm:p-14 md:px-20 md:py-14 border">
          <div className="flex flex-col md:flex-row justify-between gap-7 sm:gap-10 pb-8 mb-8 border-b">
            <Title title="About Me" align="center" />
            <div className="flex flex-col gap-4 text-zinc-500 md:w-9/12 text-sm sm:text-base">
              <p>
                Enthusiastic frontend developer with over 3 years of experience
                building responsive and scalable web applications, with a
                particular passion for developing innovative UI/UX solutions.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            {TECH_STACKS_TOOLS.map((tech, idx) => (
              <div key={idx}>
                <h3 className="text-zinc-50 font-bold text-lg sm:text-xl mb-2">
                  {tech.title}:
                </h3>
                <div className="flex gap-4 flex-wrap">
                  {tech.collections.map((item, idx) => (
                    <div key={idx} className="flex gap-1">
                      <item.icon width={20} height={20} />
                      <span className="text-zinc-500 text-sm sm:text-base">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="projects" className="container pt-24 py-20">
        <div className="max-w-2xl">
          <Title title="Projects" />
          <p className="text-zinc-500 text-lg mt-4">
            These are some of the amazing projects I've worked or collaborated
            on.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          <div className="flex flex-col gap-8">
            {PROJECTS.filter((_, idx) => idx % 2 === 0).map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
          <div className="flex flex-col gap-8">
            {PROJECTS.filter((_, idx) => idx % 2 !== 0).map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="container pt-20 pb-40">
        <div className="flex flex-col gap-7 items-center text-center mt-14">
          <Title title="Let's Talk" align="center" ignore />
          <p className="text-zinc-500 text-base sm:text-lg max-w-xl">
            If you have any questions or ideas, feel free to call me at{" "}
            <CustomLink text="(234) 814-172-6099" href="tel:2348141726099" /> or
            email me at{" "}
            <CustomLink
              text="johnadibe450@gmail.com"
              href="mailto:johnadibe450@gmail.com"
            />
            , I am eagerly ready to collaborate.
          </p>
          <p>OR</p>
          <div className="flex text-center items-center">
            <CustomButton
              text="Meeting with John"
              href="https://calendly.com/john-adibe"
              icon="calendar"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
