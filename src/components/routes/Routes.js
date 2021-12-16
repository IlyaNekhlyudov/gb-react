import {BrowserRouter, Route, Routes} from "react-router-dom";
import ChatsContainer from "../chats-general/ChatsContainer";
import ProfileContainer from "../user/profile/ProfileContainer";
import ChatsSettingsContainer from "../chats-settings/ChatsSettingsContainer";
import NewsContainer from "../news/NewsContainer";
import ChatLinksComponent from "../chat-links/ChatLinksComponent";
import NotFoundComponent from "../not-found/NotFoundComponent";
import SignupContainer from "../user/signup/SignupContainer";
import * as React from "react";
import LoginContainer from "../user/login/LoginContainer";
import PrivateRoute from "../../hocs/PrivateRoute";
import SignOutContainer from "../user/signout/SignOutContainer";

const RoutesFrame = ({links, chats, authed}) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {Object.keys(links).map((value, index) => (
                        <Route
                            key={index}
                            path={value}
                            element={
                                <PrivateRoute authenticated={authed}>
                                    <ChatsContainer chatId={index} chatList={chats} links={links} />
                                </PrivateRoute>
                            }
                        />
                    ))}
                    <Route path='/chats'
                           element={
                                <PrivateRoute authenticated={authed}>
                                    <ChatsContainer chatId={0} chatList={chats} />
                                </PrivateRoute>
                            }
                    />
                    <Route path='/profile'
                           element={
                               <PrivateRoute authenticated={authed}>
                                   <ProfileContainer />
                               </PrivateRoute>
                           }
                    />
                    <Route path='/settings/chats'
                        element={
                            <PrivateRoute authenticated={authed}>
                                <ChatsSettingsContainer chatList={chats} />
                            </PrivateRoute>
                        }
                    />
                    <Route path='/news' element={<NewsContainer />} />
                    <Route path='/' element={<ChatLinksComponent links={links} />}/>
                    <Route path="/login" element={<LoginContainer />} />
                    <Route path="/signup" element={<SignupContainer />} />
                    <Route path="/signout" element={<SignOutContainer />} />
                    <Route path='*' element ={<NotFoundComponent />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default RoutesFrame;