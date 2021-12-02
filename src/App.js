import './App.css';
import * as React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import CyrillicToTranslit from "cyrillic-to-translit-js";
import ChatsComponent from "./components/ChatsComponent";
import ChatLinksComponent from "./components/ChatLinksComponent";
import NotFoundComponent from "./components/NotFoundComponent";
import ChatsSettingsComponent from "./components/ChatsSettingsComponent";
import ProfileComponent from "./components/ProfileComponent";

const cyrillicToTranslit = new CyrillicToTranslit();


function App() {
    const [chatList, setChatList] = React.useState(['Беседка', 'Спорт', 'Игры']);
    const generateRoutes = () => {
        let links = {}, url, transliteratedLink;

        chatList.forEach((el) => {
            transliteratedLink = cyrillicToTranslit.transform(el).toLowerCase();
            url = '/chats/' + transliteratedLink;
            links[url] = el;
        });

        return links;
    }

    let links = generateRoutes();

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {Object.keys(links).map((value, index) => (
                        <Route
                            key={index}
                            path={value}
                            element={<ChatsComponent chatId={index} chatList={chatList} links={links}/>}
                        />
                    ))}
                    <Route path='/chats' element={<ChatsComponent chatId={0} chatList={chatList} />}/>
                    <Route path='/profile' element={<ProfileComponent />}/>
                    <Route path='/settings/chats'
                           element={
                               <ChatsSettingsComponent chatList={chatList} setChatList={setChatList} />
                           }
                    />
                    <Route path='/' element={<ChatLinksComponent links={links} />}/>
                    <Route path='*' element ={<NotFoundComponent />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
