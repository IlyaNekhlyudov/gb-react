import * as React from 'react';
import Paper from '@mui/material/Paper';
import store from "../store/actions";

const MessageListComponent = ({messageList}) => {
    let userName = store.getState().name;

    /**
     * применяет стили в зависимости от того, кто написал сообщение
     * @param property
     * @param author
     * @returns {string}
     */
    const getProperty = (property, author) => {
        let someone = !(author === userName || (userName === '' && author === 'Аноним'));

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
        <div className='message-list'>
            {messageList.map((message, i) => (
                <div
                    key={i}
                    style={{
                        alignSelf: getProperty('alignSelf', message.author),
                        marginBottom: '20px'
                    }}
                >
                    <Paper
                        elevation={3}
                        sx={{
                            padding: '20px',
                            width: 'auto',
                            backgroundColor: getProperty('backgroundColor', message.author),
                            color: getProperty('color', message.author),
                        }}
                    >
                        <div className='message-list-full'>
                            <div className='message-list-info'>
                                <div className='message-list-author'>{message.author}</div>
                                <div
                                    className='message-list-time'
                                    style={{
                                        color: getProperty('time', message.author),
                                    }}
                                >{message.date}</div>
                            </div>
                            <div className='message-list-text'>{message.text}</div>
                        </div>
                    </Paper>
                </div>
            ))}
            <div id='end-chat' style={{float: "left", clear: "both"}}/>
        </div>
    )
}

export default MessageListComponent;