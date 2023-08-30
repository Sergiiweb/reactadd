import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';
import {CommentsPage, PostsOfUserPage, PostsPage, UsersPage} from "./pages";
import {getAllComments, getAllPosts, getAllUsers, getPostsOfCurrentUser} from "./services";

let router = createBrowserRouter([
    {
        path: '',
        element: <App/>,
        children: [
            {
                path: 'users',
                element: <UsersPage/>,
                loader: getAllUsers
            },
            {
                path: 'posts',
                element: <PostsPage/>,
                loader: getAllPosts
            },
            {
                path: 'comments',
                element: <CommentsPage/>,
                loader: getAllComments
            },
            {
                path: 'users/:id',
                element: <PostsOfUserPage/>,
                loader: getPostsOfCurrentUser
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
