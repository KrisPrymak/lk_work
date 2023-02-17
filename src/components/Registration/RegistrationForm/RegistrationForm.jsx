import {Button} from "@mui/material";
import React from "react";
import style from "./RegistrationForm.module.css";
import {useFormik} from "formik";


const RegistrationForm = ({
                              onHandleSubmit,
                              telNumber,
                              handleChangeInput,
                              handleChangeChekbox,
                              isRegistrationSuccess,
                          }) => {
    const formik = useFormik({
        initialValues: {
            telNumber: "",
        },
        onSubmit: (e) => {
            onHandleSubmit(e);
        },
    });
    return (
        <form
            onSubmit={(e) => {
                formik.handleSubmit(e);
            }}
            className={style.registration__form}
            action="#0"
        >
            <h1 className={style.registration__title}>Регистрация</h1>
            <input
                className={`${style.registration__input} ${
                    isRegistrationSuccess === false && style.border__red
                }`}
                type="tel"
                name="telNumber"
                maxlength="11"
                placeholder="Номер телефона"
                value={telNumber}
                onChange={(e) => {
                    handleChangeInput(e);
                }}
            />
            <label className={style.registration__checkboxGroup}>
                <input
                    type="checkbox"
                    className={style.registration__checkbox}
                    onChange={(e) => {
                        handleChangeChekbox(e);
                    }}
                />
                <span className={style.registration__checkboxText}>
          Согласен на <a href="#0">обработку персональных данных</a>
        </span>
            </label>
            {isRegistrationSuccess === false && (
                <div className={style.registration__errorValidate}>
                    Заполните все поля.
                </div>
            )}
            <Button
                type="submit"
                className={style.registration__submit + " " + style.button}
                variant="contained"
                sx={{
                    mt: "30px",
                    backgroundColor: "primary",
                    zIndex: 1,
                    fontFamily: `"Tahoma", "Verdana", sans-serif`,
                    textTransform: "none",
                    fontWeight: "fontWeightBold",
                }}
            >
                Зарегистрироваться
            </Button>
        </form>
    );
};

export default RegistrationForm;
