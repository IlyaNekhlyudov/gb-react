import {useEffect, useRef} from "react";
import moment from "moment";
import "moment/locale/ru";
import Button from '@mui/material/Button';
import TextareaAutosize from "@mui/material/TextareaAutosize";
import SendIcon from '@mui/icons-material/Send';

moment.locale('ru');

const MessageSendComponent = ({inputText, setInputText, inputAuthor, setListOfMessages, messageList}) => {
    const textareaRef = useRef(null);

    class Message {
        constructor(author, text) {
            if (author === '') author = 'Аноним';
            this.author = author;
            this.text = text;
            this.date =  moment().format('LTS L');
        }
    }

    // ответ робота
    useEffect(() => {
        if (messageList.length !== 0
            && messageList[messageList.length - 1].author === 'Робот') return false;

        const randomText = [
            "привет! Как дела?",
            "расскажи ещё что-нибудь",
            "из какого ты города?",
            "сколько тебе лет?"
        ]

        setTimeout(() => {
            let name = inputAuthor === '' ? "Аноним" : inputAuthor;
            const message = new Message(
                "Робот",
                name
                        + ', '
                        + randomText[Math.round(Math.random() * 3)]
            );
            setListOfMessages(prev => [...prev, message]);
            document.getElementById('end-chat').scrollIntoView({behavior: 'smooth'});
        }, 1500)

        document.getElementById('end-chat').scrollIntoView({behavior: 'smooth'});
    }, [messageList]); // eslint-disable-line react-hooks/exhaustive-deps

    const SendMessage = () => {
        if (!/\S/g.test(inputText)) return false; // проверка на пустую строку

        const message = new Message(inputAuthor, inputText);
        setListOfMessages(prev => [...prev, message]);
        setInputText("");
        document.querySelector('textarea').value = '';
        textareaRef.current?.focus();
    }

    return (
        <div className='message-send'>
            <TextareaAutosize
                minRows={4}
                maxRows={4}
                aria-label="maximum height"
                placeholder="Введите текст сообщения"
                defaultValue={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') SendMessage();
                }}
                style={{
                    width: '75%',
                    height: '50%',
                    resize: 'none'
                }}
                ref={textareaRef}
                autoFocus
            />

            <Button
                endIcon={<SendIcon />}
                onClick={SendMessage}
                sx={{
                    height: "50%",
                    marginLeft: '20px',
                }}
            >
                Отправить
            </Button>
        </div>
    );
}

export default MessageSendComponent;