import './App.css';
import * as React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import CyrillicToTranslit from "cyrillic-to-translit-js";
import ChatsComponent from "./components/chats-general/ChatsContainer";
import ChatLinksComponent from "./components/chat-links/ChatLinksComponent";
import NotFoundComponent from "./components/not-found/NotFoundComponent";
import ChatsSettingsComponent from "./components/chats-settings/ChatsSettingsContainer";
import {connect} from "react-redux";
import ProfileContainer from "./components/profile/ProfileContainer";

const cyrillicToTranslit = new CyrillicToTranslit();

function App({chats}) {
    const generateRoutes = () => {
        let links = {}, url, transliteratedLink;

        Object.keys(chats).forEach((el) => {
            transliteratedLink = cyrillicToTranslit.transform(chats[el]).toLowerCase();
            url = '/chats-general/' + transliteratedLink;
            links[url] = chats[el];
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
                            element={<ChatsComponent chatId={index} chatList={chats} links={links} />}
                        />
                    ))}
                    <Route path='/chats' element={<ChatsComponent chatId={0} chatList={chats} />}/>
                    <Route path='/profile'
                        element={
                            <ProfileContainer />
                        }
                    />
                    <Route path='/settings/chats'
                           element={
                               <ChatsSettingsComponent chatList={chats} />
                           }
                    />
                    <Route path='/' element={<ChatLinksComponent links={links} />}/>
                    <Route path='*' element ={<NotFoundComponent />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

const mapStateToProps = (state) => {
    return {
        chats: state.chats.list
    }
}

export default connect(mapStateToProps, null)(App);
