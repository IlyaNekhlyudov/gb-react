import './App.css';
import MessageListComponent from "./MessageListComponent";
import {useState} from "react";
import MessageSendComponent from "./MessageSendComponent";
import MessageAuthorComponent from "./MessageAuthorComponent";

function App() {
    const [inputText, setInputText] = useState("");
    const [inputAuthor, setInputAuthor] = useState("");
    const [messageList, setListOfMessages] = useState([]);

    return (
        <div className="App">
            <div className='message-app'>
                <MessageListComponent messageList={messageList}/>
                <MessageSendComponent
                    inputText={inputText}
                    setInputText={setInputText}
                    inputAuthor={inputAuthor}
                    setListOfMessages={setListOfMessages}
                    messageList={messageList}
                />
            </div>
            <MessageAuthorComponent inputAuthor={inputAuthor} setInputAuthor={setInputAuthor} />
        </div>
    );
}

export default App;
