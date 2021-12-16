import {Link} from "react-router-dom";
import NavigationContainer from "../../navigation/NavigationContainer";

const Signup = ({handleSubmit, handleEmailChange, email, handlePassChange, password, info}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Заполните форму для регистрации нового аккаунта.</p>
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
                    <button type="submit">Зарегистрироваться</button>
                </div>
                <hr/>
                <p>
                    У вас уже есть аккаунт? <Link to="/login">Авторизоваться</Link>
                </p>
            </form>
            <NavigationContainer />
        </div>
    );
}

export default Signup;