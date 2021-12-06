import {useState} from "react";
import MessageListComponent from "./MessageListComponent";
import MessageSendComponent from "./MessageSendComponent";
import AppBarComponent from "./AppBarComponent";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import {styled} from "@mui/material/styles";
import {connect} from "react-redux";
import {add} from "../store/reducers/messageReducer";

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

const ChatsComponent = ({chatId, chatList, links, messageList, addMessage, userName}) => {
    const [inputText, setInputText] = useState("");
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
                        <MessageListComponent messageList={messageList} userName={userName} chatId={chatId} />
                        <MessageSendComponent
                            inputText={inputText}
                            setInputText={setInputText}
                            addMessage={addMessage}
                            messageList={messageList}
                            chatId={chatId}
                            userName={userName}
                        />
                    </div>
                </Main>
            </Box>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        messageList: state.message.list,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (state, action) => {
            dispatch(add(action));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatsComponent);