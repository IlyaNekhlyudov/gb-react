import Navigation from "./Navigation";
import {useEffect, useState} from "react";
import { getAuth } from "firebase/auth";

const NavigationContainer = ({className = 'navigation-links'}) => {
    const [authed, setAuthed] = useState(false);
    const auth = getAuth();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setAuthed(true);
            } else {
                setAuthed(false);
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Navigation
            className={className}
            authenticated={authed}
        />
    );
}

export default NavigationContainer;