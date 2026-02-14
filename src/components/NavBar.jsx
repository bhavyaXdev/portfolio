import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSun } from "react-icons/fi";
import { GoDownload } from "react-icons/go";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 
 w-[92%] sm:w-[85%] lg:w-[80%] md:w-[90%]
  max-w-6xl 
z-50 " >
        <div className="">
          <div className="flex justify-between items-center  lg:px-25 px-10 lg:mx-auto rounded-3xl py-3 bg-[#f0acbf]  text-[#883640]  font-medium shadow-[0_3px_5px_#7a5863]  max-sm:py-2 dark:shadow-[0_4px_5px_#121212]">
          <h3 className="">Bhavya</h3>
        <div className="md:flex hidden justify-center items-center gap-10 ">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#project">Projects</a>
          <a href="/Bhavya Resume Updated.pdf"   className="flex items-center gap-2" target="_blank" rel="noopener noreferrer">Resume <GoDownload/></a>
        </div>
        <button
          className="md:hidden text-[#6b1330] "
          onClick={() => setOpen(!open)}
        >
          <RxHamburgerMenu size={30} />
        </button>
        </div>
        </div>
      </nav>
      {open && (
        <div
          className="z-50 md:hidden  fixed inset-0 bg-black/40 min-h-dvh"
          onClick={() => setOpen(!open)}
        />
      )}
      <div
        className={`  bg-[#e7a4ba] w-50 min-h-dvh font-medium text-[#6b1330] md:hidden z-60 p-5 fixed top-0 left-0 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button className=" md:hidden " onClick={() => setOpen(!open)}>
          <RiCloseLine size={30} />
        </button>
        <div className="md:hidden flex flex-col p-5 gap-5 ">
          <a href="#home" onClick={()=>setOpen(!open)}>Home</a>
          <a href="#about" onClick={()=>setOpen(!open)}>About</a>
          <a href="#skills" onClick={()=>setOpen(!open)}>Skills</a>
          <a href="#project" onClick={()=>setOpen(!open)}>Projects</a>
          <a href="/Bhavya Resume Updated.pdf" target="_blank" rel="noopener noreferrer"  className="flex items-center gap-1" onClick={()=>setOpen(!open)}>Resume <GoDownload/></a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
