import {applyMiddleware, combineReducers, compose, createStore} from '@reduxjs/toolkit'
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import profileReducer from "./reducers/profileReducer";
import chatsReducer from "./reducers/chatsReducer";
import messageReducer from "./reducers/messageReducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
}

const reducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    message: messageReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

export const persistor = persistStore(store);
export default store;