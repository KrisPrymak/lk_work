import s from './AdminInterface.module.css'
import {Menu} from "../../common/Menu/Menu";
import {UserManagement} from "./UsersManagment/UsersManagment";
import {UserSettings} from "./UserSettings/UserSettings";
import HeaderMobile from "../../Registration/HeaderMobile/HeaderMobile";
import React from "react";
import MyAccMobile from './MyAccMobile/MyAccMobile';
import {Button} from "@mui/material";
import {Icon} from "@iconify/react";
import {ServiceResult} from "../../ServiceResult/ServiceResult";

export const AdminInterface = () => {
    const menuData = [
        {id: 1000, text: 'Управление пользователями', icon: 'mdi:account-group-outline'},
        {id: 1001, text: 'Управление шаблонами', icon: 'ic:outline-color-lens'},
    ]

    
    return (
        <>
            <HeaderMobile />
            <MyAccMobile />
            <div className={s.adminInterfaceWrapper}>

                <Menu userName={'Администратор'} menuData={menuData}/>
                <div className={s.userSettingsWrapper}>
                    {/*Need routing*/}
                    <UserManagement/>
                    {/*<UserSettings/>*/}
                    {/* <ServiceResult/> */}
                </div>
            </div>
        </>

    )
}