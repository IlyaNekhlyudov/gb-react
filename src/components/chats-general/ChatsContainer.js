import {useState} from "react";
import * as React from "react";
import {connect} from "react-redux";
import Chats from "./Chats";


const ChatsContainer = ({chatId, chatList, links, userName}) => {
    const [inputText, setInputText] = useState("");
    const [open, setOpen] = React.useState(false);

    return (
        <Chats
            open={open}
            setOpen={setOpen}
            inputText={inputText}
            setInputText={setInputText}
            chatId={chatId}
            chatList={chatList}
            links={links}
            userName={userName}

        />
    );
}

const mapStateToProps = (state) => {
    return {
        userName: state.profile.name,
    }
}

export default connect(mapStateToProps, null)(ChatsContainer);