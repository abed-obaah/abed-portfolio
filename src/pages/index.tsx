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
      <section id="about" className="container pt-24 animate-fade-in">
        <div className="bg-card p-5 sm:p-14 md:px-16 md:py-14 border">
          <div className="flex flex-col md:flex-row justify-between gap-7 sm:gap-10 pb-8 mb-8 border-b">
            <Title title="About Me" align="center" />
            <div className="flex flex-col gap-4 text-zinc-500 md:w-9/12 text-sm sm:text-base">
              <p>
                My name is <span className="text-zinc-50">John</span>, and my
                journey from a mathematics teacher to a seasoned frontend
                developer has been nothing short of a thrilling adventure.
                Graduating from the{" "}
                <CustomLink
                  href="https://www.unn.edu.ng/"
                  text="University of Nigeria, Nsukka"
                  target="_blank"
                  withIcon
                />
                , with a B.Sc in Mathematics, I delved into academia. My love
                for imparting knowledge led me to pursue a career in teaching
                mathematics at secondary schools immediately after graduating.
              </p>
              <p>
                While I embraced the role of an educator, I dearly nurtured the
                zeal to get acquainted with things on the web and how they came
                to be. So, in 2019 I decided to try something new. I found
                myself working in customer service roles. This role allowed me
                to broaden my skill set while simultaneously mastering the art
                of coding, countless hours on weekends, and any other possible
                time I could spare.
              </p>
              <p>
                Fate had it this time, and an unexpected opportunity presented
                itself. A{" "}
                <CustomLink
                  href="https://www.outcess.com/"
                  text="reputable firm"
                  target="_blank"
                  withIcon
                />{" "}
                where I was employed as a customer service agent had an in-house
                opening for a frontend developer. I seized this golden
                opportunity and enthusiastically stepped into the world of web
                development. Thanks to the extra hours of dedication.
              </p>
              <p>
                Today, I've had the privilege of building software for a
                business process{" "}
                <CustomLink
                  href="https://www.outcess.com/"
                  text="outsourcing company"
                  target="_blank"
                  withIcon
                />
                , and a{" "}
                <CustomLink
                  href="https://www.myclinify.com/"
                  text="healthcare agency"
                  target="_blank"
                  withIcon
                />
                . I'm driven by a passion for problem-solving while committed to
                lifelong learning and self-improvement. Currently focused on
                building quality, user-centric, and scalable products.
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
      <section id="projects" className="container pt-40">
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
      <section id="contact" className="container pt-40 pb-40">
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
            , I'm eagerly ready to collaborate.
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
