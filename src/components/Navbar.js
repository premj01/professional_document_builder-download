import React, { cloneElement } from 'react'
import logo from './logotemp.svg'
import tpdb from './Logos/The Professional Document Builder-logos/The Professional Document Builder-logos_black.png'
import { Link } from "react-router-dom"
import free from './Logos/flaticon/copy.png'

// #F8F9FA

export default function Navbar(props) {
  return (
    <div>
      <nav class="navbar" data-bs-theme={props.theme} style={{ backgroundColor: props.bgcolor }}>
        <div class="container-fluid">

          <Link class="navbar-brand" to="/" style={{ fontFamily: "Italianno", display: "flex", flexDirection: "row" }}><img style={{ height: "40px", filter: "invert(100%)" }} src={free} alt="" /><span style={{ fontSize: "30px" }}>&nbsp;Document Builder</span></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{ fontFamily: "Kanit", fontSize: "18px" , display:"flex" , alignItems:"center" }}>
              <li class="nav-item" >
                <a class="nav-link active" aria-current="page" to="">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Learn</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">About</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul class="dropdown-menu" style={{ textAlign: "center" }}>
                  <li><a class="dropdown-item" href="/formresume">Resume</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Curriculum Vitae</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Business Card</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Question Papers</a></li>
                  {/* <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li> */}
                </ul>
              </li>
            </ul>
            {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          </div>
        </div>
      </nav>
    </div>
  )
}
