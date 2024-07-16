import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoSunnyOutline } from "react-icons/io5";
import ColorModeIcon from "./ColorModeIcon";

function Navbar({ isDarkMode, toggleColorMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Navigation bar  */}
      <nav className="bg-primaryColor shadow-sm">
        <div className="lg:container mx-auto ">
          <div className="p-4 md:p-4 lg:p-8 flex justify-between items-center">
            {/* Logo on Large Screen  */}
            <div className="flex items-center gap-2">
              <div className="flex-shrink-0 cursor-pointer">
                <div className="text-16 md:text-24 font-medium text-white">
                  {"{ Akintola }"}
                </div>
              </div>
            </div>

            {/* Navbar Links  */}
            <div className="hidden md:hidden lg:flex justify-between gap-20">
              <ul className="flex justify-between items-center gap-20 md:gap-10 lg:gap-20 font-sans  text-white">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>

                <li>
                  <Link to="/tech-stack">Technologies</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="block md:block lg:hidden text-white">
              <MdOutlineMenu size={25} onClick={toggleNavbar} />
            </div>
          </div>

          {isOpen && (
            <div>
              <div className="md:block w-full fixed top-0 left-0  transition-all bg-primaryColor shadow-lg h-full z-50 px-3 py-5 md:p-4">
                {/* Tog */}
                <div className="flex justify-between  items-center gap-3">
                  <div className="text-16 md:text-24 text-white">
                    {"{ Akintola }"}
                  </div>

                  <RxCross2
                    className="text-xl text-white font-extrabold"
                    size={25}
                    onClick={toggleNavbar}
                  />
                </div>

                <div className="border border-white my-4"></div>

                <div className="px-2  pb-3 space-y-1 sm:px-3 flex flex-col gap-8">
                  <ul className="flex flex-col items-start gap-4 md:gap-8 mt-8 text-white">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/projects">Projects</Link>
                    </li>

                    <li>
                      <Link to="/tech-stack">Technologies</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
