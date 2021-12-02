import { configureStore } from '@reduxjs/toolkit'
import profileReducer from "./reducer";

const store = configureStore({ reducer: profileReducer })

export default store;