import React from "react";
import NavData from "../NavData";

const NavItem = () => {
  return NavData.map((data) => (
    <li key={data.id}>
      <h4>{data.title}</h4>
      {data.class}
    </li>
  ));
};

export default NavItem;
