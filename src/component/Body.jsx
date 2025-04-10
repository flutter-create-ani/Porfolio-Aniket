import ShortIntro from "./ShortIntro";
import CircularAvatar from "./CircularAvatar";
import WorkedWith from "./WorkedWith";
import Card from "./Card";
import Contact from "./Contact";
import Achievements from "./Achievements";

const Body = () => {
    return (
        <div id="home" className="bg-black text-white min-h-screen flex flex-col justify-center px-20 pt-10">
            {/* Top Section: Intro + Avatar */}
            <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10 py-10">
                <div className="flex-1">
                    <ShortIntro />
                </div>
                <div className="flex-1 flex justify-center">
                    <CircularAvatar />
                </div>
            </div>

            {/* Bottom Section: Worked With */}
            <div className="">
                <WorkedWith />
            </div>
            <div className="px-20 py-20">
                <p className="text-gray-400 font-mono text-lg leading-relaxed">Certifications</p>
                <Card />
            </div>
            <div className="px-20 py-20">
            <p className="text-gray-400 font-mono text-lg leading-relaxed">Achievements</p>
                <Achievements/>
            </div>
            <div className="px-20 py-20">
                <Contact/>
            </div>
            
        </div>
    );
};

export default Body;
