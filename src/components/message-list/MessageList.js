import Paper from "@mui/material/Paper";
import * as React from "react";

const MessageList = ({messageList, chatId, getProperty}) => {
    return (
        <div className='message-list'>
            {messageList[chatId].map((el, index) => (
                <div
                    key={index}
                    style={{
                        alignSelf: getProperty('alignSelf', el.author, el.isBot),
                        marginBottom: '20px'
                    }}
                >
                    <Paper
                        elevation={3}
                        sx={{
                            padding: '20px',
                            width: 'auto',
                            backgroundColor: getProperty('backgroundColor', el.author, el.isBot),
                            color: getProperty('color', el.author, el.isBot),
                        }}
                    >
                        <div className='message-list-full'>
                            <div className='message-list-info'>
                                <div className='message-list-author'>{el.author}</div>
                                <div
                                    className='message-list-time'
                                    style={{
                                        color: getProperty('time', el.author, el.isBot),
                                    }}
                                >{el.date}</div>
                            </div>
                            <div className='message-list-text'>{el.text}</div>
                        </div>
                    </Paper>
                </div>
            ))}
            <div id='end-chat' style={{float: "left", clear: "both"}}/>
        </div>
    );
}

export default MessageList;