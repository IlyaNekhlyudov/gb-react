import {Link} from "react-router-dom";
import * as React from "react";

const Navigation = ({className, authenticated}) => {
    return (
        <div className={className}>
            <Link to='/'>Главная</Link>
            <Link to='/news'>Новости</Link>
            {authenticated ?
                <>
                    <Link to='/signout'>Выйти</Link>
                </>
                :
                <>
                    <Link to='/login'>Авторизоваться</Link>
                    <Link to='/signup'>Зарегистрироваться</Link>
                </>
            }
        </div>
    )
}

export default Navigation;