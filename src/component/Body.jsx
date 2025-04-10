import ShortIntro from "./ShortIntro";
import CircularAvatar from "./CircularAvatar";
import WorkedWith from "./WorkedWith";
import Card from "./Card";
import Contact from "./Contact";
import Achievements from "./Achievements";

const Body = () => {
  return (
    <div
      id="home"
      className="bg-black text-white min-h-screen flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 pt-10"
    >
      {/* Top Section: Avatar above Intro on Mobile */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-10 py-10">
        <div className="w-full lg:w-1/2">
          <ShortIntro />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <CircularAvatar />
        </div>
      </div>

      {/* Worked With Section */}
      <div className="w-full">
        <WorkedWith />
      </div>

      {/* Certifications */}
      <div className="w-full py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
        <p className="text-gray-400 font-mono text-lg leading-relaxed mb-6">Certifications</p>
        <Card />
      </div>

      {/* Achievements */}
      <div className="w-full py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
        <p className="text-gray-400 font-mono text-lg leading-relaxed mb-6">Achievements</p>
        <Achievements />
      </div>

      {/* Contact */}
      <div className="w-full py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
        <Contact />
      </div>
    </div>
  );
};

export default Body;
