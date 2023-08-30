import {Link} from "react-router-dom";

const PostComponent = ({post}) => {
    return (
        <div>
            <Link to={`${post.id}`} state={{id:post.id}}>{post.id}: {post.title}</Link>
        </div>
    );
};

export {PostComponent};