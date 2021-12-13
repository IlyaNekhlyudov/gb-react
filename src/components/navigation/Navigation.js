import {Link} from "react-router-dom";
import * as React from "react";

const Navigation = ({className = 'navigation-links'}) => {
    return (
        <div className={className}>
            <Link to='/'>Главная</Link>
            <Link to='/news'>Новости</Link>
        </div>
    )
}

export default Navigation;