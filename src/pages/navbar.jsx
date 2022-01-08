import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <button>
        <Link to="/">Home page</Link>
      </button>
        <Link to="/about">About page</Link>
    </>
  );
};

export default Navbar;
