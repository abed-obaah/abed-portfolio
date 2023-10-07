import classNames from "classnames";

const SectionTitle = ({ title, size }) => {
  const content = title.toLowerCase().replace(" ", "_");

  return (
    <h2
      id="section-title"
      className={classNames(
        `font-bold text-3xl whitespace-nowrap before:content-['${content}']`,
        { "!text-5xl": size === "lg" }
      )}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
