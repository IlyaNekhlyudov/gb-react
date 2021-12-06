import { createSlice } from '@reduxjs/toolkit'

export const chatsSlice = createSlice({
    name: 'chats',
    initialState: {
        list: {
            0: 'Беседка',
            1: 'Спорт',
            2: 'Игры'
        }
    },
    reducers: {
        add: (state, action) => {
            let length = Object.keys(state.list).length;
            state.list[length] = action.payload;
        },
        remove: (state, action) => {
            Object.keys(state.list).forEach((el) => {
                if (el === action.payload) delete state.list[el];
            })

            console.log(action.payload);
        }
    },
});

export const { add, remove } = chatsSlice.actions;
export default chatsSlice.reducer;