import * as React from "react";
import {useRef} from "react";
import {add, remove} from "../../store/reducers/chatsReducer";
import {connect} from "react-redux";
import {addChat, removeChat} from "../../store/reducers/messageReducer";
import ChatsSettings from "./ChatsSettings";

const ChatsSettingsContainer = ({chatList, addChat, removeChat}) => {
    const textFieldRef = useRef(null);

    const addNewChat = () => {
        if (!/\S/g.test(textFieldRef.current.value)) return false; // проверка на пустую строку
        addChat(chatList, textFieldRef.current.value);
        textFieldRef.current.value = '';
    }

    const deleteChat = (index) => {
        removeChat(chatList, index);
    }

    const checkLengthChat = () => {
        if (chatList.length === 0) return (<p>Чатов нет, создайте новый.</p>);
    }

    return (
        <ChatsSettings
            chatList={chatList}
            addNewChat={addNewChat}
            deleteChat={deleteChat}
            addChat={addChat}
            removeChat={removeChat}
            checkLengthChat={checkLengthChat}
            textFieldRef={textFieldRef}
        />
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addChat: (state, action) => {
            dispatch(add(action));
            dispatch(addChat());
        },
        removeChat: (state, action) => {
            dispatch(remove(action));
            dispatch(removeChat(action));
        }
    }
}

export default connect(null, mapDispatchToProps)(ChatsSettingsContainer);