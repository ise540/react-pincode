import React from "react";
import classes from "./Modal.module.css";
import CloseButton from "../CloseButton";

export default function Modal({ children, visible, setVisible, ...props }) {
  const modalClass = [classes.modal];

  if (visible) {
    modalClass.push(classes.modal_active);
  }

  const closeButtonStyle = {
    position: 'absolute',
    top: '5px',
    right:'10px',
    fontSize: '35px',
    cursor: 'pointer'
  }

  return (
    <div
      className={modalClass.join(" ")}
      onClick={() => {
        setVisible(false);
      }}
    >
      
      <div
        className={classes.modalContent}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <CloseButton className={classes.closeButton} onClick={()=>setVisible(false)} style={closeButtonStyle}/>
        {children}
      </div>
    </div>
  );
}
