import logo from '../../../media/logo.svg'

import s from './Login.module.css'
import {Button, TextField} from "@mui/material";
import React from "react";


export const Login = () => {
    return (
        <div className={s.loginWrapper}>
            <div className={s.logoWrapper}>
                <img className={s.logo} src={logo} alt={'logo'}/>
            </div>
            <form className={s.loginForm}>
                <h1 className={s.loginTitle}>Вход для сотрудника</h1>
                <TextField label="Логин" variant="outlined" sx={styleSX.loginInput}/>
                <TextField label="Пароль" variant="outlined" sx={styleSX.passwordInput} type={"password"}/>
                <Button
                    type="submit"
                    variant="contained"
                    sx={styleSX.button}
                >
                    Войти
                </Button>
            </form>
        </div>
    )
}

const styleSX = {
    loginInput: {
        marginBottom: '15px',
        width: '100%'
    },
    passwordInput: {
        marginBottom: '20px'
    },
    button: {
        mt: "30px",
        backgroundColor: "primary",
        zIndex: 1,
        fontFamily: `"Tahoma", "Verdana", sans-serif`,
        textTransform: "none",
        fontWeight: "fontWeightBold",
        width: '255px',
        height: '48px'
    }
}


