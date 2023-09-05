import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {AuthRequired} from "./hoc";
import {CarsPage, LoginPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'cars'}/>
            },
            {
                path: 'cars',
                element: <CarsPage/>
            },
        ]
    },
    {
        path: 'login',
        element: <LoginPage/>
    }
])

export {
    router
}