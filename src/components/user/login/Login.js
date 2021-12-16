import {Link} from "react-router-dom";
import NavigationContainer from "../../navigation/NavigationContainer";

const Login = ({handleSubmit, handleEmailChange, handlePassChange, email, password, info}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Заполните форму, чтобы авторизоваться.</p>
                <div>
                    <input
                        placeholder="Email"
                        name="email"
                        type="email"
                        onChange={handleEmailChange}
                        value={email}
                    />
                </div>
                <div>
                    <input
                        placeholder="Пароль"
                        name="password"
                        onChange={handlePassChange}
                        value={password}
                        type="password"
                    />
                </div>
                <div>
                    {info && <p>{info}</p>}
                    <button type="submit">Login</button>
                </div>
                <hr />
                <p>
                    Не зарегистрированы? <Link to="/signup">Зарегистрироваться</Link>
                </p>
            </form>
            <NavigationContainer />
        </div>

    );
}

export default Login;