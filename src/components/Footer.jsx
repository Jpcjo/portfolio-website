import React from "react";
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiAltiumdesigner } from "react-icons/si";

const Footer = () => {
  return (
    <footer className=" flex flex-col space-y-1 place-items-center p-4 bg-gray-200 text-black w-full">
      <nav className="flex flex-row justify-center items-center space-x-4 w-full py-2">
        <a href="https://github.com/Jpcjo" target="_blank">
          <FaGithubSquare className="h-7 w-7 text-gray-400 hover:text-slate-700 hover:scale-110 duration-300" />
        </a>
        <a href="https://github.com/Jpcjo" target="_blank">
          <FaLinkedinIn className="h-7 w-7 text-gray-400 hover:text-sky-600 hover:scale-110 duration-300" />
        </a>
        <a href="tel:0401204458">
          <IoDocumentText className="h-7 w-7 text-gray-400 hover:text-yellow-600 hover:scale-110 duration-300" />
        </a>
        <a href="mailto:fwudesign@gmail.com">
          <IoIosMail className="h-8 w-8 text-gray-400 hover:text-slate-500 hover:scale-110 duration-300" />
        </a>
        <a href="tel:0401204458">
          <BsFillTelephoneFill className="h-5 w-5 text-gray-400 hover:text-violet-700 hover:scale-110 duration-300" />
        </a>
      </nav>

      <div className="flex flex-row items-center space-x-2">
        <SiAltiumdesigner className="h-6 w-6  text-violet-400" />
        <p className="text-sm text-violet-400 font-semibold">
          Copyright © 2024 - All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
