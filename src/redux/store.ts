import {configureStore} from "@reduxjs/toolkit";

import {countReducer, postReducer, userReducer} from "./slices";

const store = configureStore({
    reducer: {
        count: countReducer,
        users: userReducer,
        posts: postReducer
    }
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type  {
    RootState,
    AppDispatch
};

export {
    store
};