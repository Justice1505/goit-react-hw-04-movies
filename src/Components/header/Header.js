import React from "react";
import Navigation from "../navigation/Navigation";
import s from "./header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
};

export default Header;
