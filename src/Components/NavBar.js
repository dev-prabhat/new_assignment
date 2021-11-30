import React from "react";
import Navitem from "./NavItem";

const NavBar = () => {
  return (
    <div>
      <ul className="navitem">{<Navitem />}</ul>
    </div>
  );
};

export default NavBar;
