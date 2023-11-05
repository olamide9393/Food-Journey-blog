import React from 'react'
import { Link } from 'react-router-dom'


const ReceptSideBar = () => {
  return (
    <div>
                 <ul className="nav nav-tabs">
  
  <li className="nav-item dropdown">
    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" >Recepts Category</Link>
    <div className="dropdown-menu">
      <Link className="dropdown-item" to='/recept'>All</Link>
      <Link className="dropdown-item" to='/recept/sald'>Salad</Link>
      <Link className="dropdown-item" to='recept/desserts'>Desserts</Link>
      <Link className="dropdown-item" to='/recept/drinks'>Drinks</Link>
      <Link className="dropdown-item" to='/recept/snacks'>Snacks</Link>
      <Link className="dropdown-item" to='/recept/smoothies'>Smoothies</Link>
      <Link className="dropdown-item" to='/recept/gluten-free'>Gluten free</Link>
      <Link className="dropdown-item" to='/recept/vegan'>Vegan</Link>
    </div>
  </li>
  
</ul>
      
    </div>
  )
}

export default ReceptSideBar
