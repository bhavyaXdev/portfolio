import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
const ToggleBtn = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme")==="dark");
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <div
        className="
          flex z-100
          p-3
          bg-[#f5bbcb]
          border-pink-200 rounded-full
          shadow-[0_3px_5px_#7a5863]
          fixed top-23 right-5 justify-center items-center dark:shadow-[0_2px_10px_#000]
          lg:top-5 lg:right-10 hover:scale-110 transition-all duration-300
        "
      >
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="
            text-[#6b1330] text-2xl
            border-0
            cursor-pointer
            outline-0
          "
        >
          {darkMode ? <FiMoon /> : <FiSun />}
        </button>
      </div>
    </>
  );
};

export default ToggleBtn;
