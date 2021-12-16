import CyrillicToTranslit from "cyrillic-to-translit-js";
import {connect} from "react-redux";
import Routes from "./Routes";
import firebaseData from "../../services/firebase";
import {useEffect, useState} from "react";

const cyrillicToTranslit = new CyrillicToTranslit();

const RoutesContainer = ({chats}) => {
    const [authed, setAuthed] = useState(false);

    useEffect(() => {
        firebaseData.auth.onAuthStateChanged((user) => {
            if (user) {
                setAuthed(true);
            } else {
                setAuthed(false);
            }
        });
    }, []);

    const generateRoutes = () => {
        let links = {}, url, transliteratedLink;

        Object.keys(chats).forEach((el) => {
            transliteratedLink = cyrillicToTranslit.transform(chats[el]).toLowerCase();
            url = '/chats/' + transliteratedLink;
            links[url] = chats[el];
        });

        return links;
    }

    let links = generateRoutes();

    return (
        <Routes
            links={links}
            chats={chats}
            authed={authed}
        />
    );
}

const mapStateToProps = (state) => {
    return {
        chats: state.chats.list
    }
}

export default connect(mapStateToProps, null)(RoutesContainer);