import {configureStore} from "@reduxjs/toolkit";

import {countReducer} from "./slices";

const store = configureStore({
    reducer: {
        count: countReducer,
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