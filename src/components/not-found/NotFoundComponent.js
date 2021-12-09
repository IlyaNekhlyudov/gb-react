import {Link} from "react-router-dom";
import * as React from "react";

const NotFoundComponent = () => {
    return (
        <div>
            <p>Такой страницы нет.</p>
            <p><Link to='/'>Перейти к списку чатов</Link></p>
        </div>
    );
}

export default NotFoundComponent;