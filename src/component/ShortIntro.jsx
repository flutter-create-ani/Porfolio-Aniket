import { Icon } from "@iconify/react";

const ShortIntro = () => {
  return (
    <div className="flex flex-col items-start gap-6 bg-black text-white p-6 sm:p-8 md:pl-20 lg:pl-40 rounded-lg w-full max-w-3xl">
      <h1 className="text-4xl sm:text-5xl font-extrabold">Aniket Kumar</h1>
      <p className="text-gray-400 font-mono text-base sm:text-lg leading-relaxed">
        Hi, I’m Aniket — a full-stack developer with a passion for building intuitive web and mobile experiences. I specialize in React, Next.js, Flutter, and Node.js, and I love turning ideas into fast, scalable products.
      </p>
      <a
        href="https://drive.google.com/file/d/11ur9ezODROmZs_Gc8bjdeUd-80Am56iU/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="bg-[#3F8E00] text-white font-mono text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-md
          flex items-center gap-2 
          shadow-[0_0_15px_2px_#3F8E00] hover:brightness-110 transition-all"
        >
          Download CV <Icon icon="tabler:chevron-right" />
        </button>
      </a>
    </div>
  );
};

export default ShortIntro;
