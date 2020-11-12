import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
              

<nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top">
  <div className="container-fluid">
    <NavLink exact className="navbar-brand" to="/">A N I L</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link active"  to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link" to="project">Projects</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link" to="about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link" to="contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
      
</div>
            </div>
        </div>
</>
    )
}

export default Navbar
