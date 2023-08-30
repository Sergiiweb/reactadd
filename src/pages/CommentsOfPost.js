import {useLocation} from "react-router-dom";

const CommentsOfPost = () => {
    const {state: {id}} = useLocation();

    return (
        <div>
            CommentsOfPost {id}
        </div>
    );
};

export {CommentsOfPost};