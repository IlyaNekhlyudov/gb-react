import {useEffect} from "react";

const MessageSendComponent = ({inputText, setInputText, inputAuthor, setListOfMessages, messageList}) => {
    class Message {
        constructor(author, text) {
            if (author === '') author = 'Аноним';
            this.author = author;
            this.text = text;

            let date = new Date();
            this.date = date.getHours().toString()
                + ':'
                + date.getMinutes().toString()
                + ':'
                + date.getSeconds().toString()
                + ' '
                + date.getDate().toString()
                + '.'
                + date.getMonth().toString()
                + '.'
                + date.getFullYear().toString();
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
        }, 1500)
    }, [messageList]); // eslint-disable-line react-hooks/exhaustive-deps

    const SendMessage = () => {
        const message = new Message(inputAuthor, inputText);
        setListOfMessages(prev => [...prev, message]);
        setInputText("");
    }

    return (
        <div className='message-send'>
            <textarea
                className='message-send-area'
                placeholder='Введите текст сообщения'
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') SendMessage();
                }}
            />
            <button className='message-send-button' onClick={SendMessage}>Отправить</button>
        </div>
    );
}

export default MessageSendComponent;