import React, { useState } from "react";
import "./navbar.css";
import NavItem from "../navItem/navItem";
import arrows from "../../assets/arrows-nav.svg";
import navBarData from "./navBarData";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <nav className={`layout-navbar-closed ${open ? "layout-navbar-open" : ""}`}>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="arrow-collapse"
      >
        <img src={arrows} className={`arrow-closed ${open ? "arrow-open" : ""}`} alt="" />
      </div>
      {navBarData.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            setActive(index);
          }}
        >
          <NavItem
            index={index}
            active={active}
            icon={item.icon}
            title={item.title}
            options={item.options}
            open={open}
          />
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
