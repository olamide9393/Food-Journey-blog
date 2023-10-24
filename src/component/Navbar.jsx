import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import Footer from './Footer'

const Navbar = () => {
  return (
    <div>
     <nav class="navbar navbar-expand-md navbar-dark">
  <a style={{color:'black'}} class="navbar-brand" href="#">FOOD JOURNEY BLOG</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" style={{backgroundColor:'black'}}>
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar" >
    <ul class="navbar-nav" >
      <li class="nav-item" >
        <Link style={{color:'black'}}  class="nav-link" to="/Register" >HOME</Link>
      </li>
      <li class="nav-item">
        <Link style={{color:'black'}}  class="nav-link" to="/Register" >BLOG</Link>

      </li>
      <li class="nav-item">
        <Link style={{color:'black'}}  class="nav-link" to="/Register" >RECEPT</Link>

      </li> 
      <li class="nav-item">
        <Link style={{color:'black'}}  class="nav-link" to="/Register" >ABOUT US</Link>

      </li> 

      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="text" placeholder="Search"/>
    <button class="btn btn-success" type="submit">Search</button>
  </form>
</nav>   
    </ul>
  </div>  
</nav>

      <Outlet/>
      <Footer/>


    </div>
  )
}

export default Navbar
