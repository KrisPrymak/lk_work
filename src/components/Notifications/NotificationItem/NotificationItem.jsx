import s from './NotificationItem.module.css'
export const NotificationItem = ({notification, time})=> {
    return (
        <div className={s.notificationItem}>
            <h4 className={s.notification}>{notification}</h4>
            <h4 className={s.time}>{time}</h4>
        </div>
    )
}