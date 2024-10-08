import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import classNames from 'classnames';
import logoSotrux from '../../assets/sotrux-logo.svg';
import bellIcon from '../../assets/bell-icon.svg';
import dialogIcon from '../../assets/dialog-icon.svg';
import xClose from '../../assets/x-close.svg';
import { logOut } from '../../aws-utils/aws-utils';
import burguerIcon from '../../assets/burguer-icon.svg';
import './header.css';

const Header = () => {
  const [firstClick, setFirstClick] = useState(false);
  const [showed, setShowed] = useState(false);
  const [closed, setClosed] = useState(true);
  const history = useNavigate();
  const dataUser = useSelector((state) => state.userData);

  const logOutAction = async () => {
    await logOut();
    history('/login');
  };
  return (
    <header>
      <div className="logo-stam">
        <img src={logoSotrux} alt="sotrux-logo" />
      </div>
      <div className="header-section-2">
        <img src={dialogIcon} alt="dialog-icon-feedback" />
        <p>¿Qué nos hace falta?</p>
      </div>
      <div className="header-section-2">
        <button type="button" onClick={logOutAction}>Cerrar sesión</button>
      </div>
      <div className="header-user-options">
        <p>
          {dataUser.ad_clientname}
          {' '}
          |
          {' '}
        </p>
        <span>{dataUser.rolename}</span>
        <img src="https://pbs.twimg.com/profile_images/1369450104445407234/VORjeSWO_400x400.jpg" alt="" />
      </div>
      <div className="header-notifications">
        <img src={bellIcon} alt="" />
        <div className="header-notifications-balloon">
          <p>1</p>
        </div>
      </div>
      <button
        type="button"
        className="burguer-icon"
        onClick={() => {
          setShowed(true);
          setClosed(false);
          setFirstClick(true);
        }}
      >
        <img src={burguerIcon} alt="" />
      </button>

      <div
        className={classNames({
          homepage_hiden: !firstClick && !showed && closed,
          homepage_mobile_options_show: showed && !closed,
          homepage_mobile_options_hide: !showed && closed,

        })}
      >
        <div className="options_subheader">
          <div className="options_subheader_itb_logo">
            <img src={logoSotrux} alt="sotrux-logo" />
          </div>

          <div className="cancelx_container">
            <button
              onClick={() => {
                setShowed(false);
                setClosed(true);
              }}
              type="button"
              aria-label="close header"
            />
            <img
              src={xClose}
              alt="close-menu-icon"
              id="cancelx"
            />
          </div>
        </div>
        <div className="options_subbody" />
        <div className="options_subfooter">
          <div className="subfooter_line" />
          <p>© IT&B SERVICES 2021, todos los derechos reservados.</p>
          <div className="options_subfooter__networks">
            <div className="options_subfooter__networks__item">
              <img
                src="https://itb-website.s3.us-east-2.amazonaws.com/public/icons/blog-icon.png"
                width={100}
                height={74}
                alt="blog_icon"
              />
            </div>
            <div className="options_subfooter__networks__item">
              <img
                src="https://itb-website.s3.us-east-2.amazonaws.com/public/icons/fb-icon.png"
                width={67}
                height={67}
                alt="fb_icon"
              />
            </div>
            <div className="options_subfooter__networks__item">
              <img
                src="https://itb-website.s3.us-east-2.amazonaws.com/public/icons/linkedin-icon.png"
                width={68}
                height={69}
                alt="Linkedin_icon"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
