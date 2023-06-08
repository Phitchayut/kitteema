import { useState } from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Mainshow from "./components/Mainshow";
import Review from "./components/Review";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="container mx-auto">
        <Navbar text="Kitteema" />
        <Menu />
        <Mainshow />
        <Review />
        <Contact />
      </div>
    </div>
  );
}

export default App;
