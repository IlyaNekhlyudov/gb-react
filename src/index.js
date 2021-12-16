import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./store/store";
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/es/integration/react'
import {persistor} from "./store/store";
import { CircularProgress } from '@mui/material';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<CircularProgress />}>
                    <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);
