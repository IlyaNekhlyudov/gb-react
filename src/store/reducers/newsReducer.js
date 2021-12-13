import { createSlice } from '@reduxjs/toolkit'
import {getPopularNews} from "../../functions/API/newsAPI";

export const newsSlice = createSlice({
    name: 'news',
    initialState: {
        popular: [],
        needUpdate: {},
        isLoading: false,
        error: false
    },
    reducers: {
        add: (state, action) => {
            state.popular = action.payload;

            let needUpdateTime = new Date();
            needUpdateTime.setHours(needUpdateTime.getHours() + 1);
            state.needUpdate = needUpdateTime;
        },

        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },

        setError: (state, action) => {
            state.error = action.payload;
        }
    },
});

export const { add, setLoading, setError } = newsSlice.actions;
export default newsSlice.reducer;

export const getNews = () => {
    return (dispatch) => {
        dispatch(setLoading(true));
        dispatch(setError(false));

        getPopularNews()
            .then((result) => {
                dispatch(add(result.data.results));
                setError(false);
            })
            .catch((reason) => {
                console.log(reason);
                dispatch(setError(true));
            })
            .finally(() => {
                dispatch(setLoading(false));
            });
    }
}