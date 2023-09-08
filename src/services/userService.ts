import {apiService, IRes} from "./apiService";
import {IUser} from "../interfaces";
import {urls} from "../constants";

const userService = {
    getAll():IRes<IUser[]>{
        return apiService.get(urls.users);
    }
}

export {
    userService
}