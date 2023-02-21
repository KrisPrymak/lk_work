import React from "react";
import style from "./ButtonEnter.module.css";
import LoginIcon from "@mui/icons-material/Login";
import {NavLink} from "react-router-dom";

const ButtonEnter = () => {
  return (
    <NavLink to={'/'} className={style.auth__button}>
      <LoginIcon fontSize="small" />

      <span className={style.auth__text}>Войти</span>
    </NavLink>
  );
};

export default ButtonEnter;
