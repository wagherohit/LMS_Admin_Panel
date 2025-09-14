import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {

  const nav = useNavigate()
    const userData = JSON.parse(sessionStorage.getItem('userData'));


  const handleLogout = () => {
    sessionStorage.removeItem('userData');
    nav('/');
  };
  return (
    <nav className="navbar bg-body fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" href="#">
          <img style={{width:'80px', height:'80px'}} className="img-fluid" src="/logo.png" alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-start bg-dark text-light"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title fw-bold" id="offcanvasNavbarLabel">
              LMS
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body ">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink className="nav-link active text-light" aria-current="page" to='/dashboard'>
                  <i class="bi bi-speedometer"></i> Dashboard
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link text-light" to={'/courses'}>
                  <i class="bi bi-bookmark-plus-fill"></i> My Courses
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link text-light" to={'/students'}>
                 <i  class="bi bi-people-fill"></i> Students
                </NavLink>
              </li>
            </ul>

            <div className="mt-3">
               {userData && (
            <div className="text-white">
              <div className="me-3 ">
                <div><strong>{userData.username}</strong></div>
                <div className="mt-3">
                  <img style={{borderRadius:"50px", width:'200px'}} className="img-fluid" src={userData.profile} alt="profile" />
                </div>
              </div>
            </div>
          )}

          <div className="mt-3">
            <button className="btn btn-danger btn-sm" onClick={handleLogout}>
                Logout
              </button>
          </div>
            </div>
         
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
