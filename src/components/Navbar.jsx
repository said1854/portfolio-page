import React, { useState } from "react";
import Logo from "../assets/logo.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaGift,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-color1 text-amber-900">
      <div>
        <img src={Logo} alt="logo" style={{ width: "90px" }} />
      </div>
      <ul className="hidden sm:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="sm:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-color1 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl" href="/home">
          Home
        </li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
      {/* social icons */}
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] mb-3 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-1000">
            <a className="flex justify-between items-center w-full" href="/">
              Facebook <FaFacebook size={40} />
            </a>
          </li>
          <li className="w-[160px] mb-3 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-1000">
            <a className="flex justify-between items-center w-full" href="/">
              LinkedIn <FaLinkedin size={40} />
            </a>
          </li>
          <li className="w-[160px] mb-3 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-1000">
            <a className="flex justify-between items-center w-full" href="/">
              Github <FaGithub size={40} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
