import './App.css';
import MessageComponent from "./MessageComponent";
import {useState} from "react";

function App() {
  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
      <input value={inputText} onChange={(event) => setInputText(event.target.value)} className='app-input'/>
      <MessageComponent text={inputText}/>
    </div>
  );
}

export default App;
