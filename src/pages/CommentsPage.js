import {useLoaderData} from "react-router-dom";

import {CommentsComponent} from "../components";

const CommentsPage = () => {
    const comments = useLoaderData();

    return (
        <div>
            {comments.map(comment => <CommentsComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {CommentsPage};