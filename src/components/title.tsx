import classNames from "classnames";

const Title = ({
  title,
  align = "left",
  ignore,
}: {
  title: string;
  align?: "left" | "center";
  ignore?: boolean;
}) => {
  const content = title.toLowerCase();

  return (
    <h2 className="text-zinc-50 relative font-bold text-3xl sm:text-4xl mt-3 whitespace-nowrap">
      {title}
      <span
        className={classNames(
          "absolute text-4xl sm:text-5xl font-bold left-0 -top-4 sm:-top-6 bg-clip-text text-transparent bg-gradient-to-b from-zinc-800 -z-10",
          {
            "md:left-1/2 md:-translate-x-1/2": align === "center",
            "!left-1/2 !-translate-x-1/2": ignore,
          }
        )}
      >
        {content}
      </span>
    </h2>
  );
};

export default Title;
