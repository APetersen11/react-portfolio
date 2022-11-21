// About Me, Portfolio, Contact, Resume

import React from "react";
import NavLink from "../NavLink";

const Nav = ({ currentCategory, setCurrentCategory, categories }) => {
  return (
    <nav>
      {categories.map((categoryName) => (
      <NavLink  key={categoryName} categoryName={categoryName} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}/>
      ))}
    </nav>
  );
};

export default Nav;
