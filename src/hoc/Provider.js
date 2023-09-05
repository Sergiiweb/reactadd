import {createContext, useReducer} from "react";

import {authInitialState, authReducer, carInitialState, carReducer} from "../reducers";

const StateContext = createContext(null);
const Provider = ({children}) => {
    const reducers = {
        cars: useReducer(carReducer, carInitialState),
        auth: useReducer(authReducer, authInitialState)
    }
    return (
        <StateContext.Provider value={reducers}>
            {children}
        </StateContext.Provider>
    );
};

export {
    Provider,
    StateContext
};