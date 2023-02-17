import React, { useState } from "react";
import ButtonEnter from "./ButtonEnter/ButtonEnter";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import PopupSuccess from "./PopupSuccess/PopupSuccess";
import style from "./Registration.module.css";
import logo from "./../../media/logo-2-color 1.png";
import RegistrationForm from "./RegistrationForm/RegistrationForm";

function Registration() {
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(null);
  const [telNumber, setTelNumber] = useState(null);
  const [checkbox, setCheckbox] = useState(null);

  const onHandleSubmit = (e) => {
    const pattern = new RegExp("[0-9]{11}");

    if (telNumber && checkbox) {
      if (pattern.test(telNumber)) {
        // отправляем временный пароль
        setIsRegistrationSuccess(true);
      }
    } else {
      setIsRegistrationSuccess(false);
    }
  };

  const handleChangeInput = (e) => {
    setTelNumber(e.target.value);
  };

  const handleChangeChekbox = (e) => {
    setCheckbox(e.target.value);
  };

  return (
    <div className={style.container}>
      {isRegistrationSuccess && <PopupSuccess />}
      <HeaderMobile />
      <main className={style.main}>
        <ButtonEnter />
        <div className={style.main__content}>
          <img
            className={style.main__logoDesktop}
            src={logo}
            alt="Логотип СККОД"
          />
          <RegistrationForm
            handleChangeInput={handleChangeInput}
            telNumber={telNumber}
            onHandleSubmit={onHandleSubmit}
            isRegistrationSuccess={isRegistrationSuccess}
            handleChangeChekbox={handleChangeChekbox}
          />
        </div>
      </main>
    </div>
  );
}

export default Registration;
