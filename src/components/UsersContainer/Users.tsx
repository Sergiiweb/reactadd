import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {User} from "./User";
import {userService} from "../../services";
import {userActions} from "../../redux";

const Users = () => {
    const {users} = useAppSelector(state => state.users);
    const dispatch = useAppDispatch();

    useEffect(() => {
        userService.getAll().then(({data}) => dispatch(userActions.setAll(data)))
    }, []);

    return (
        <div>
            {users.map(user => <User user={user} key={user.id}/>)}
        </div>
    );
};

export {Users};