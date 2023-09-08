import {Link} from "react-router-dom";

import css from './Header.module.css';
import {useAppSelector} from "../../hooks";

const Header = () => {
    const {count} = useAppSelector(state => state.count);

    return (
        <div className={css.Header}>
            <div className={css.links}>
                <Link to={'users'}>users</Link>
                <Link to={'posts'}>posts</Link>
                <Link to={'count'}>count</Link>
            </div>
            <div className={css.info}>
                <div>user:</div>
                <div>post:</div>
                <div>count: {count}</div>
            </div>
        </div>
    );
};

export {Header};