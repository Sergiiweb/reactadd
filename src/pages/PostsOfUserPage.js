import {useLoaderData, useLocation} from "react-router-dom";

import {PostsOfCurrentUserComponent} from "../components";

const PostsOfUserPage = () => {
    const {state: userFromPreviosPage} = useLocation();
    const posts = useLoaderData();

    return (
        <div>
            <p>
                {JSON.stringify(userFromPreviosPage)}
            </p>

            {posts.map(post => <PostsOfCurrentUserComponent key={post.id} post={post}/>)}
        </div>
    );
};

export {PostsOfUserPage};