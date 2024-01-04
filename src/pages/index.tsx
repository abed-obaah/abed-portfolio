import Title from "@/components/title";
import React,{ useState } from "react";
import { PROJECTS, SOCIAL_LINKS, TECH_STACKS_TOOLS,Mobile_APP } from "./constant";
import ProjectCard from "../components/project";
import MobileCard from "../components/mobile";
import CustomButton from "@/components/button";
import CustomLink from "@/components/link";

const Home = () => {
  const [activeContent, setActiveContent] = useState('web');

  const handleContentToggle = (content) => {
    setActiveContent(content);
  };

  

  return (
    <>
      <section id="hero" className="container flex pt-24 min-h-[60vh]">
        <div className="hero-content flex flex-col gap-4 items-center text-center m-auto">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold whitespace-nowrap animate-title">
            Obaah Abed
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
                My name is <span className="text-zinc-50">Abednego</span>,
                 a Full Stack Web Developer with hands-on experience in crafting remarkable digital solutions. 
                 I specialize in React.js And React Native
                  for Frontend finnese and Php for solid backend functionality. When it comes to design, I wield Css and Tailwind to create
                   responsive Interfaces{" "}.
                   I've had the privilege of working on some incredible projects, like from building an <CustomLink
                  href="https://www.orralearn.com/"
                  text="E-learning Platform"
                  target="_blank"
                  withIcon
                /> to developing a 
                   <CustomLink
                  href="https://www.bittradexpert.com/"
                  text="Crypto Exchange Platform"
                  target="_blank"
                  withIcon
                />
                   I have a strong foundation in HTML, CSS, JavaScript. I'm not just a coder,I'm a problem solver and an avid learner.
                  
               
              </p>
              {/* <p>

                where I decided to try something new. I Interned at <CustomLink
                  href="https://hamplustech.com/"
                  text="HamPlus Hub"
                  target="_blank"
                  withIcon
                />{" "} . This allowed me to broaden my skill
                set while simultaneously mastering the art of coding, countless
                hours on weekends, and any other possible time I could spare.
              </p>
              <p>
                Fate had it this time, and an unexpected opportunity presented
                itself. A{" "}
                <CustomLink
                  href="https://www.Trybe201.com/"
                  text="Tech Community"
                  target="_blank"
                  withIcon
                />{" "}

              </p>
              <p>
                Today, I've had the privilege of building software for a
                elearning organizations{" "}
           
                , a{" "}
              
                , and startups. I'm driven by a passion for problem-solving
                while committed to lifelong learning and self-improvement.
                Currently focused on building quality, user-centric, and
                scalable products.
              </p> */}
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

        <div align="center" className="mt-4">
      <div className="flex justify-between  w-60 border rounded-full">
        <button
          onClick={() => handleContentToggle('web')}
          className={activeContent === 'web' ? 'actives' : ''}
          style={{ padding: '8px', borderRadius: '25px', width: '50%' }}
        >
          Web
        </button>
        <button
          onClick={() => handleContentToggle('mobile')}
          className={activeContent === 'mobile' ? 'actives' : ''}
          style={{ padding: '8px', borderRadius: '25px', width: '50%' }}
        >
          <span className="button-text">Mobile Apps</span>
        </button>
      </div>
      {activeContent === 'web' ? (
        <><p className="text-lg">
              Web Content
            </p>
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
              </>
      ) : (
        <>
            <p className="text-lg">
                Mobile APPs Contents
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
                <div className="flex flex-col gap-8">
                  {Mobile_APP.filter((_, idx) => idx % 2 === 0).map((mobile, idx) => (
                    <MobileCard key={idx} mobile={mobile} />
                  ))}
                </div>
                <div className="flex flex-col gap-8">
                  {Mobile_APP.filter((_, idx) => idx % 2 !== 0).map((mobile, idx) => (
                    <MobileCard key={idx} mobile={mobile} />
                  ))}
                </div>
              </div>
          </>
        ) 
      }
      <style>
        {`
          .actives {
            background-color: #ca3300;
            padding: 8px; 
            border-radius: 25px;
            width: 50%;
            transition: opacity 0.8s ease-in-out; /* Adding opacity transition */
          }
          .actives:hover {
            opacity: 0.8; /* Adjust the opacity level on hover */
          }
          button {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .button-text {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
         </div>
       
        
      </section>
      <section id="contact" className="container pt-40 pb-40">
        <div className="flex flex-col gap-7 items-center text-center mt-14">
          <Title title="Let's Talk" align="center" ignore />
          <p className="text-zinc-500 text-base sm:text-lg max-w-xl">
            If you have any questions or ideas, feel free to call me at{" "}
            <CustomLink text="(234) 9058389203" href="tel:2349058389203" /> or
            email me at{" "}
            <CustomLink
              text="ubahobaah@gmail.com"
              href="mailto:ubahobaah@gmail.com"
            />
            , I'm eagerly ready to collaborate.
          </p>
          <p>OR</p>
          <div className="flex text-center items-center">
            <CustomButton
              text="Meeting with Abed"
              href="https://calendly.com/chineduobaah"
              icon="calendar"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
