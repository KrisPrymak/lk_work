import React from "react";
import s from './MenuItem.module.css'

export const MenuItem = (props) => {
  return (
      <div className={s.item}>
        {props.children}
        <h4 className={s.itemText}>{props.text}</h4>
      </div>
  )
}