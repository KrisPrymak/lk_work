import React from "react";
import style from "./PopupSingUpConsult.module.css";
import { Icon } from "@iconify/react";
import BlueButton from "../../common/BlueButton/BlueButton";
import { FormControl, TextField } from "@material-ui/core";
import SelectInput from './../../common/SelectInput/SelectInput';

const PopupSingUpConsult = ({ setIsOpenSignUp, openSignUpSuccess }) => {
  return (
    <div className={style.popupBg}>
      <div className={style.popup}>
        <div className={style.popup__content}>
          <Icon
            icon="material-symbols:close"
            className={style.popup__cross}
            onClick={() => setIsOpenSignUp(false)}
          />
          <div className={style.popup__info}>
            <h1 className={style.popup__title}>Запись на телемедицинскую консультацию</h1>
            <div className={style.popup__info_main}>
            <p className={style.popup__description}>
              Дни и часы для онлайн-консультаций каждого специалиста
              индивидуальны и ограничены в количестве.
            </p>
            <form className={style.popup__form}>

                <SelectInput text={'Направление'}/>
                <SelectInput text={'Врач'} />
                <SelectInput text={'Дата'} />
                <SelectInput text={'Время'} />
              
             <FormControl style={{width: '100%', marginTop: '15px'}}>
             <span className={style.popup__select_title}>Комментарий</span>
             <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          variant='outlined'
        />
             </FormControl>
            </form>
            <div className={style.popup__buttonSubmit}>
            <BlueButton
              text="Записаться на консультацию"
              handleClick={openSignUpSuccess}
              width='100%'
            />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupSingUpConsult;
