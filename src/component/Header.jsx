import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#1B1B1B] text-[#9C9C9C] py-5 px-10 ml-40 rounded-bl-2xl flex items-center justify-between font-mono">
      
      {/* Left: Text Links */}
      <nav className="flex items-center space-x-10">
        <a href="#home" className="hover:text-white tracking-wide">Home</a>
        <a href="#skills" className="hover:text-white tracking-wide">Skills</a>
        <a href="#achivement" className="hover:text-white tracking-wide">Achivements</a>
        <a href="#contact" className="hover:text-white tracking-wide">Get in Touch</a>
      </nav>

      {/* Right: Social Icons */}
      <div className="flex items-center space-x-5 pr-2">
        <a
          href="https://www.linkedin.com/in/aniket-kumar-545282228/"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 hover:opacity-100"
        >
          <Icon icon="entypo-social:linkedin" width="22" height="22" />
        </a>
        <a
          href="https://instagram.com/ani_ec25"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 hover:opacity-100"
        >
          <Icon icon="entypo-social:instagram" width="22" height="22" />
        </a>
      </div>
    </header>
  );
};

export default Header;
