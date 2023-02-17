import s from "./UserSettings.module.css";

import {Icon} from "@iconify/react";
import {Button, TextField} from "@mui/material";
import React from "react";

export const UserSettings = () => {

    const onSubmitHandler = () => {
        console.log('user changed')
    }
    return (
        <>
            <h1 className={s.title}>Пользователь</h1>
            <Button variant={"outlined"} color={'primary'} sx={{marginBottom: '30px', textTransform: 'none'}}>
                <Icon icon="material-symbols:arrow-back"/>Назад
            </Button>
            <h2 className={s.formTitle}>ID пользователя: Test ID</h2>
            <form onSubmit={onSubmitHandler}>
                <div className={s.formGridContainer}>
                    <div className={s.inputContainer}>
                        <TextField label="Имя" variant="outlined" size={'small'} sx={styleSX.input}/>
                    </div>
                    <div className={s.inputContainer}>
                        <TextField label="Отчество" variant="outlined" size={'small'} sx={styleSX.input}/>
                    </div>
                    <div className={s.inputContainer}>
                        <TextField label="Дата рождения" variant="outlined" size={'small'} sx={styleSX.input}/>
                    </div>
                    <div className={s.inputContainer}>
                        <TextField label="Номер телефона" variant="outlined" size={'small'} sx={styleSX.input}/>
                    </div>
                </div>
                <div className={s.buttonContainer}>
                    <Button type={"submit"} variant={'contained'} size={'large'} color={'primary'}
                            sx={styleSX.button}>
                        Сохранить изменения
                    </Button>
                </div>
            </form>
            <form className={s.changePasswordForm}>
                <h2 className={s.formTitle}>Смена пароля</h2>
                <div className={s.inputContainer}>
                    <TextField label="Новый пароль" variant="outlined" size={'small'} style={styleSX.input}/>
                </div>
                <div className={s.buttonContainer}>
                    <Button variant={'contained'} color={'info'} sx={styleSX.button}>Обновить пароль</Button>
                </div>
            </form>
            <div>
                <h2 className={s.formTitle}>Удалить пользователя</h2>
                <div className={s.buttonContainer}>
                    <Button variant={'contained'} sx={styleSX.button} color={'error'}>Удалить пользователя</Button>
                </div>
            </div>
        </>
    )
}
const styleSX = {
    button: {
        width: '100%',
        height: '100%',
        textTransform: 'none',
        fontWeight: '700'
    },
    input: {
        width: '100%',
        // height: '100%',
    }
}