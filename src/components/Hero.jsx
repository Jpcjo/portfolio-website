import React, { useState, useEffect } from "react";
import heroImg from "../assets/hero6.svg";
import { FaGithubSquare, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";

const Hero = () => {
  const [isHover, setIsHover] = useState(false);
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  const icons = [IoIosMail, FaLinkedinIn, FaGithubSquare];
  const links = [
    "mailto:fwudesign@gmail.com",
    "https://www.nike.com",
    "https://github.com/Jpcjo",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleIconClick = () => {
    const link = links[currentIconIndex];
    const target = currentIconIndex === 0 ? "_self" : "_blank";
    window.open(link, target);
  };

  return (
    <div
      className="bg-gradient-to-b from-violet-100 to-lime-100 pt-44 pb-28"
      id="home"
    >
      <div className="align-element grid items-center gap-8 md:grid-cols-2 md:px-20 ">
        <article>
          <h1 className="text-6xl font-semibold mb-6 tracking-wider text-black">
            Fay.
          </h1>
          <p className="text-4xl font-bold mb-2 tracking-wider text-violet-700">
            Front-End Developer.
          </p>
          <p className="text-2xl font-semibold  tracking-wider text-gray-700">
            Creative Problem Solver. Design strategist.
          </p>

          <p className="mt-2 text-lg text-w tracking-wide font-medium text-slate-500">
            Who crafts seamless experiences, one line of code at a time.
          </p>
          <div className="flex gap-x-4 mt-4 items-center ">
            <a href="https://github.com/Jpcjo" target="_blank">
              <FaLinkedinIn className="h-6 w-6 text-slate-400 hover:text-sky-500 hover:scale-125 duration-300" />
            </a>
            <a href="https://github.com/Jpcjo" target="_blank">
              <FaGithubSquare className="h-6 w-6 text-slate-400 hover:text-slate-700 hover:scale-125 duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} alt="heroImgOffice" className="h-80 lg:h-auto" />
        </article>
      </div>
      <div className="relative">
        <div
          className="btn btn-circle bg-white bg-opacity-90 border-none btn-lg fixed right-8 bottom-8 drop-shadow-lg animate-bounce hover:scale-110 hover:shadow-2xl transition duration-500 hover:bg-white"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={handleIconClick}
        >
          <div className="indicator hover:scale-110 transition duration-500">
            {React.createElement(icons[currentIconIndex], {
              className: `h-8 w-8  ${
                currentIconIndex === 1 && "text-sky-600 "
              } ${currentIconIndex === 0 && "text-slate-500 h-9 w-9"}`,
            })}
          </div>
        </div>
        {isHover && (
          <div
            className={`fixed right-[88px] bottom-[56px] ${
              (currentIconIndex === 0 && "bg-slate-500 h-9 w-9") ||
              (currentIconIndex === 1 && "bg-sky-600 ") ||
              (currentIconIndex === 2 && "bg-black")
            }  opacity-85 px-4 w-fit h-[30px]   grid place-items-center  rounded-md`}
          >
            <p className="text-white ">
              {(currentIconIndex === 0 && "Email Fay") ||
                (currentIconIndex === 1 && "Open LinkedIn") ||
                (currentIconIndex === 2 && "Open GitHub")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;

// import React, { useState } from "react";
// import heroImg from "../assets/hero6.svg";
// import { FaGithubSquare, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";
// import { AiTwotoneMail } from "react-icons/ai";
// import { IoIosMail } from "react-icons/io";
// import { IoDocumentTextOutline } from "react-icons/io5";

// const Hero = () => {
//   const [isHover, setIsHover] = useState(false);

//   return (
//     <div
//       className="bg-gradient-to-b from-violet-100 to-lime-100 pt-44 pb-28"
//       id="home"
//     >
//       <div className="align-element grid items-center gap-8 md:grid-cols-2 md:px-20 ">
//         <article>
//           <h1 className="text-6xl font-semibold mb-6 tracking-wider text-black">
//             Fay.
//           </h1>
//           <p className="text-4xl font-bold mb-2 tracking-wider text-violet-700">
//             Front-End Developer.
//           </p>
//           <p className="text-2xl font-semibold  tracking-wider text-gray-700">
//             Creative Problem Solver. Design strategist.
//           </p>

//           <p className="mt-2 text-lg text-w tracking-wide font-medium text-slate-500">
//             Who crafts seamless experiences, one line of code at a time.
//           </p>
//           <div className="flex gap-x-4 mt-4 items-center ">
//             <a href="https://github.com/Jpcjo" target="_blank">
//               <IoIosMail
//                 className="h-8 w-8 text-slate-400
//               hover:text-violet-600 hover:scale-125 duration-300"
//               />
//             </a>
//             <a href="https://github.com/Jpcjo" target="_blank">
//               <FaLinkedinIn className="h-6 w-6 text-slate-400 hover:text-sky-500 hover:scale-125 duration-300" />
//             </a>
//             <a href="https://github.com/Jpcjo" target="_blank">
//               <FaGithubSquare className="h-6 w-6 text-slate-400 hover:text-slate-700 hover:scale-125 duration-300" />
//             </a>
//           </div>
//         </article>
//         <article className="hidden md:block">
//           <img src={heroImg} alt="heroImgOffice" className="h-80 lg:h-auto" />
//         </article>
//       </div>
//       <div className="relative">
//         <div
//           className="btn btn-circle bg-white bg-opacity-90 border-none btn-lg fixed right-8 bottom-8 drop-shadow-lg animate-bounce hover:scale-110 hover:shadow-2xl transition duration-500 hover:bg-white"
//           onMouseEnter={() => setIsHover(true)}
//           onMouseLeave={() => setIsHover(false)}
//         >
//           <div className="indicator hover:scale-110 transition duration-500">
//             <IoDocumentTextOutline className="h-8 w-8" />
//           </div>
//         </div>
//         {isHover && (
//           <div className="fixed right-[80px] bottom-20 bg-violet-800 opacity-70 w-[100px] h-[30px]   grid place-items-center  rounded-md">
//             <p className="text-white ">Open CV</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Hero;
