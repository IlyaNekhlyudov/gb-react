import {
    ListItemText,
    Paper,
    ListItem,
    IconButton,
    TextField,
    Divider,
    Button
} from "@mui/material";
import * as React from "react";
import {Link} from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import {useRef} from "react";
import {add, remove} from "../store/reducers/chatsReducer";
import {connect} from "react-redux";
import {addChat, removeChat} from "../store/reducers/messageReducer";

const ChatsSettingsComponent = ({chatList, addChat, removeChat}) => {
    const textFieldRef = useRef(null);

    const addNewChat = () => {
        if (!/\S/g.test(textFieldRef.current.value)) return false; // проверка на пустую строку
        addChat(chatList, textFieldRef.current.value);
        textFieldRef.current.value = '';
    }

    const deleteChat = (index) => {
        removeChat(chatList, index);
    }

    const checkLengthChat = () => {
        if (chatList.length === 0) return (<p>Чатов нет, создайте новый.</p>);
    }

    return (
        <div className='template'>
            <div style={{width: '30%', marginBottom: '20vh'}}>
                <Paper
                    elevation={3}
                    sx={{
                        backgroundColor: 'cornflowerblue',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '40px',
                        borderRadius: '0',
                    }}
                >
                    <span className='template-heading-p'>Настройка чатов</span>
                </Paper>
                <Paper
                    elevation={3}
                    sx={{
                        padding: '10px',
                        borderRadius: '0',
                    }}
                >
                    {Object.keys(chatList).map((value, index) => (
                        <ListItem
                            key={index}
                            secondaryAction={
                                <IconButton edge="end" aria-label="Delete" onClick={() => deleteChat(value)}>
                                    <DeleteIcon />
                                </IconButton>
                            }
                            disablePadding
                        >
                            <ListItemText id={value} primary={chatList[value]}/>
                        </ListItem>
                    ))}
                    {checkLengthChat()}
                    <Divider sx={{marginTop: '20px'}}>Добавить новый чат</Divider>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <TextField
                            id="newChatName"
                            label="Введите название чата"
                            size="small"
                            sx={{
                                marginTop: '20px',
                                marginBottom: '20px'
                            }}
                            inputRef={textFieldRef}
                        />
                        <Button
                            variant="outlined"
                            size="small"
                            onClick={addNewChat}
                            sx={{
                                height: '40px',
                                marginLeft: '10px'
                            }}
                        >
                            Добавить
                        </Button>
                    </div>
                </Paper>
            </div>
            <Link to='/'>На главную</Link>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addChat: (state, action) => {
            dispatch(add(action));
            dispatch(addChat());
        },
        removeChat: (state, action) => {
            dispatch(remove(action));
            dispatch(removeChat(action));
        }
    }
}

export default connect(null, mapDispatchToProps)(ChatsSettingsComponent);