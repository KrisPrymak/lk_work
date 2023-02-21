import s from './SearchInput.module.css'
import {Icon} from "@iconify/react";
import {useState} from "react";
export const SearchInput = ({placeholder, buttonColor = '#2c60e3', onClick})=> {
    const [value, setValue] = useState('')

    const onInputChangeHandler = (e)=> {
        setValue(e.target.value)
    }

    const onClickHandler = () => {
        onClick(value)
        // console.log(value)
    }

    return (
        <div className={s.navigateInput}>
            <input
                className={s.input}
                type={'text'}
                placeholder={placeholder}
                value={value}
                onChange={onInputChangeHandler}
            />
           <button className={s.button} onClick={onClickHandler} style={{backgroundColor :buttonColor}}>
               <Icon icon="material-symbols:search-rounded" /> Найти
           </button>
        </div>
    )
}