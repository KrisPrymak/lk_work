import s from './AdminPanel.module.css'
import {Login} from "./Login/Login"
import {AdminInterface} from "./AdminInterface/AdminInterface";
import React from "react";

export const AdminPanel = () => {

    return (
        <div className={s.adminPanelWrapper}>
            {/*Need routing*/}

             {/*<Login/>*/}
            <AdminInterface/>
        </div>
    )
}