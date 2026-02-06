import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSun } from "react-icons/fi";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="nav " >
        <div className="">
          <div className="nav-div">
          <h2 className="">Bhavya</h2>
        <div className="md-items ">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#project">Projects</a>
        </div>
        <button
          className="sm-btn"
          onClick={() => setOpen(!open)}
        >
          <RxHamburgerMenu size={30} />
        </button>
        </div>
        </div>
      </nav>
      {open && (
        <div
          className="sm-BtnFun "
          onClick={() => setOpen(!open)}
        />
      )}
      <div
        className={` sm-div ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button className=" sm-clsBtn" onClick={() => setOpen(!open)}>
          <RiCloseLine size={30} />
        </button>
        <div className="sm-navDiv">
          <a href="#home" onClick={()=>setOpen(!open)}>Home</a>
          <a href="#about" onClick={()=>setOpen(!open)}>About</a>
          <a href="#skills" onClick={()=>setOpen(!open)}>Skills</a>
          <a href="#project" onClick={()=>setOpen(!open)}>Projects</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
