import React from "react";
import NavData from "../NavData";

const NavItem = () => {
  return NavData.map((data) => (
    <div key={data.id}>
      <h4>{data.title}</h4>
      {data.class}
    </div>
  ));
};

export default NavItem;
