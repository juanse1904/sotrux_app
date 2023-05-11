/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const ArrowIcon = (props) => (
  <svg
    {...props}
    style={{ top: '0', right: '0' }}
    width="55"
    height="55"
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.5 0.5H41C42.933 0.5 44.5 2.067 44.5 4V41C44.5 42.933 42.933 44.5 41 44.5H0.5V0.5Z"
      fill="#F4F7F9"
      stroke="#E9EFF4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.1042 23.1962C18.8579 22.9401 18.4505 22.932 18.1942 23.1784C18.0629 23.3047 17.9968 23.4734 17.9968 23.6424C17.9968 23.8029 18.0564 23.9635 18.1764 24.0883L22.1985 28.2713C22.3198 28.3975 22.4874 28.4688 22.6625 28.4688C22.8374 28.4688 23.005 28.3975 23.1263 28.2713L27.1485 24.0883C27.3948 23.8322 27.3869 23.4247 27.1306 23.1784C26.8743 22.932 26.4669 22.9401 26.2206 23.1962L22.6625 26.8967L19.1042 23.1962Z"
      fill="#A9A9A9"
    />
  </svg>
);
export default ArrowIcon;
