import React from 'react'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div>
     <div>
     <ul class="nav justify-content-center">
    <li className="nav-item" style={{ marginRight: '300px' }}>
      {/* <a className="nav-link" href="#">RECEPT</a> */}
      <Link className=" nav-link btn btn-success"to={"/admin/recept"}>RECEPT</Link>
    </li>
    <li className="nav-item" style={{ marginRight: '300px' }}>
      {/* <a className="nav-link" href="#">BLOG</a> */}
      <Link className=" nav-link btn btn-success"to={"/admin/blog"}>BLOG</Link>

    </li>
    <li className="nav-item" style={{ marginRight: '300px' }}>
      {/* <a className="nav-link" href="#">CREATE RECEPT</a> */}
      <Link className=" nav-link btn btn-success"to={"/Create-recept"}> CREATE RECEPT</Link>

    </li>
    <li className="nav-item" style={{ marginRight: '300px' }}>
      {/* <a className="nav-link " href="#">CREATE BLOG</a> */}
      <Link className=" nav-link btn btn-success"to={"/Createblog"}>CREATE BLOG</Link>

    </li>
  </ul>
  <br /><br /><br />

     </div>
     
    </div>
  )
}

export default AdminDashboard
