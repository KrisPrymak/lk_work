import React from "react";

import userAvatar from "../../../media/avatar.svg";
import {MenuItem} from "./MenuItem/MenuItem";
import s from "./Menu.module.css";
import {Icon} from "@iconify/react";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

export const Menu = ({avatar, userName, menuData}) => {
    const navigate = useNavigate()
    const ava = avatar ? avatar : userAvatar;

    return (
        <div className={s.menuWrapper}>
            <div className={s.userInfo}>
                <div className={s.avatarContainer}>
                    <img className={s.avatar} src={ava} alt={"ava"}/>
                </div>
                <p className={s.userTitle}>{userName}</p>
            </div>
            <div className={s.menuList}>
                {menuData.map((d) => {
                    return (
                        <MenuItem key={d.id} text={d.text} path={d.path}>
                            <Icon icon={d.icon}/>
                        </MenuItem>
                    );
                })}
            </div>
            <Button
                variant={"text"}
                sx={{color: "red", textTransform: "none", fontSize: "18px"}}
                onClick={()=>navigate('/')}
            >
                <Icon icon="ph:sign-in-duotone"/>
                <span className={s.gate__button_text}>Выход</span>
            </Button>

        </div>
    );
};
