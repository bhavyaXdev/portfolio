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
      id="home"
        className="
          w-full h-auto  
        "
      >
        <ToggleBtn />
        <div
          className="
            overflow-hidden 
            h-auto 
            py-30 md:py-10
            text-[#b64754]  max-sm:text-center
            gap-15 dark:text-pink-200 items-center justify-center
            md:flex lg:py-20 md:px-20
          "
        >
          <div
            className=" reveal
              h-100 
              p-5 py-0
              lg:w-120 md:p-3 
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
                w-50 h-auto
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
                href="#project"
                className="
                  px-5 py-1 
                  text-[16px] text-[#6b1338] font-medium 
                   rounded-full bg-linear-150 from-[#f397ab] from-15%  to-[#efbdf0]
                 cursor-pointer shadow-[0_2px_3px_#7a5863]  transform dark:bg-linear-150 dark:from-[#f397ab]   dark:to-[#efbdf0]
                  dark:text-[#6b1338] dark:border-0 inline-block transition-transform duration-300 ease-in-out hover:scale-105 dark:hover:scale-100 dark:shadow-[0_4px_5px_#121212]
                "
              >
                Projects
              </a>
              <a
                href="#contact"
                className="
                  px-5 py-1 
                  text-[16px] text-[#6b1338] font-medium 
                   rounded-full bg-linear-150 from-[#f397ab] from-15% to-[#efbdf0]
                 cursor-pointer shadow-[0_2px_3px_#7a5863]  transform dark:bg-linear-150 dark:from-[#f397ab]   dark:to-[#efbdf0]
                  dark:text-[#6b1338] dark:border-0 inline-block transition-transform duration-300 ease-in-out hover:scale-105 dark:hover:scale-100 dark:shadow-[0_4px_5px_#121212]
                "
              >
                Contact
              </a>
            </div>
          </div>
          <div
            className="
              h-auto
              p-5  reveal
              justify-center items-center
              md:flex md:w-100 md:mt-0 md:p-0
            "
          >
            <div
              className="
                flex
                mx-auto p-5
                bg-linear-105 from-[#f1c0f3] from-10% to-[#f3b3be]
                border-[#dd7783] rounded-2xl shadow-md 
                shadow-[#464344] dark:shadow-[0_4px_10px_#121212]
                justify-center items-center
                lg:w-90 lg:h-90 md:mx-0 lg:p-0 md:p-5
              "
            >
              <div
                className="
                  flex
                  border-2 border-[#dd7783] rounded-2xl
                  transition-transform shadow-[0_0_20px_#464344]
                  justify-center items-center duration-300 hover:scale-105
                  lg:w-72 lg:h-72 md:w-50 md:h-50
                "
              >
                <img
                  src="anime pfp.jpg"
                  alt=""
                  className="
                    rounded-2xl
                  "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="reveal">
          <About />
        </div>
        <div className="reveal">
          <Skills />
        </div>
        <div className="reveal">
          <Project />
        </div>
        <div className="reveal">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Home;
