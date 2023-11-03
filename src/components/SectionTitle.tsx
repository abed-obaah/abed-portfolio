const SectionTitle = ({ title }: { title: string }) => {
  const content = title.toLowerCase();

  return (
    <h2 className="relative font-bold text-4xl mt-3 whitespace-nowrap">
      {title}
      <span className="absolute text-5xl font-bold left-0 md:left-1/2 md:-translate-x-1/2 -top-6 bg-clip-text text-transparent bg-gradient-to-b from-white/[.15] to-white/0">
        {content}
      </span>
    </h2>
  );
};

export default SectionTitle;
