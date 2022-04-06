import { NavLink, Outlet } from "react-router-dom";

import './sidebar.css';

function Sidebar() {
  return (
    <>
      <div className="sidebarContainer">
        <nav className="sidebarnav">
        <h3>The Tech Blog</h3>
          <NavLink to="/" className='link'>Home</NavLink>{ " "}
          <NavLink to="/about" className='link'>About</NavLink>{ " "}
          <NavLink to="/article" className='link'>Article</NavLink>
        </nav>
              <Outlet/>
      </div>
    </>
  );
}

export default Sidebar;
