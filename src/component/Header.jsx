import { useState } from "react";
import { Icon } from "@iconify/react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1B1B1B] text-[#9C9C9C] py-5 px-6 md:px-10 md:ml-40 rounded-bl-2xl flex items-center justify-between font-mono">

        {/* Left: Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#home" className="hover:text-white tracking-wide">Home</a>
          <a href="#skills" className="hover:text-white tracking-wide">Skills</a>
          <a href="#achivement" className="hover:text-white tracking-wide">Achivements</a>
          <a href="#contact" className="hover:text-white tracking-wide">Get in Touch</a>
        </nav>

        {/* Right: Social Icons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
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

      {/* Right Section: Social Icons on desktop, hamburger on mobile */}
      {/* Mobile: Hamburger + Social Icons in one row */}
      <div className="flex items-center justify-between w-full md:hidden pr-3">
        {/* Hamburger Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          <Icon
            icon={menuOpen ? "mdi:close" : "mdi:menu"}
            width="26"
            height="26"
          />
        </button>

        {/* Social Icons */}
        <div className="flex space-x-4">
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



       
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1B1B1B] text-[#9C9C9C] flex flex-col items-start space-y-4 py-4 px-6 md:hidden shadow-md">
          <a href="#home" className="hover:text-white tracking-wide w-full">Home</a>
          <a href="#skills" className="hover:text-white tracking-wide w-full">Skills</a>
          <a href="#achivement" className="hover:text-white tracking-wide w-full">Achivements</a>
          <a href="#contact" className="hover:text-white tracking-wide w-full">Get in Touch</a>

        </div>
      )}
    </header>
  );
};

export default Header;
