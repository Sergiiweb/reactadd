import {FC} from "react";

import {IUser} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {userActions} from "../../redux";

interface IProps {
    user: IUser;
}

const User: FC<IProps> = ({user}) => {
    const dispatch = useAppDispatch();

    const {id, name, email, username} = user;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>username: {username}</div>
            <button onClick={() => dispatch(userActions.setCurrent(name))}>Select</button>
        </div>
    );
};

export {
    User
};