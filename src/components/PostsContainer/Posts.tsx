import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {Post} from "./Post";
import {postActions} from "../../redux";

const Posts = () => {
    const {posts} = useAppSelector(state => state.posts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postActions.getAll());
    }, []);

    return (
        <div>
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </div>
    );
};

export {Posts};