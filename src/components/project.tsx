import { FigmaOutlinedIcon, GithubIcon, LinkSquareIcon } from "@/assets/icons";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-card flex flex-col gap-4 p-3 md:p-6 border">
      <div className="flex justify-between items-center">
        <span className="text-zinc-400 text-sm">{project.date}</span>
        <div className="flex gap-4 items-center">
          {/* {project.figma ? (
            <a
              href={project.figma}
              className="text-zinc-500 transition duration-300 hover:text-orange-strong"
              target="_blank"
            >
              <FigmaOutlinedIcon width={21} height={21} />
            </a>
          ) : null} */}
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
      <h3 className="text-zinc-50 font-bold text-xl sm:text-2xl">
        {project.name}
      </h3>
      {project.image ? (
        <img src={project.image} alt="" className="w-full border" />
      ) : null}
      
      <p className="text-zinc-500 text-sm sm:text-base">{project.desc}</p>
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
  );
};

export default ProjectCard;
