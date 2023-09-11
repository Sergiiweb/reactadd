import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../interfaces";
import {userService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    users: IUser[];
    user: string;
}

const initialState: IState = {
    users: [],
    user: ''
}

const getAll = createAsyncThunk<IUser[], void>(
    'userSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await userService.getAll();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        // setAll: (state, action) => {
        //     state.users = action.payload;
        // },
        setCurrent: (state, action) => {
            state.user = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.users = action.payload;
        })
        .addCase(getAll.rejected, (state, action) => {

        })
});

const {reducer: userReducer, actions} = userSlice;

const userActions = {
    ...actions,
    getAll
}

export {
    userActions,
    userReducer
}