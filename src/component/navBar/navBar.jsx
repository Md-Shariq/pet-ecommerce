import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./navBar.css"

export default function NavBar(props) {


  const navigate = useNavigate();

  function goToLogin() {
    navigate("/login")
  }

  function onLogout() {
    localStorage.removeItem('token')
    navigate("/login")
    console.log('logout');
  }


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid px-5">
          <a className="navbar-brand" href="#">Logo</a>
          <div className="d-flex position-relative align-items-center">
            <i class="fa-solid fa-magnifying-glass search-icon"></i>
            <input className="form-control ps-5 border-0" type="search" placeholder="Search Pet" aria-label="Search" />
            <button className="btn btn-success search-btn" >Search</button>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home"> <a className="nav-link active fs-14 fw-600" aria-current="page" href="#">Home</a></Link>
              </li>
              {!localStorage.getItem('token') && <button className='btn btn-primary login-btn' onClick={goToLogin}>Login</button>}
              {localStorage.getItem('token') && <button className='btn btn-primary login-btn' onClick={onLogout}>Logout</button>}
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}
