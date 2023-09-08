import {apiService, IRes} from "./apiService";
import {IPost} from "../interfaces";
import {urls} from "../constants";

const postService = {
    getAll(): IRes<IPost[]> {
        return apiService.get(urls.posts);
    }
}

export {
    postService
}