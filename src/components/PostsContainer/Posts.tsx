import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {Post} from "./Post";
import {postService} from "../../services";
import {postActions} from "../../redux";

const Posts = () => {
    const {posts} = useAppSelector(state => state.posts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        postService.getAll().then(({data}) => dispatch(postActions.setAll(data)));
    }, []);

    return (
        <div>
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </div>
    );
};

export {Posts};