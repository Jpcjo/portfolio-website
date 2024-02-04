import React, { useState, useEffect } from "react";
import heroImg from "../assets/hero6.svg";
import { FaGithubSquare, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

const Hero = () => {
  const [isHover, setIsHover] = useState(false);
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [showSecondSentence, setShowSecondSentence] = useState(false);

  const icons = [IoIosMail, FaLinkedinIn, FaGithubSquare, BsFillTelephoneFill];
  const links = [
    "mailto:fwudesign@gmail.com",
    "https://www.linkedin.com/in/faywudesign/",
    "https://github.com/Jpcjo",
    "tel:0401204458",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 4000);

    const sentenceInterval = setInterval(() => {
      setShowSecondSentence((prev) => !prev);
    }, 3500);

    return () => {
      clearInterval(interval);
      clearInterval(sentenceInterval);
    };
  }, []);

  let timeoutId;

  const handleIconClick = () => {
    const link = links[currentIconIndex];
    const target =
      currentIconIndex === 0 || currentIconIndex === 3 ? "_self" : "_blank";

    window.open(link, target);

    clearTimeout(timeoutId);

    // Set a timeout to delay setIsHover(false) for 4 seconds
    timeoutId = setTimeout(() => {
      setIsHover(false);
    }, 4000);
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
          <div className="relative overflow-y-hidden h-[62px] xl:h-10 w-full">
            <p
              className={`text-2xl font-semibold tracking-wider text-gray-700 absolute transition-transform duration-[1600ms] ${
                showSecondSentence
                  ? "transform -translate-y-full opacity-10"
                  : "transform translate-y-0"
              }`}
            >
              Creative Problem Solver. Design strategist.
            </p>
            <p
              className={`text-2xl font-semibold tracking-wider text-gray-700 absolute transition-transform duration-[1600ms] ${
                showSecondSentence
                  ? "transform translate-y-0"
                  : "transform -translate-y-full opacity-10"
              }`}
            >
              Innovative solutions. Impeccable results.
            </p>
          </div>

          <p className="mt-2 text-lg text-w tracking-wide font-medium text-slate-500">
            Who crafts seamless experiences, one line of code at a time.
          </p>

          <div className="flex flex-row gap-x-8">
            <a href="#projects">
              <div className="btn mt-8 bg-violet-700 text-white text-lg hover:bg-violet-600 hover:scale-105 duration-300 hover:animate-pulse">
                Projects
              </div>
            </a>
            {/* <a href={fayWuCV} download>
              <IoDocumentText className="mt-8 w-12 h-12 text-violet-700  hover:text-violet-600 hover:scale-105 duration-300 hover:animate-pulse" />
            </a> */}
          </div>

          {/* <div className="flex gap-x-4 mt-4 items-center ">
            <a href="https://github.com/Jpcjo" target="_blank">
              <FaLinkedinIn className="h-6 w-6 text-slate-400 hover:text-sky-500 hover:scale-125 duration-300" />
            </a>
            <a href="https://github.com/Jpcjo" target="_blank">
              <FaGithubSquare className="h-6 w-6 text-slate-400 hover:text-slate-700 hover:scale-125 duration-300" />
            </a>
          </div> */}
        </article>
        <article className="hidden md:block">
          <img src={heroImg} alt="heroImgOffice" className="h-80 lg:h-auto" />
        </article>
      </div>
      <div className="relative">
        <div
          className="btn btn-circle bg-white bg-opacity-90 border-none btn-lg fixed right-8 bottom-8 drop-shadow-lg animate-bounce hover:scale-110 hover:shadow-2xl transition duration-500 hover:bg-white z-[10000]"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={handleIconClick}
        >
          <div className="indicator hover:scale-110 transition hover:animate-pulse duration-500">
            {React.createElement(icons[currentIconIndex], {
              className: `h-8 w-8  ${
                (currentIconIndex === 1 && "text-sky-600 ") ||
                (currentIconIndex === 0 && "text-slate-500 h-9 w-9") ||
                (currentIconIndex === 3 && "text-violet-800 h-7 w-7")
              } `,
            })}
          </div>
        </div>
        {isHover && (
          <div
            className={`fixed right-[88px] bottom-[56px] z-[10001]  ${
              (currentIconIndex === 0 && "bg-slate-500 h-9 w-9") ||
              (currentIconIndex === 1 && "bg-sky-600 ") ||
              (currentIconIndex === 2 && "bg-black") ||
              (currentIconIndex === 3 && "bg-violet-800")
            }  opacity-85 px-4 w-fit h-[30px]   grid place-items-center  rounded-md`}
          >
            <p className="text-white ">
              {(currentIconIndex === 0 && "Email Fay") ||
                (currentIconIndex === 1 && "Open LinkedIn") ||
                (currentIconIndex === 2 && "Open GitHub") ||
                (currentIconIndex === 3 && "Call Fay")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;

// import React, { useState, useEffect } from "react";
// import heroImg from "../assets/hero6.svg";
// import { FaGithubSquare, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";
// import { AiTwotoneMail } from "react-icons/ai";
// import { IoIosMail } from "react-icons/io";
// import { IoDocumentTextOutline } from "react-icons/io5";
// import { BsFillTelephoneFill } from "react-icons/bs";

// const Hero = () => {
//   const [isHover, setIsHover] = useState(false);
//   const [currentIconIndex, setCurrentIconIndex] = useState(0);

//   const icons = [IoIosMail, FaLinkedinIn, FaGithubSquare, BsFillTelephoneFill];
//   const links = [
//     "mailto:fwudesign@gmail.com",
//     "https://www.linkedin.com/in/faywudesign/",
//     "https://github.com/Jpcjo",
//     "tel:0401204458",
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
//     }, 4000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   let timeoutId;

//   const handleIconClick = () => {
//     const link = links[currentIconIndex];
//     const target =
//       currentIconIndex === 0 || currentIconIndex === 3 ? "_self" : "_blank";

//     window.open(link, target);

//     clearTimeout(timeoutId);

//     // Set a timeout to delay setIsHover(false) for 4 seconds
//     timeoutId = setTimeout(() => {
//       setIsHover(false);
//     }, 4000);
//   };

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

//           <div className="flex flex-row gap-x-8">
//             <a href="#projects">
//               <div className="btn mt-8 bg-violet-700 text-white text-lg hover:bg-violet-600 hover:scale-105 duration-300 hover:animate-pulse">
//                 Projects
//               </div>
//             </a>
//             {/* <a href={fayWuCV} download>
//               <IoDocumentText className="mt-8 w-12 h-12 text-violet-700  hover:text-violet-600 hover:scale-105 duration-300 hover:animate-pulse" />
//             </a> */}
//           </div>

//           {/* <div className="flex gap-x-4 mt-4 items-center ">
//             <a href="https://github.com/Jpcjo" target="_blank">
//               <FaLinkedinIn className="h-6 w-6 text-slate-400 hover:text-sky-500 hover:scale-125 duration-300" />
//             </a>
//             <a href="https://github.com/Jpcjo" target="_blank">
//               <FaGithubSquare className="h-6 w-6 text-slate-400 hover:text-slate-700 hover:scale-125 duration-300" />
//             </a>
//           </div> */}
//         </article>
//         <article className="hidden md:block">
//           <img src={heroImg} alt="heroImgOffice" className="h-80 lg:h-auto" />
//         </article>
//       </div>
//       <div className="relative">
//         <div
//           className="btn btn-circle bg-white bg-opacity-90 border-none btn-lg fixed right-8 bottom-8 drop-shadow-lg animate-bounce hover:scale-110 hover:shadow-2xl transition duration-500 hover:bg-white z-[10000]"
//           onMouseEnter={() => setIsHover(true)}
//           onMouseLeave={() => setIsHover(false)}
//           onClick={handleIconClick}
//         >
//           <div className="indicator hover:scale-110 transition hover:animate-pulse duration-500">
//             {React.createElement(icons[currentIconIndex], {
//               className: `h-8 w-8  ${
//                 (currentIconIndex === 1 && "text-sky-600 ") ||
//                 (currentIconIndex === 0 && "text-slate-500 h-9 w-9") ||
//                 (currentIconIndex === 3 && "text-violet-800 h-7 w-7")
//               } `,
//             })}
//           </div>
//         </div>
//         {isHover && (
//           <div
//             className={`fixed right-[88px] bottom-[56px] z-[10001]  ${
//               (currentIconIndex === 0 && "bg-slate-500 h-9 w-9") ||
//               (currentIconIndex === 1 && "bg-sky-600 ") ||
//               (currentIconIndex === 2 && "bg-black") ||
//               (currentIconIndex === 3 && "bg-violet-800")
//             }  opacity-85 px-4 w-fit h-[30px]   grid place-items-center  rounded-md`}
//           >
//             <p className="text-white ">
//               {(currentIconIndex === 0 && "Email Fay") ||
//                 (currentIconIndex === 1 && "Open LinkedIn") ||
//                 (currentIconIndex === 2 && "Open GitHub") ||
//                 (currentIconIndex === 3 && "Call Fay")}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Hero;
