import {TextField} from "@mui/material";


const MessageAuthorComponent = ({inputAuthor, setInputAuthor}) => {
    return (
        <TextField
            id="input-with-sx"
            label="Введите имя"
            variant="standard"
            value={inputAuthor}
            sx={{
                marginTop: '70px',
                marginLeft: '30px',
            }}
            onChange={(e) => {setInputAuthor(e.target.value)}}
        />
    );
}

export default MessageAuthorComponent;