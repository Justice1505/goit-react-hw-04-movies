import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import shared from "../../Shared/sharedData";

const Navigation = () => {
  return (
    <nav className={s.mainNav}>
      <NavLink
        exact
        to={shared.home}
        className={s.navLink}
        activeClassName={s.navLinkActive}
      >
        Home
      </NavLink>

      <NavLink
        to={shared.movies}
        className={s.navLink}
        activeClassName={s.navLinkActive}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
