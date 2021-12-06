import {combineReducers, createStore} from '@reduxjs/toolkit'
import profileReducer from "./reducers/profileReducer";
import chatsReducer from "./reducers/chatsReducer";
import messageReducer from "./reducers/messageReducer";

const reducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    message: messageReducer,
});

const store = createStore(reducer);

export default store;