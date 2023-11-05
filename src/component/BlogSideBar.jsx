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
      <Link className="dropdown-item" to='/Blog/meat'>Meat</Link>
      <Link className="dropdown-item" to='Blog/vegetables'>Vegetables</Link>
      <Link className="dropdown-item" to='/Blog/fruits'>Fruits</Link>
      <Link className="dropdown-item" to='/Blog/milk-product'>Milk Product</Link>
      <Link className="dropdown-item" to='/Blog/legume'>Legume</Link>
      <Link className="dropdown-item" to='/Blog/smoothies'>Smoothies</Link>
      <Link className="dropdown-item" to='/Blog/vegan'>Vegan</Link>
    </div>
  </li>
  
</ul>

     
    </div>
  );
};

export default Sidebar;
