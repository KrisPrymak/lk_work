import s from './UserInfo.module.css'
import {NavLink} from "react-router-dom";
export const UserInfo = ({name, telephone, id}) => {
    return(
        <NavLink  className={s.userInfo} to={`/user/${id}`}>
            <h4>{name}</h4>
            <h4>{telephone}</h4>
        </NavLink>
    )
}