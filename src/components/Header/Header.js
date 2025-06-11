import React, { useCallback, useEffect, useState } from 'react'
import navbar from '../../assets/images/navbar-logo.gif'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import apiList from '../../Api/Api_Calls'
import { useAuthContext } from '../../features/auth/context/AuthContext'
import axios from 'axios'
function Header() {

  const { login, userData, setLogin, setRole } = useAuthContext()

  const navigate = useNavigate();

  const handleProfileClick = useCallback(() => {
    console.log("Token:", login);
    if (login) {
      console.log("Navigating to Account Page...");

    } else {
      console.log("Navigating to Sign Up Page...");
      navigate("/login");
    }
  }, [login])
  const removeTokenData = () => {
    localStorage.removeItem("ProfileData");
    setLogin(false);
    localStorage.removeItem("role");
    setRole(0);
    navigate("/")
  }
  return (
    <div className='nav-sticky'>
      <nav className='navbar navbar-expand-lg bg-warning'>
        <button className='navbar-toggler' data-bs-toggle="offcanvas" data-bs-target="#navId">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className='nav-logo'><Link to="/"><img src={navbar} alt='no-nav-image' /></Link></div>
        <div className='offcanvas offcanvas-start' id="navId">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">E-commerce</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className='navbar-nav mx-auto flex-lg-row flex-column'>

              <li className='navbar-item dropdown d-flex align-items-center'>
                <Link
                  className={`nav-link`}
                  to={`/category/Grocery`}
                >
                  Grocery
                </Link>


              </li>
              <li className='navbar-item dropdown d-flex align-items-center'>
                <Link

                  className={`nav-link`}
                  to={`/category/Electronics`}
                >
                  Electronics
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='nav-icons'>
          {!login ? (
            <i className="bi bi-person" onClick={handleProfileClick}></i>
          ) : (
            /* If user is logged in, show dropdown */
            <div className="btn-group">

              <i
                className="bi bi-person dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ cursor: 'pointer' }}
              />
              <ul className="dropdown-menu dropdown-menu-end">
                <li><button className="dropdown-item" onClick={handleProfileClick}>Profile</button></li>
                <li><button className="dropdown-item" onClick={removeTokenData}>Sign Out</button></li>
              </ul>
            </div>
          )}

          <Link to="/Search" className="text-decoration-none text-dark"><i className="bi bi-search"></i></Link>

          <Link to="/Cart" className="text-decoration-none text-dark position-relative d-inline-block"><i className="bi bi-cart"></i>

          </Link>
        </div>
      </nav >

    </div >

  )
}

export default Header