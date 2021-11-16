const MessageAuthorComponent = ({inputAuthor, setInputAuthor}) => {
    return (
        <input
            type='text'
            placeholder='Введите имя'
            className='input-author'
            value={inputAuthor}
            onChange={(e) => {setInputAuthor(e.target.value)}}
        />
    );
}

export default MessageAuthorComponent;