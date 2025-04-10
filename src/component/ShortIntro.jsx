import { Icon } from "@iconify/react";

const ShortIntro = () => {
    return (
        <div className="flex flex-col items-start gap-6 bg-black text-white p-8 pl-40 rounded-lg max-w-xl">
            <h1 className="text-5xl font-extrabold">Aniket Kumar</h1>
            <p className="text-gray-400 font-mono text-lg leading-relaxed">
                Hi, I’m Aniket — a full-stack developer with a passion for building intuitive web and mobile experiences. I specialize in React, Next.js, Flutter, and Node.js, and I love turning ideas into fast, scalable products.
            </p>
           <a href="https://drive.google.com/file/d/11ur9ezODROmZs_Gc8bjdeUd-80Am56iU/view?usp=sharing"> <button
                className="bg-[#3F8E00] text-white font-mono text-lg font-semibold px-8 py-4 rounded-md
             flex items-center gap-2 
             shadow-[0_0_15px_2px_#3F8E00] hover:brightness-110 cursor-pointer transition-all"
                onClick={() => { }}
            >
                Download CV<Icon icon="tabler:chevron-right" />
            </button></a>


        </div>
    );
}

export default ShortIntro;
