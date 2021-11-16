const MessageListComponent = ({messageList}) => {
    return (
        <div className='message-list'>
            {messageList.map((message, i) => (
                <div className='message-list-full' key={i}>
                    <div className='message-list-info'>
                        <div className='message-list-author'>{message.author}</div>
                        <div className='message-list-time'>{message.date}</div>
                    </div>
                    <div className='message-list-text'>{message.text}</div>
                </div>
            ))}
        </div>
    )
}

export default MessageListComponent;