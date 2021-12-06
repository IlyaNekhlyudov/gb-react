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
import {connect} from "react-redux";
import ProfileComponent from "./components/ProfileComponent";
import {rename} from "./store/reducers/profileReducer";

const cyrillicToTranslit = new CyrillicToTranslit();

function App({userName, renameUser, chats}) {
    const generateRoutes = () => {
        let links = {}, url, transliteratedLink;

        Object.keys(chats).forEach((el) => {
            transliteratedLink = cyrillicToTranslit.transform(chats[el]).toLowerCase();
            url = '/chats/' + transliteratedLink;
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
                            element={<ChatsComponent chatId={index} chatList={chats} links={links} userName={userName}/>}
                        />
                    ))}
                    <Route path='/chats' element={<ChatsComponent chatId={0} chatList={chats} userName={userName} />}/>
                    <Route path='/profile'
                        element={
                            <ProfileComponent userName={userName} renameUser={renameUser} />
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
        userName: state.profile.name,
        chats: state.chats.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        renameUser: (state, action) => {
            dispatch(rename(action))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
