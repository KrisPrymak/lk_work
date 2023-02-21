import s from './UserInfo.module.css'
import {NavLink} from "react-router-dom";
export const UserInfo = ({name, telephone, id}) => {
    return(
        <NavLink  className={s.userInfo} to={`/admin/adminInterFace/userManagement/userSetting/${id}`}>
            <p>{name}</p>
            <p>{telephone}</p>
        </NavLink>
    )
}