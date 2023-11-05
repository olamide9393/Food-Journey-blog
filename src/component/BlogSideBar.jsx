import React from "react";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
         <ul className="nav nav-tabs">
  
  <li className="nav-item dropdown">
    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" >Blog Category</Link>
    <div className="dropdown-menu">
      <Link className="dropdown-item" to='/Blog'>All</Link>
      <Link className="dropdown-item" to='/Blog/sald'>Meat</Link>
      <Link className="dropdown-item" to='Blog/desserts'>Vegetables</Link>
      <Link className="dropdown-item" to='/Blog/drinks'>Fruits</Link>
      <Link className="dropdown-item" to='/Blog/snacks'>Milk Product</Link>
      <Link className="dropdown-item" to='/Blog/smoothies'>Legume</Link>
      <Link className="dropdown-item" to='/Blog/gluten-free'>Smoothies</Link>
      <Link className="dropdown-item" to='/Blog/vegan'>Vegan</Link>
    </div>
  </li>
  
</ul>

     
    </div>
  );
};

export default Sidebar;
