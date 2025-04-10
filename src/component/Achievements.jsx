import { useState } from "react";

const Achievements = () => {
    const achievements = [
        {
            title: "Mentor at BFCET Hack 2.0",
            description:
                "Invited as a mentor to guide participants at BFCET Hack 2.0. Provided strategic direction and industry insights to help teams innovate and elevate their ideas.",
            image: "https://media.licdn.com/dms/image/v2/D5622AQH6uQ_ehmYpOg/feedshare-shrink_1280/B56ZVhZGE5GsAk-/0/1741095725009?e=1747267200&v=beta&t=bbQ7Ypfmoca2uMpUpYU6wVMnsoY8TPgWgduNbCnnuxE",
        },
        {
            title: "2nd Place – National Tech-Business Event",
            description:
                "Won 2nd place out of 400+ participants at the 'Where Business Meets Technology' event by E.G.S Pillay Group. Honored to present and collaborate at a national level.",
            image: "https://media.licdn.com/dms/image/v2/D5622AQHmJRWRUsNFvA/feedshare-shrink_1280/feedshare-shrink_1280/0/1730285345418?e=1747267200&v=beta&t=hiyBhRzBrIgl9yfs0uy4QdLQe5S_5D-CrCtoCvxsogQ",
        },
        {
            title: "6th Place – IEEE Hackathon Final Stage",
            description:
                "Ranked 6th out of 1500+ teams at the final round of the IEEE Region 10 & India Council Hackathon. Our app 'Satthi' tackled healthcare accessibility with innovation and impact.",
            image: "https://media.licdn.com/dms/image/v2/D5622AQFBkWEjmE5C9w/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727862794939?e=1747267200&v=beta&t=V2jt5fpO9HUZulHyAvTrUF_RfwWlcTdaeYuXKk-xGvs",
        },
        {
            title: "2nd Place – Wooble IdeaSphere 2024",
            description:
                "Secured 2nd place in Wooble IdeaSphere 2024 among nationwide innovators. Honored to be recognized for creativity and impactful ideas.",
            image: "https://media.licdn.com/dms/image/v2/D5622AQGRx11WtYJUoA/feedshare-shrink_1280/feedshare-shrink_1280/0/1723875197144?e=1747267200&v=beta&t=ME-xgGVgoHzesI9SPmAA0fnWtPvcDAQJsdcCqVAr6K0",
        },
        {
            title: "Vice President – School of UI/UX",
            description:
                "Led the School of UI/UX as Vice President, organizing design-driven initiatives and promoting creative learning in the community.",
            image: "https://media.licdn.com/dms/image/v2/D5622AQF0DTIaqhSHIA/feedshare-shrink_1280/feedshare-shrink_1280/0/1704999063293?e=1747267200&v=beta&t=i18vKH2UDFQmsYUstKpF76ENWZH76wWQlyZxujHcGm0",
        },
    ];

    return (
        <div id="achivement"className="relative w-full py-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {achievements.map((item, index) => {
                const [loaded, setLoaded] = useState(false);
                return (
                    <a
                        key={index}
                        href="#"
                        className="flex flex-col items-center bg-[#1B1B1B] text-[#9C9C9C] rounded-lg border border-[#2A2A2A] shadow-sm md:flex-row hover:bg-[#2A2A2A] transition duration-200"
                    >
                        <div className="relative w-full md:w-48 h-48 flex-shrink-0 pl-4">
                            {!loaded && (
                                <div className="w-full h-full animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 rounded-t-lg md:rounded-none md:rounded-s-lg" />
                            )}
                            <img
                                className={`object-cover w-full h-full rounded-2xl md:rounded-none md:rounded-s-2xl transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
                                src={item.image}
                                alt={item.title}
                                onLoad={() => setLoaded(true)}
                            />

                        </div>

                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white font-mono">
                                {item.title}
                            </h5>
                            <p className="mb-3 font-normal text-[#9C9C9C]">
                                {item.description}
                            </p>
                        </div>
                    </a>
                );
            })}
        </div>
    );
};

export default Achievements;
