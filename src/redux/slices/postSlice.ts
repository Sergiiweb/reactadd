import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IPost} from "../../interfaces";
import {postService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    posts: IPost[];
    post: string;
}

const initialState: IState = {
    posts: [],
    post: ''
}

const getAll = createAsyncThunk<IPost[], void>(
    'postSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await postService.getAll();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        // setAll: (state, action) => {
        //     state.posts = action.payload;
        // },
        setCurrent: (state, action) => {
            state.post = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.posts = action.payload;
        })
});

const {reducer: postReducer, actions} = postSlice;

const postActions = {
    ...actions,
    getAll
}

export {
    postActions,
    postReducer
}