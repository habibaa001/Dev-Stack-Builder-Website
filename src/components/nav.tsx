import { useState } from "react";
import logo from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50  shadow-sm">
      <div className="container mx-auto px-4">

        <div className="md:hidden h-20 grid grid-cols-[1fr_auto_1fr] items-center">

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="justify-self-start text-2xl text-gray-700"
            aria-label="Open menu"
          >
            <img src={hamburger} alt="Open menu"/>
          </button>

          <img
            src={logo}
            alt="Dev Stack Builder"
            className="w-32"
          />

          <div className="justify-self-end flex items-center gap-2">
            <button className="text-sm font-medium text-gray-700">
              Sign In
            </button>

            <button className="btn bg-pink-700 text-white rounded-full">
              Sign Up
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-gray-700">Home</a>
              <a href="#" className="text-gray-700">Technologies</a>
              <a href="#" className="text-gray-700">Projects</a>
              <a href="#" className="text-gray-700">About</a>
              <a href="#" className="text-gray-700">Contact</a>
            </div>
          </div>
        )}

        <div className="hidden md:flex h-20 items-center justify-between">

          <img
            src={logo}
            alt="Dev Stack Builder"
            className="w-40"
          />

          <div className="flex items-center gap-8">
            <a href="#" className="text-gray-700 ">
              Home
            </a>
            <a href="#" className="text-gray-700 ">
              Technologies
            </a>
            <a href="#" className="text-gray-700 ">
              Projects
            </a>
            <a href="#" className="text-gray-700 ">
              About
            </a>
            <a href="#" className="text-gray-700 ">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-gray-700 ">
              Sign In
            </button>

            <button className="btn rounded-full bg-pink-700 text-white">
              Sign Up
            </button>
          </div>
          
        </div>

      </div>
    </nav>
  );
};

export default Nav;