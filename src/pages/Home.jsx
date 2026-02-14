import React, { useEffect, useState } from "react";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ToggleBtn from "../components/ToggleBtn";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import ScrollReveal from "scrollreveal";
import { GoDownload } from "react-icons/go";
import { IoMdContact } from "react-icons/io";

const Home = () => {
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      origin: "bottom",
      distance: "70px",
      duration: 700,
      delay: 100,
      easing: "ease-in-out",
      reset: true,
    });
  }, []);
  return (
    <>
      <div
      
        className="
          w-full   
        "
      >
        
       <div className=" max-w-6xl mx-auto">
         <div
          className="
            overflow-hidden 
               max-w-5xl mx-auto min-h-100 
            pt-30 md:pt-10 lg:mt-15
            text-[#b64754]  max-sm:text-center
            lg:gap-20  dark:text-pink-200  justify-center 
            md:flex  md:px-20 md:justify-around gap-10
          "
        >
          
          <div
            className=" reveal

              p-5 
               lg:max-w-xl md:p-3 md:mt-10 lg:mt-5
            "
          >
            <h5
              className="
                font-semibold
              "
            >
              Hello,
            </h5>

            <h5
              className="
                font-extrabold text-2xl
                lg:text-5xl md:text-4xl
              "
            >
              I'm Bhavya!
            </h5>
            <br />
            <h5
              className="
                font-bold
                lg:text-2xl
              "
            >
              And I'm a
              <span
                className="
                  text-[#6b1330]
                  dark:text-[#f88c99]
                "
              >
                {" "}
                Full Stack Developer
              </span>
            </h5>
            <p
              className="
                mt-5
                text-sm
                md:text-base
              "
            >
              Hi, I’m a{" "}
              <span
                className="
                  text-[#6b1330]
                  dark:text-[#f88c99]
                "
              >
                web developer
              </span>{" "}
              who loves building clean, interactive, and user-friendly websites
              that look great on every device.
            </p>
            <div
              className="
                flex max-sm:justify-center max-sm:mx-auto
                w-50 
                mt-5
                ms-5 gap-5
              "
            >
              <a
             aria-label="Email me"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bhavya512500@gmail.com&su=Portfolio%20Contact&body=Hi%20Bhavya%2C%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0AName%3A%0AEmail%3A%0AMessage%3A"
                target="_black"
                className="
                  flex
                  w-10 h-10
                  text-xl text-[#6b1330]
                  border rounded-full
                  transition-all
                  justify-center items-center hover:shadow-[0_0_15px_#dd7783] duration-300 dark:text-[#f8bec5]
                  md:text-2xl
                "
              >
                <SiGmail />
              </a>
              <a
                href="https://github.com/bhavyaXdev"
                target="_blank"
                className="
                  flex
                  w-10 h-10
                  text-xl text-[#6b1330]
                  border rounded-full
                  transition-all
                  justify-center items-center hover:shadow-[0_0_15px_#dd7783] duration-300 dark:text-[#f8bec5]
                  md:text-2xl
                "
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/bhavyasagarxdev/"
                target="_black"
                className="
                  flex
                  w-10 h-10
                  text-xl text-[#6b1330]
                  border rounded-full
                  transition-all
                  justify-center items-center hover:shadow-[0_0_15px_#dd7783] duration-300 dark:text-[#f8bec5]
                  md:text-2xl
                "
              >
                <FaLinkedin />
              </a>
            </div>
            <div
              className="
                py-10 flex gap-5 max-sm:justify-center max-sm:mx-auto 
              "
            >
              <a
                href="/Bhavya Resume Updated.pdf" target="_blank"
                className=" flex items-center gap-1
                  px-5 py-1 
                  text-[16px] text-[#6b1338] font-medium 
                   rounded-full bg-linear-150 from-[#f397ab] from-15%  to-[#efbdf0]
                 cursor-pointer shadow-[0_2px_3px_#7a5863]  transform dark:bg-linear-150 dark:from-[#f397ab]   dark:to-[#efbdf0]
                  dark:text-[#6b1338] dark:border-0  transition-transform duration-300 ease-in-out hover:scale-105 dark:hover:scale-100 dark:shadow-[0_4px_5px_#121212]
                "
              >
                Resume <GoDownload/>
              </a>
              <a
                href="#contact"
                className=" flex items-center gap-1
                  px-5 py-1 
                  text-[16px] text-[#6b1338] font-medium 
                   rounded-full bg-linear-150 from-[#f397ab] from-15% to-[#efbdf0]
                 cursor-pointer shadow-[0_2px_3px_#7a5863]  transform dark:bg-linear-150 dark:from-[#f397ab]   dark:to-[#efbdf0]
                  dark:text-[#6b1338] dark:border-0 transition-transform duration-300 ease-in-out hover:scale-105 dark:hover:scale-100 dark:shadow-[0_4px_5px_#121212]
                "
              >
                Contact <IoMdContact/>
              </a>
            </div>
          </div>
          <div
            className="
              lg:max-w-sm md:w-xl 
              p-10  reveal
              justify-center items-center
              md:flex md:mt-0 md:px-0 
            "
          >
            <div
              className="
                flex
                p-5 
                bg-linear-105 from-[#f1c0f3] from-10% to-[#f3b3be]
                border-[#dd7783] rounded-2xl shadow-md 
                shadow-[#464344] dark:shadow-[0_4px_10px_#121212]
                justify-center items-center
                aspect-square  md:mx-0 lg:p-6 md:p-5
              "
            >
              <div
                className="
                  flex
                  border-2 border-[#dd7783] rounded-2xl
                  transition-transform shadow-[0_0_20px_#464344]
                  justify-center items-center duration-300 hover:scale-105
                  
                "
              >
                <img
                  src="profimg.jpeg"
                  alt=""
                  className="
                    rounded-2xl
                  "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="reveal min-h-100  max-w-5xl mx-auto">
          <About />
        </div>
        <div className="reveal min-h-100 max-w-5xl mx-auto">
          <Skills />
        </div>
        <div className="reveal min-h-100  max-w-5xl mx-auto">
          <Project />
        </div>
        <div className="reveal min-h-100">
          <Contact />
        </div>
       </div>
      </div>
    </>
  );
};

export default Home;
