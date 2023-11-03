import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/assets/icons";

const SOCIAL_LINKS = [
  {
    link: "https://github.com/johnphealipto",
    icon: <GithubIcon width={25} height={25} />,
  },
  {
    link: "https://www.linkedin.com/in/johnadibe",
    icon: <LinkedinIcon width={25} height={25} />,
  },
  {
    link: "https://twitter.com/johnphealipto",
    icon: <TwitterXIcon width={25} height={25} />,
  },
];

const Hero = () => {
  return (
    <div id="hero" className="container flex py-40 min-h-[80vh]">
      <div className="hero-content flex flex-col gap-4 items-center text-center m-auto">
        <h1 className="text-6xl sm:text-7xl font-extrabold animate-title">
          John Adibe
        </h1>
        <h2 className="text-xl sm:text-2xl animate-fade-in">
          Frontend Engineer
        </h2>
        <p className="text-white/50 text-base sm:text-lg font-light sm:max-w-md animate-fade-in">
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
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
