import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBarComponent from "../app-bar/AppBarComponent";
import MessageListComponent from "../message-list/MessageListComponent";
import MessageSendComponent from "../message-send/MessageSendContainer";
import * as React from "react";
import {styled} from "@mui/material/styles";
import NavigationContainer from "../navigation/NavigationContainer";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: 0,
        }),
    }),
);

const Chats = ({open, setOpen, inputText, setInputText, chatId, chatList, links, userName}) => {
    return (
        <div className="chats">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    width: '90%'
                }}
            >
                <CssBaseline />
                <AppBarComponent
                    open={open}
                    setOpen={setOpen}
                    chatId={chatId}
                    chatList={chatList}
                    links={links}
                />
                <Main
                    open={open}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '90%'
                    }}
                >
                    <div className='message-app'>
                        <MessageListComponent userName={userName} chatId={chatId} />
                        <MessageSendComponent
                            inputText={inputText}
                            setInputText={setInputText}
                            chatId={chatId}
                            userName={userName}
                        />
                    </div>
                </Main>
            </Box>
            <NavigationContainer className='chat-navigation' />
        </div>
    );
}

export default Chats;