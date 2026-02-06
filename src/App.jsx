import React, { useEffect } from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import ScrollReveal from "scrollreveal";
const App = () => {
  return (
    <div
      className="app"
      
    >
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
