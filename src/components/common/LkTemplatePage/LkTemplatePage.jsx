import React from 'react';
import MyAccMobile from '../../AdminPanel/AdminInterface/MyAccMobile/MyAccMobile';
import { Menu } from '../Menu/Menu';
import HeaderMobile from '../../Registration/HeaderMobile/HeaderMobile';
import style from './LkTemplatePage.module.css';
import { Route, Routes } from 'react-router-dom';
import MedicalCare from '../../MedicalCare/MedicalCare';
import {UserSettings} from './../../AdminPanel/AdminInterface/UserSettings/UserSettings';
import { ServiceResult } from '../../ServiceResult/ServiceResult';
import TelemedConsult from '../../TelemedConsult/TelemedConsult';
import PaymentPage from '../../PaymentPage/PaymentPage';
import {Notifications} from "../../Notifications/Notifications";

const LkTemplatePage = () => {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <HeaderMobile />
                <Menu userName={"Александра Дмитриевна"} menuData={menuData} />

                <div className={style.content}>
                    <MyAccMobile />
                    
                    <Routes>
                        <Route path="/medicalCare" element={<MedicalCare />} />
                        <Route path="/results" element={<ServiceResult />} />
                        <Route path="/paidPage" element={<PaymentPage />} />
                        <Route path="/telemedConsult" element={<TelemedConsult />} />
                        <Route path="/notifications" element={<Notifications />} />
                        <Route path="/settings" element={<UserSettings />} />
                    </Routes>

                </div>
            </div>
        </div>
    );
};

export default LkTemplatePage;

const menuData = [
    { id: 1004, text: "Медицинские услуги", icon: "cil:medical-cross", path: '/medicalCare' },
    { id: 1006, text: "Результаты услуг", icon: "carbon:result", path: '/results' },
    { id: 1007, text: "Оплата услуг", icon: "uiw:pay", path: '/paidPage' },
    {
      id: 1008,
      text: "Телемедицинские консультации",
      icon: "clarity:talk-bubbles-line",
      path: '/telemedConsult'
    },
    { id: 1009, text: "Уведомления", icon: "ph:bell", path: '/notifications' },
    { id: 1010, text: "Настройки учетной записи", icon: "carbon:settings", path: '/settings' },
  ];