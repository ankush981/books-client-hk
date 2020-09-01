import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="mb-4 d-flex">
      <NavLink to="/">Books</NavLink>
      <NavLink to="/authors">Authors</NavLink>
      <NavLink to="/book/create">Create Book</NavLink>
      <NavLink to="/author/create">Create Author</NavLink>
    </nav>
  );
};

export default Navigation;
