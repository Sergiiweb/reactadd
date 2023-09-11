import css from "./Count.module.css";
import {countActions} from "../../redux";
import {useAppDispatch} from "../../hooks";

const Count = () => {
    const dispatch = useAppDispatch();

    return (
        <div className={css.Count}>
            <button className={css.button} onClick={() => dispatch(countActions.inc())}>inc</button>
            <button className={css.button} onClick={() => dispatch(countActions.dec())}>dec</button>
            <button className={css.button} onClick={() => dispatch(countActions.reset())}>res</button>
        </div>
    );
};

export {Count};