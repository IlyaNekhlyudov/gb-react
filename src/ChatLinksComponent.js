import * as React from "react";
import {Link} from "react-router-dom";
import {Paper, ListItemButton, ListItemText, IconButton} from "@mui/material";
import iconSwitch from "./IconSwitch";
import SettingsIcon from '@mui/icons-material/Settings';

const ChatLinksComponent = ({links}) => {

    const checkLengthChat = () => {
        if (Object.values(links).length === 0) return (<p>Чатов нет. Создайте новый в разделе настроек.</p>);
    }

    return (
        <div className='chat-list'>
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
                    <span className='chat-list-heading-p'>Список чатов</span>
                    <Link to='/settings/chats' style={{display: 'contents'}}>
                        <IconButton
                            size="small"
                            aria-label="Настройки"
                            color="default"
                            sx={{
                                color: 'white',
                                position: 'absolute',
                                marginLeft: '24%'
                            }}
                        >
                            <SettingsIcon />
                        </IconButton>
                    </Link>
                </Paper>
                <Paper
                    elevation={3}
                    sx={{
                        padding: '20px',
                        flexDirection: 'column',
                        display: 'flex',
                        borderRadius: '0'
                    }}
                >
                    {Object.keys(links).map((value, index) => (
                        <div key={index}>
                            <Link to={value} className='chat-list-links'>
                                <ListItemButton component="div">
                                    <span style={{paddingRight: '20px', marginTop: '3px'}}>{iconSwitch(links[value])}</span>
                                    <ListItemText primary={links[value]} />
                                </ListItemButton>
                            </Link>
                        </div>
                    ))}
                    {checkLengthChat()}
                </Paper>
            </div>
        </div>
    );
}

export default ChatLinksComponent;