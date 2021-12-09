import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const MessageSend = ({inputText, setInputText, SendMessage, textareaRef}) => {
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
                    if ('Enter' === e.key) SendMessage();
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

export default MessageSend;