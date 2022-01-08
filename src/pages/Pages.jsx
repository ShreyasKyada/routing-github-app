import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      {/* <Route path="*" element={"Not found"} ></Route> */}
    </Routes>
  );
};

export default Pages;
