import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        name: 'Аноним',
    },
    reducers: {
        rename: (state, action) => {
            return {name: action.payload}
        },
    },
});

export const { rename } = profileSlice.actions;
export default profileSlice.reducer;