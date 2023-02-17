import React from "react";
import style from "./PopupSuccessTemplate.module.css";
import roundDone from "./../../../media/roundDone.svg";
import { Icon } from "@iconify/react";
import BlueButton from "../BlueButton/BlueButton";

const PopupSuccessTemplate = ({text, subtext, handleClick}) => {
  return (
    <div className={style.popupBg}>
      <div className={style.popup}>
        <div className={style.popup__content}>
          <Icon icon="material-symbols:close" className={style.popup__cross} onClick={() => {handleClick(false)}}/>
                <div>
                <img src={roundDone} alt="roundDone" />
                <h1 className={style.title}>{text}</h1>
                {subtext && 
                <p className={style.text}>
                  Вы записались на услугу. Талон будет зарезервирован за Вами до
                  <span className={style.date}> 13.01</span>. Вам надо оплатить услугу в регистратуре чтобы талон не
                  пропал.
                </p>}
                <div className={style.info}>
                  <p>
                    <Icon icon="carbon:result" className={style.info__icon} />
                    Прием (осмотр, консультация) врача-онколога первичный
                  </p>
                  <p>
                    <Icon
                      icon="healthicons:doctor-outline"
                      className={style.info__icon}
                    />
                    Полетаева А. С.
                  </p>
                  <p>
                    <Icon icon="ph:calendar-blank" className={style.info__icon} />
                    14.01.2023; 14:00
                  </p>
                </div>
                <div className={style.submitButton__desktop}>
                  <BlueButton width="100%" text="Перейти к услугам" handleClick={handleClick}/>
                </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default PopupSuccessTemplate;
