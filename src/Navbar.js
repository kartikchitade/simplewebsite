import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light ">
  <Link className="navbar-brand" to="/">WEBDITOX</Link>
  <button className="navbar-toggler" 
          type="button" data-toggle="collapse" 
          data-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/Home">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Service">Service</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/About">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Contact">Contact</Link>
      </li>
      
    </ul>

  </div>
</nav>
        </>
    )
}

export default Navbar;