import React, { useEffect } from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import ScrollReveal from "scrollreveal";
import ToggleBtn from "./components/ToggleBtn";
const App = () => {
  return (
    <div
      className=""
      id="home"
    >
      <NavBar />
      <ToggleBtn/>
      <Home />
    </div>
  );
};

export default App;
