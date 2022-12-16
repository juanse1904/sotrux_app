import React from "react";
import styles from "./paginationController.module.css";
import dw_back_back from "../../../assets/dw-back-back.svg";
import dw_back from "../../../assets/dw-back.svg";
import dw_next from "../../../assets/dw-next.svg";
import dw_next_next from "../../../assets/dw-next-next.svg";
const PaginationController = ({ handleIndex, index, dataLength }) => {
  return (
    <div className={styles.controllers_container}>
      <p> Registro {`${index + 1}/${dataLength}`}</p>
      <div className={styles.buttons_container}>
        <button>
          <img src={dw_back_back} alt="" />
        </button>
        <button
          onClick={() => {
            index > 0 ? handleIndex(index - 1) : handleIndex(0);
          }}
        >
          <img src={dw_back} alt="" />
        </button>
        <button
          onClick={() => {
            index + 1 === dataLength ? handleIndex(index) : handleIndex(index + 1);
          }}
        >
          <img src={dw_next} alt="" />
        </button>
        <button>
          <img src={dw_next_next} alt="" />
        </button>
      </div>
    </div>
  );
};

export default PaginationController;
