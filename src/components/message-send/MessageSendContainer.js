import {useEffect, useRef} from "react";
import moment from "moment";
import "moment/locale/ru";
import {addMessage} from "../../store/reducers/messageReducer";
import {connect} from "react-redux";
import MessageSend from "./MessageSend";

const DELAY_MESSAGE_BOT = 1500;

moment.locale('ru');

let needAnswerFromBot = false;

const MessageSendContainer = ({inputText, setInputText, addMessage, messageList, chatId, userName}) => {
    const textareaRef = useRef(null);

    class Message {
        constructor(author, text, isBot = false) {
            if (author === '') author = 'Аноним';
            this.author = author;
            this.text = text;
            this.date =  moment().format('LTS L');
            this.chatId = chatId;
            this.isBot = isBot;
        }
    }

    // ответ робота
    useEffect(() => {
        if (!needAnswerFromBot) return false;

        const randomText = [
            "привет! Как дела?",
            "расскажи ещё что-нибудь",
            "из какого ты города?",
            "сколько тебе лет?"
        ]


        setTimeout(() => {
            if (!needAnswerFromBot) return false;

            const message = new Message(
                "Робот",
                userName
                        + ', '
                        + randomText[Math.round(Math.random() * 3)],
                true
            );
            addMessage(messageList, message);

            document.getElementById('end-chat').scrollIntoView({behavior: 'smooth'});
            needAnswerFromBot = false;
        }, DELAY_MESSAGE_BOT);

        document.getElementById('end-chat').scrollIntoView({behavior: 'smooth'});
    }, [messageList]); // eslint-disable-line react-hooks/exhaustive-deps

    const SendMessage = () => {
        if (!/\S/g.test(inputText)) return false; // проверка на пустую строку

        const message = new Message(userName, inputText);
        addMessage(messageList, message);

        setInputText("");
        document.querySelector('textarea').value = '';
        textareaRef.current?.focus();
        needAnswerFromBot = true;
    }

    return (
        <MessageSend
            inputText={inputText}
            setInputText={setInputText}
            SendMessage={SendMessage}
            textareaRef={textareaRef}
        />
    );
}

const mapStateToProps = (state) => {
    return {
        messageList: state.message.list,
    }
}

export default connect(mapStateToProps, {addMessage})(MessageSendContainer);