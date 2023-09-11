import {FC} from "react";

import {IPost} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {postActions} from "../../redux";

interface IProps {
    post: IPost;
}

const Post: FC<IProps> = ({post}) => {
    const dispatch = useAppDispatch();

    const {id, userId, title, body} = post;

    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <button onClick={() => dispatch(postActions.setCurrent(title))}>Select</button>
        </div>
    );
};

export {
    Post
};