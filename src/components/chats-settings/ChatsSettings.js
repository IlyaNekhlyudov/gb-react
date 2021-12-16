import {Button, Divider, IconButton, ListItem, ListItemText, Paper, TextField} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import * as React from "react";
import NavigationContainer from "../navigation/NavigationContainer";

const ChatsSettings = ({chatList, addNewChat, deleteChat, checkLengthChat, textFieldRef}) => {
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
            <NavigationContainer />
        </div>
    );
}

export default ChatsSettings;