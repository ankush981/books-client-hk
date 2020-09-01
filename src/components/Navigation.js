import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="mb-4 d-flex">
      <NavLink to="/">Home</NavLink>
    </nav>
  );
};

export default Navigation;
