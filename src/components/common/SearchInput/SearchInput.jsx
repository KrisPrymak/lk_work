import s from './SearchInput.module.css'
import {Icon} from "@iconify/react";
import {useState} from "react";
export const SearchInput = ({placeholder})=> {
    const [value, setValue] = useState('')

    const onInputChangeHandler = (e)=> {
        setValue(e.target.value)
    }

    const onClickHandler = () => {
        console.log(value)
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
           <button className={s.button} onClick={onClickHandler}>
               <Icon icon="material-symbols:search-rounded" /> Найти
           </button>
        </div>
    )
}