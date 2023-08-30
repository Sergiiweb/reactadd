const PostComponent = ({post}) => {
    return (
        <div>
            {post.id}: {post.title}
        </div>
    );
};

export {PostComponent};