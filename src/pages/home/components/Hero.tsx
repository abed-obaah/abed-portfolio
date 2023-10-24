import Avatar from "@/assets/img/avatar.jpg";

const Hero = () => {
  return (
    <div
      id="home"
      className="container py-56 flex items-center justify-between"
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl sm:text-6xl font-bold">John Adibe</h1>
        <h2 className="text-xl sm:text-2xl">Frontend Engineer</h2>
        <p className="text-white/60 text-base sm:text-lg font-light sm:max-w-md">
          I am passionate about developing innovative UI & UX solutions while
          maintaining responsive and scalable implementations.
        </p>
      </div>
      <img src={Avatar} alt="" className="bg-white/[.025] border" width={500} />
    </div>
  );
};

export default Hero;
