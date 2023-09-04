import {useContext} from "react";

import {StateContext} from "../hoc";

const useAppReducer = (state) => state(useContext(StateContext));

export {
    useAppReducer
}