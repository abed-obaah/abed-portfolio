import { useState, useEffect } from 'react';
import { FigmaOutlinedIcon, GithubIcon, LinkSquareIcon } from "@/assets/icons";

const MobileCard = ({ mobile }) => {
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
    <a href={mobile.live || mobile.code} target="_blank" rel="noopener noreferrer" className="card-link">
      <div className="bg-card flex flex-col gap-4 p-3 md:p-6 border" style={{ height: cardHeight }}>
        <div className="flex justify-between items-center">
          <span className="text-zinc-400 text-sm">{mobile.date}</span>
          <div className="flex gap-4 items-center">
            {mobile.code ? (
              <a href={mobile.code} className="text-zinc-500 transition duration-300 hover:text-orange-strong" target="_blank">
                <GithubIcon width={20} height={20} />
              </a>
            ) : null}
            {mobile.live ? (
              <a href={mobile.live} className="text-zinc-500 transition duration-300 hover:text-orange-strong" target="_blank">
                <LinkSquareIcon width={20} height={20} />
              </a>
            ) : null}
          </div>
        </div>
        <div id="card-content">
          <h3 className="text-zinc-50 font-bold text-xl sm:text-2xl">{mobile.name}</h3>
          {mobile.image ? (
            <div className="image-container">
              <img src={mobile.image} alt="" className="w-full h-full object-cover border" />
            </div>
          ) : null}
          <p className="text-zinc-500 text-sm sm:text-base text-justify mt-4">{mobile.desc}</p>
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            <span className="text-zinc-50 font-semibold text-sm sm:text-base">Stack/Tools:</span>
            {mobile.stacks.map((stack, idx) => (
              <span key={idx} className="text-zinc-500 text-sm sm:text-base">
                {`${stack}${idx !== mobile.stacks.length - 1 ? ", " : "."}`}
              </span>
            ))}
          </div>
        </div>
        <style jsx>{`
          .card-link {
            transition: box-shadow 0.3s ease-in-out; /* Smooth transition for the effect */
            display: block; /* Ensures the link takes up the entire space of the parent */
          }

          .bg-card {
            box-shadow: 0 0 0 transparent; /* Initial shadow */
          }

          .card-link:hover .bg-card {
            box-shadow: 0 0 2px rgba(255, 255, 255, 0.7); /* Shadow effect on hover */
          }

          .image-container {
            height: 200px; /* Adjust the height based on your design */
            overflow: hidden; /* Hides any image overflow */
          }

          .image-container img {
            width: 100%; /* Ensures the image takes up the full width of its container */
            height: 100%; /* Ensures the image takes up the full height of its container */
            object-fit: cover; /* Maintains aspect ratio and covers the entire container */
          }
        `}</style>
      </div>
    </a>
  );
};

export default MobileCard;
