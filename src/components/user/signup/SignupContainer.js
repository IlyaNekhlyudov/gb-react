import Signup from "./Signup";
import {useState} from "react";
import firebaseData from "../../../services/firebase";

const SignupContainer = () => {
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
            await firebaseData.auth.createUserWithEmailAndPassword(email, password);
            setInfo('Регистрация успешна.');
        } catch (error) {
            setInfo(error.message);
        }
    };

    return (
        <Signup
            handleSubmit={handleSubmit}
            handleEmailChange={handleEmailChange}
            email={email}
            handlePassChange={handlePassChange}
            password={password}
            info={info}
        />
    );
}

export default SignupContainer;