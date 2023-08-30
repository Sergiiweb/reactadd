import {useLoaderData} from "react-router-dom";

import {UserComponent} from "../components";

const UsersPage = () => {
    const users = useLoaderData();

    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export {UsersPage};