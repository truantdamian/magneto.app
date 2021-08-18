import React from "react";
import { NavLink } from "react-router-dom";
import { detectorRoute, mutantsListRoute } from "Constants/routes";

import { container, active } from "./style.css";

const NavBar = () => {
  return (
    <nav className={container}>
      <ul>
        <li>
          <NavLink activeClassName={active} to={detectorRoute}>
            DETECTOR
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={active} to={mutantsListRoute}>
            MUTANTES
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
