import {useAppReducer} from "../../hooks";
import {authService} from "../../services";
import {authActions} from "../../reducers";
import css from './Header.module.css';

const Header = () => {
    const [{me}, dispatch] = useAppReducer(state => state.auth);

    if (!me) {
        try {
            authService.me().then(({data}) => dispatch(authActions.setMe(data)))
        } catch (e) {
            console.log(e, 'Error from header');
        }
    }

    return (
        <div className={css.Header}>
            {me && <h1>{me.username}</h1>}
        </div>
    );
};

export {Header};