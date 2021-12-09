import { createSlice } from '@reduxjs/toolkit'

export const messageSlice = createSlice({
    name: 'message',
    initialState: {
        list: {
            0: [],
            1: [],
            2: [],
        }
    },
    reducers: {
        add: (state, action) => {
            state.list[action.payload.chatId].push(action.payload);
        },

        addChat: (state) => {
            let lastIndex = Object.keys(state.list).length;
            let lastElement = +Object.keys(state.list)[lastIndex-1] + 1;
            state.list[lastElement] = [];
        },

        removeChat: (state, action) => {
            Object.keys(state.list).forEach((value) => {
                if (value === action.payload) delete state.list[value];
            });
        }
    },
});

export const { add, addChat, removeChat } = messageSlice.actions;
export default messageSlice.reducer;

export const addMessage = (messageList, message) => {
    return (dispatch) => {
        dispatch(add(message));
    }
}