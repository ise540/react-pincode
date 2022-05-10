import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import classes from "./PincodeForm.module.css";
import { useNavigate } from "react-router-dom";

export default function PincodeForm({
  length,
  validator,
  validtionModal,
  ...props
}) {
  const multiInput = [];

  const nav = useNavigate();

  const [pincode, setPincode] = useState({});
  let reg = new RegExp("^\\d+$");
  for (let i = 0; i < length; i++) {
    multiInput.push(
      <Input
        className={classes.singleInput}
        name={i}
        key={i}
        onKeyDown={(e) => {
          e.preventDefault();

          if (e.keyCode === 8) {
            e.target.value = "";
            if (e.target.previousElementSibling)
              e.target.previousElementSibling.focus();
          }
          if (reg.test(e.key)) {
            e.target.value = e.key;
            if (e.target.nextElementSibling) {
              e.target.nextElementSibling.focus();
            }
          }
          setPincode((prevPincode) => {
            return { ...prevPincode, [i]: e.target.value };
          });
        }}
      />
    );
  }

  return (
    <div className={classes.pageContent}>
      <div>{multiInput}</div>

      <Button
        className={classes.Button}
        onClick={() => {
          validtionModal();
          validator(pincode);
        }}
      >
        Проверить
      </Button>
      <Button
      className={classes.Button+ " "+ classes.resetButton}
        onClick={() => {
          localStorage.removeItem("pass");
          nav("/registration");
        }}
      >
        Сбросить пароль
      </Button>
    </div>
  );
}
