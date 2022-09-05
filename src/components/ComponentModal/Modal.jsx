import React from "react";
import DynamoWin from "../DynamoTab/DynamicTab";
import styles from "./Modal.module.css";
import closeModal from "../../assets/closeModal.svg";
const Modal = ({ handleClose, workWin }) => {
  console.log("workWin in the modal", workWin);
  return (
    <div className={styles.popup_box}>
      <div className={styles.box}>
        <div className={styles.close_icon}>
          <button onClick={handleClose} className={styles.close_icon_container}>
            <img src={closeModal} alt="" />
          </button>
        </div>
        <DynamoWin idTable={workWin} isModal={true} />
      </div>
    </div>
  );
};

export default Modal;
