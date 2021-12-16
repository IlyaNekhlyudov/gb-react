import { getAuth, signOut } from "firebase/auth";
import {useState} from "react";
import SignOut from "./SignOut";

const auth = getAuth();

const SignOutContainer = () => {
    const [result, setResult] = useState("");

    signOut(auth).then(() => {
        setResult('Успешно.');
    }).catch((error) => {
        setResult(error);
    });

    return (
        <SignOut
            result={result}
        />
    );
}

export default SignOutContainer;