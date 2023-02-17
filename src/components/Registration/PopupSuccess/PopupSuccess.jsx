import {Button} from "@mui/material";
import React from "react";
import style from "./PopupSuccess.module.css";

const PopupSuccess = () => {

    return (
        <div className={style.popupBg}>
            <div className={style.popup}>
                <h1 className={style.popup__title}>Пароль выслан</h1>
                <div className={style.popup__text}>
                    Перейдите на страницу авторизации и войдите используя номер телефона и
                    присланный пароль.
                </div>
                <Button
                    sx={{
                        display: {xs: "none", sm: "none", md: "block"},
                        fontFamily: `"Tahoma", "Verdana", sans-serif`,
                        textTransform: "none",
                        fontWeight: "fontWeightBold",
                    }}
                    variant="contained"
                    className={style.popup__buttonDesktop + " " + style.button}
                >
                    Войти
                </Button>
                <Button
                    sx={{
                        display: {xs: "block", sm: "block", md: "none"},
                        fontFamily: `"Tahoma", "Verdana", sans-serif`,
                        textTransform: "none",
                        fontWeight: "fontWeightBold",
                    }}
                    variant="contained"
                    className={style.popup__buttonMobile + " " + style.button}
                >
                    Обратно
                </Button>
            </div>
        </div>
    );
};

export default PopupSuccess;
