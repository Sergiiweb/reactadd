import {useDispatch} from "react-redux";

import css from "./Count.module.css";
import {AppDispatch, countActions} from "../../redux";

const Count = () => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className={css.Count}>
            <button className={css.button} onClick={() => dispatch(countActions.inc())}>inc</button>
            <button className={css.button} onClick={() => dispatch(countActions.dec())}>dec</button>
            <button className={css.button} onClick={() => dispatch(countActions.reset())}>res</button>
        </div>
    );
};

export {Count};