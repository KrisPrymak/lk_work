import React from "react";
import style from "./ButtonEnter.module.css";
import LoginIcon from "@mui/icons-material/Login";

const ButtonEnter = () => {
  return (
    <button className={style.auth__button}>
      <LoginIcon fontSize="small" />

      <span className={style.auth__text}>Войти</span>
    </button>
  );
};

export default ButtonEnter;
