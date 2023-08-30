import {Link, Outlet} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
        <ul className={'nav'}>
            <li><Link to={'users'}>users</Link></li>
            <li><Link to={'posts'}>posts</Link></li>
            <li><Link to={'comments'}>comments</Link></li>
        </ul>
        <Outlet/>
    </div>
  );
}

export default App;
