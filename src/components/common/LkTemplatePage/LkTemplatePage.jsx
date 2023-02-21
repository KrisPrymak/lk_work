import React from 'react';
import MyAccMobile from '../../AdminPanel/AdminInterface/MyAccMobile/MyAccMobile';
import { Menu } from '../Menu/Menu';
import HeaderMobile from '../../Registration/HeaderMobile/HeaderMobile';
import style from './LkTemplatePage.module.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import MedicalCare from '../../MedicalCare/MedicalCare';
import {UserSettings} from '../../AdminPanel/AdminInterface/UserSettings/UserSettings';
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
                        <Route path= "*" element={<Navigate to={'/user/medicalCare'}/>} />
                        <Route path="/medicalCare" element={<MedicalCare />} />
                        {/* <Route path="/calendar'" element={<calendar />} /> */}
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
    { id: 1004, text: "Медицинские услуги", icon: "cil:medical-cross", path: '/user/medicalCare' },
    { id: 1005, text: "Календарь услуг", icon: "ph:calendar-blank", path: '/user/calendar' },
    { id: 1006, text: "Результаты услуг", icon: "carbon:result", path: '/user/results' },
    { id: 1007, text: "Оплата услуг", icon: "uiw:pay", path: '/user/paidPage' },
    {
      id: 1008,
      text: "Телемедицинские консультации",
      icon: "clarity:talk-bubbles-line",
      path: '/user/telemedConsult'
    },
    { id: 1009, text: "Уведомления", icon: "ph:bell", path: '/user/notifications' },
    { id: 1010, text: "Настройки учетной записи", icon: "carbon:settings", path: '/user/settings' },
  ];