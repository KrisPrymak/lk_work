import s from './UsersManagment.module.css'
import {UserInfo} from "./UserInfo/UserInfo";
import {SearchInput} from "../../../common/SearchInput/SearchInput"
export const UserManagement = ()=> {

    const users = [
        {id: 'test1', name: 'Василиса', patronymic: 'Григорьевна', tel: '8 (922) 350-22-22', dateOfBirth: '21.11.1989'},
        {id: 'test2', name: 'Анна', patronymic: 'Григорьевна', tel: '8 (922) 350-22-22', dateOfBirth: '21.11.1989'},
        {id: 'test3', name: 'Евгения', patronymic: 'Григорьевна', tel: '8 (922) 350-22-22', dateOfBirth: '21.11.1989'},
    ]
    return (
        <>
            <div className={s.title}>Управление пользователями</div>
            <SearchInput placeholder={'Поиск пользователя по имени, номеру телефона...'}/>
            {users.map(u=> <UserInfo
                key={u.id}
                id={u.id}
                name={u.name}
                telephone={u.tel}
            />)}
        </>
    )
}