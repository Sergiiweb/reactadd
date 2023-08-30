import {useLoaderData} from "react-router-dom";

import {PostComponent} from "../components";

const PostsPage = () => {
    const posts = useLoaderData();

    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export {PostsPage};