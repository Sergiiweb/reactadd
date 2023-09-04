import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";

import {Provider} from "./hoc";
import {router} from "./router";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider>
        <RouterProvider router={router}/>
    </Provider>
);