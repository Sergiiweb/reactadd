const CommentsComponent = ({comment}) => {
    return (
        <div>
            {comment.id}: {comment.name}
        </div>
    );
};

export {CommentsComponent};