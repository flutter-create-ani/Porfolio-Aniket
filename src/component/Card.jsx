import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useRef, useEffect } from "react";

const CardCarousel = () => {
  const scrollRef = useRef(null);
  const scrollAmount = 300;

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const cards = [
    {
      image:
        "https://media.licdn.com/dms/image/v2/D562DAQGEHIhq_-PqGg/profile-treasury-image-shrink_800_800/B56ZWn7FkaGUAY-/0/1742279040460?e=1744758000&v=beta&t=aC_7P3QS-8GxcRqGqqVDytEA41d3WCa0exY0RLztY9I",
      title: "Namaste React Course",
      description: "A comprehensive, industry-grade course covering React from fundamentals to advanced patterns, performance optimization, and scalable architecture design.",
    },
    {
      image:
        "https://media.licdn.com/dms/image/v2/D562DAQEzDzAQK3pv1A/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1724520978072?e=1744758000&v=beta&t=09crI8ZLVRaKbL39KKjEzSlcnSF4fLBMM8ABS61tIcQ",
      title: "Namaste Node.js",
      description: "Master backend engineering through real-world projects, deep dive into asynchronous programming, REST APIs, and production-ready Node.js systems.",
    },
    {
      image:
        "https://media.licdn.com/dms/image/v2/D562DAQEQ_J0yj-N9rw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1724520750035?e=1744758000&v=beta&t=tKTD-2f--PFYzcrdh8pg6aqELnMIL6X_tmSFB27-oQg",
      title: "Flutter Development",
      description: "Full-stack mobile development using Flutter, building performant cross-platform apps with clean UI, state management, and deployment strategies.",
    },
    {
      image:
        "https://media.licdn.com/dms/image/v2/D562DAQE-BfVIiSetbw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719367259804?e=1744758000&v=beta&t=vKgblCP4zV1y_BdGp4Y-9Lb5hSilyyLX8UPOrFkVzd8",
      title: "Advanced Node.js",
      description: "A deep technical journey through Node.js internals, scalable server architecture, real-time systems, and high-concurrency API development.",
    },
    {
      image:
        "https://media.licdn.com/dms/image/v2/D562DAQGPGmbuTU_llg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719360693866?e=1744758000&v=beta&t=k-tuj1x-YwZkOrfojT-hqhM3ilegVBBlfsd-Bvn2gnk",
      title: "Data Structures & Algorithms",
      description: "An in-depth DSA course designed to build strong foundations and problem-solving skills, ideal for acing coding interviews and competitive programming.",
    },
  ];

  // Duplicate cards for infinite loop illusion
  const repeatedCards = [...cards, ...cards];

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      const { current } = scrollRef;
      if (current) {
        if (
          current.scrollLeft + current.offsetWidth >=
          current.scrollWidth
        ) {
          // Reset to beginning for infinite scroll effect
          current.scrollTo({ left: 0, behavior: "auto" });
        } else {
          current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 1000); // every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="relative w-full py-10">
      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black p-2 shadow-md hover:cursor-pointer"
      >
        <Icon icon="tabler:caret-left-filled" width="24" height="24" />
      </button>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black p-2 shadow-md hover:cursor-pointer"
      >
        <Icon icon="tabler:caret-right-filled" width="24" height="24" />
      </button>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-4 no-scrollbar"
      >
        {repeatedCards.map((card, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-[300px] flex-shrink-0 rounded-lg bg-white shadow-md"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{card.description}</p>
              <a
                href="#"
                className="mt-4 inline-block rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardCarousel;
