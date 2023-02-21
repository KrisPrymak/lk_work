import React from "react";
import s from './AdminInterface.module.css'
import {Menu} from "../../common/Menu/Menu";
import {UserManagement} from "./UsersManagment/UsersManagment";
import {UserSettings} from "./UserSettings/UserSettings";
import HeaderMobile from "../../Registration/HeaderMobile/HeaderMobile";
import MyAccMobile from './MyAccMobile/MyAccMobile';
import {Navigate, Route, Routes} from "react-router-dom";

export const AdminInterface = () => {
    const menuData = [
        {id: 1000, text: 'Управление пользователями', icon: 'mdi:account-group-outline', path: '/admin/adminInterFace/userManagement'},
        {id: 1001, text: 'Управление шаблонами', icon: 'ic:outline-color-lens', path: '/admin/adminInterFace/templatesManagement'},
    ]


    return (
        <>
            <HeaderMobile/>
            <MyAccMobile/>
            <div className={s.adminInterfaceWrapper}>

                <Menu userName={'Администратор'} menuData={menuData}/>
                <div className={s.userSettingsWrapper}>
                    <Routes>
                        <Route path={'*'} element={<Navigate to={'/admin/adminInterFace/userManagement'} />} />
                        <Route path={'/userManagement'} element={<UserManagement/>} />
                        <Route path={'/templatesManagement'} element={<div>12</div>} />
                        <Route path={'/userManagement/userSetting/:userId?'} element={<UserSettings/>} />
                    </Routes>

                </div>
            </div>
        </>

    )
}
