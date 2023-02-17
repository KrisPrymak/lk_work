import s from "../AdminPanel/AdminInterface/UserSettings/UserSettings.module.css";
import React from "react";
import {NotificationItem} from "./NotificationItem/NotificationItem";

export const Notifications = () => {
    const notifications = [
        {notification: 'Ваши результаты готовы: “Общий (клинический) анализ крови развернутый”.', time: '12.02.2023'},
        {
            notification: 'Вы записались на услугу: “Эзофагогастродуоденоскопия (I категория сложности)”.',
            time: '19.01.2023'
        },
        {
            notification: 'Вы записались на консультацию: телемедицинская консультация к врачу онкологу на 28 февраля 2023.',
            time: '11.02.2023'
        },
    ]

    return (
        <>
            <h1 className={s.title}>Уведомления</h1>
            {notifications.map((n, index) =>
                <NotificationItem key={index} notification={n.notification} time={n.time}/>)}
        </>

    )
}