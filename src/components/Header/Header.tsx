import {Link} from "react-router-dom";

import css from './Header.module.css';
import {useAppSelector} from "../../hooks";

const Header = () => {
    const {count} = useAppSelector(state => state.count);
    const {user} = useAppSelector(state => state.users);
    const {post} = useAppSelector(state => state.posts);

    return (
        <div className={css.Header}>
            <div className={css.links}>
                <Link to={'users'}>users</Link>
                <Link to={'posts'}>posts</Link>
                <Link to={'count'}>count</Link>
            </div>
            <div className={css.info}>
                <div>user: {user ? user : 'user name'}</div>
                <div>post: {post ? post : 'post title'}</div>
                <div>count: {count}</div>
            </div>
        </div>
    );
};

export {Header};