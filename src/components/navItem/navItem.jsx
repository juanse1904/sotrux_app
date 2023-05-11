import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNewTab } from '../../ducks/tabs';
import { sendActiveViewId } from '../../ducks/activeView';
import itemArrow from '../../assets/item-arrow.svg';
import './navitem.css';

const NavItem = ({
  icon, title, open, active, index, options,
}) => {
  const isActive = index === active;
  const history = useNavigate();
  const currentIndex = useSelector((state) => state.Tabs.tablesCounter);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const icons = {
    i0001: 'settings',
    i0002: 'inventory',
    i0003: 'people',
    i0004: 'machine',
    i0005: 'work-win',
    i0006: 'process',
    i0007: 'inform',
  };
  const createAndShowTab = (idtab) => {
    const identifier = `${idtab}-${currentIndex + 1}`;
    dispatch(addNewTab({ id: idtab, lang: 'es' }));
    dispatch(sendActiveViewId(identifier));
    history(`/${identifier}`);
  };

  return (
    <div className="nav-option">
      <div className="nav-item">
        <div className="nav-item-icon">
          <span className={`ico icon-icon-${icons[icon]} navbar-icon ${isActive ? 'navbar-icon-active' : ''}`} />
        </div>
        <div className={`nav-item-title-container-hidden ${open ? 'nav-item-title-container' : ''}`}>
          <p className={`nav-item-title ${open ? 'title-open' : ''}`}>{title}</p>
        </div>
        <div className={`nav-item-arrow-container-hidden ${open ? 'nav-item-arrow-container' : ''}`}>
          <button
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}

          >
            <img
              className={`${open ? 'nav-item-arrow' : 'nav-item-arrow-hidden'} ${
                isOpen && isActive ? 'nav-item-arrow-expanded' : ''
              }`}
              src={itemArrow}
              alt=""
            />

          </button>
        </div>
        <div className="nav-item-2 ">
          <div className={`item-list-indicator ${isActive ? 'item-list-indicator-active' : ''}`} />
        </div>
      </div>
      <div className={`item-list ${isOpen && isActive && open ? 'item-list-open' : ''}`}>
        {options.map((option) => (
          <button
            type="button"
            key={option.id}
            className="item-list-container"
            onClick={() => {
              createAndShowTab(option.action);
            }}
          >
            <span className={`ico icon-icon-${icons[option.icon]} icon-children`} />
            <p className={`item-list-option ${isOpen && isActive ? 'item-list-option-open' : ''}`}>{option.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavItem;
