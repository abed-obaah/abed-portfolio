import { useState, useEffect } from 'react';
import { FigmaOutlinedIcon, GithubIcon, LinkSquareIcon } from "@/assets/icons";

const ProjectCard = ({ project }) => {
  const [cardHeight, setCardHeight] = useState('auto');

  useEffect(() => {
    const adjustCardHeight = () => {
      const maxHeight = Math.max(
        document.getElementById('card-content').scrollHeight,
        document.getElementById('card-content').clientHeight
      );
      setCardHeight(`${maxHeight * 1.5}px`);
    };

    adjustCardHeight();
    window.addEventListener('resize', adjustCardHeight);
    return () => {
      window.removeEventListener('resize', adjustCardHeight);
    };
  }, []);

  return (
    <a href={project.live || project.code} target="_blank" rel="noopener noreferrer "
    className="card-link"
    >
<div className="bg-card flex flex-col gap-4 p-3 md:p-6 border" style={{ height: cardHeight }}>
      
      <div className="flex justify-between items-center">
        <span className="text-zinc-400 text-sm">{project.date}</span>
        <div className="flex gap-4 items-center">
          {project.code ? (
            <a
              href={project.code}
              className="text-zinc-500 transition duration-300 hover:text-orange-strong"
              target="_blank"
            >
              <GithubIcon width={20} height={20} />
            </a>
          ) : null}
          {project.live ? (
            <a
              href={project.live}
              className="text-zinc-500 transition duration-300 hover:text-orange-strong"
              target="_blank"
            >
              <LinkSquareIcon width={20} height={20} />
            </a>
          ) : null}
        </div>
      </div>
      <div id="card-content">
        <h3 className="text-zinc-50 font-bold text-xl sm:text-2xl">{project.name}</h3>
        {project.image ? (
          <img src={project.image} alt="" className="w-full border" />
        ) : null}
        <p className="text-zinc-500 text-sm sm:text-base text-justify mt-4">{project.desc}</p>
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          <span className="text-zinc-50 font-semibold text-sm sm:text-base">
            Stack/Tools:
          </span>
          {project.stacks.map((stack, idx) => (
            <span key={idx} className="text-zinc-500 text-sm sm:text-base">
              {`${stack}${idx !== project.stacks.length - 1 ? ", " : "."}`}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        .card-link {
          transition: box-shadow 0.3s ease-in-out; /* Smooth transition for the effect */
        }

        .card-link:hover .bg-card {
          box-shadow: 0 0 2px rgba(255, 255, 255, 0.7);  /* Shadow effect on hover */
        }
      `}</style>
    </div>
    </a>
    
  );
};

export default ProjectCard;
