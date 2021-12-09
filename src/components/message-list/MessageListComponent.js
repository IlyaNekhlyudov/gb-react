import * as React from 'react';
import MessageList from "./MessageList";
import {connect} from "react-redux";

const MessageListComponent = ({messageList, userName, chatId}) => {
    /**
     * применяет стили в зависимости от того, кто написал сообщение
     * @param property
     * @param author
     * @returns {string}
     */
    const getProperty = (property, author, isBot) => {
        let someone = false;
        if (author !== userName || isBot) someone = true;

        switch (property) {
            case 'alignSelf':
                if (someone) return 'flex-start';
                else return 'flex-end';

            case 'backgroundColor':
                if (someone) return 'white';
                else return 'cornflowerblue';

            case 'color':
                if (someone) return 'black';
                else return "white";


            case 'time':
                if (someone) return '#818c99';
                else return 'white';

            default:
        }
    }

    return (
        <MessageList
            messageList={messageList}
            getProperty={getProperty}
            chatId={chatId}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        messageList: state.message.list,
    }
}

export default connect(mapStateToProps, null)(MessageListComponent);