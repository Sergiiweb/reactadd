import {useNavigate} from "react-router-dom";

const UserComponent = ({user}) => {
    const navigate = useNavigate();

    const showPostsOfThisUser = () => {
        navigate({pathname: `${user.id}`}, {state: {user}});
    };

    return (
        <div>
            {user.id}: {user.name}
            <div>
                <button onClick={showPostsOfThisUser}>show posts</button>
            </div>
        </div>
    );
};

export {UserComponent};