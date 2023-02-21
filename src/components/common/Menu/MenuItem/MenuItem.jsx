import React from "react";
import s from './MenuItem.module.css'
import {NavLink} from "react-router-dom";

const activeStyle = {
    backgroundColor: '#2c60e3',
    color: '#ffffff',
    paddingLeft: '10px',
}

export const MenuItem = (props) => {
    return (
        <NavLink style={({ isActive }) =>
            isActive ? activeStyle : undefined
        } className={s.item} to={props.path}>
            {props.children}
            <p className={s.itemText}>{props.text}</p>
        </NavLink>
    )
}