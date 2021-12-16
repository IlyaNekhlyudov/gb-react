import Login from "./Login";
import {useState} from "react";
import firebaseData from "../../../services/firebase";

const LoginContainer = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [info, setInfo] = useState("");

    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setInfo("");

        try {
            await firebaseData.auth.signInWithEmailAndPassword(email, password);
            setInfo('Авторизация успешна.');
        } catch (error) {
            setInfo(error.message);
        }
    };

    return (
        <Login
            handleSubmit={handleSubmit}
            handleEmailChange={handleEmailChange}
            handlePassChange={handlePassChange}
            info={info}
            email={email}
            password={password}
        />
    );
}

export default LoginContainer;