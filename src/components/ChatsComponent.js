import {useState} from "react";
import MessageListComponent from "./MessageListComponent";
import MessageSendComponent from "./MessageSendComponent";
import AppBarComponent from "./AppBarComponent";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import {styled} from "@mui/material/styles";

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

const ChatsComponent = ({chatId, chatList, links}) => {
    const [inputText, setInputText] = useState("");
    const [messageList, setListOfMessages] = useState([]);
    const [open, setOpen] = React.useState(false);

    return (
        <div className="Chats">
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
                    setListOfMessages={setListOfMessages}
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
                        <MessageListComponent messageList={messageList} />
                        <MessageSendComponent
                            inputText={inputText}
                            setInputText={setInputText}
                            setListOfMessages={setListOfMessages}
                            messageList={messageList}
                        />
                    </div>
                </Main>
            </Box>
        </div>
    );
}

export default ChatsComponent;