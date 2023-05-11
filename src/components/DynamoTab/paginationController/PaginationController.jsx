import React from 'react';
import styles from './paginationController.module.css';
import dwBackBack from '../../../assets/dw-back-back.svg';
import dwBack from '../../../assets/dw-back.svg';
import dwNext from '../../../assets/dw-next.svg';
import dwNextNext from '../../../assets/dw-next-next.svg';

const PaginationController = ({ handleIndex, index, dataLength }) => (
  <div className={styles.controllers_container}>
    <p>
      {' '}
      Registro
      {`${index + 1}/${dataLength}`}
    </p>
    <div className={styles.buttons_container}>
      <button type="button">
        <img src={dwBackBack} alt="" />
      </button>
      <button
        type="button"
        onClick={index > 0 ? handleIndex(index - 1) : handleIndex(0)}
      >
        <img src={dwBack} alt="" />
      </button>
      <button
        type="button"
        onClick={index + 1 === dataLength ? handleIndex(index) : handleIndex(index + 1)}
      >
        <img src={dwNext} alt="" />
      </button>
      <button type="button">
        <img src={dwNextNext} alt="" />
      </button>
    </div>
  </div>
);

export default PaginationController;
