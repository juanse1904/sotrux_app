import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './navbar.css';
import NavItem from '../navItem/navItem';
import arrows from '../../assets/arrows-nav.svg';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const userMenu = useSelector((state) => state.userData.menu);

  return (
    <nav className={`layout-navbar-closed ${open ? 'layout-navbar-open' : ''}`}>
      <button
        type="button"
        onClick={() => {
          setOpen(!open);
        }}
        className="arrow-collapse"
      >
        <img src={arrows} className={`arrow-closed ${open ? 'arrow-open' : ''}`} alt="" />
      </button>
      {userMenu.map((item, index) => (
        <button
          type="button"
          key={item.id}
          onClick={() => {
            setActive(index);
          }}
        >
          <NavItem
            index={index}
            active={active}
            icon={item.imageurl}
            title={item.name}
            options={item.sons}
            open={open}
          />
        </button>
      ))}
    </nav>
  );
};

export default NavBar;
