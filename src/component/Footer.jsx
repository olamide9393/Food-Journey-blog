import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'



const Footer = () => {
  return (
    <div className='Link'>
      <div className='container' >
        <div className='row'>
          <div className='col-sm-3'>
           <div >
            <h5>CONTACT US</h5>
            <Link to="/" className='Link'>
             <p>HOME</p>
             </Link>
             <Link to="/blog" className='Link'><p>BLOG</p></Link>
             <Link to="/recept" className='Link'><p>RECEPT</p></Link>
            
           </div>
    
            
          </div>
          <div className='col-sm-3'>
            <h5>CONTACT</h5>
            <Link className='Link'><p>OUR TEAM</p></Link>
            <Link to="/Contact-Us" className='Link'><p>CONTACT US</p></Link>

            <p></p>
            
          </div>
          <div className='col-sm-3'>
            <h5>PARTNER WITH US</h5>
            <Link to="/Privacy & policy" className='Link'><p>PRIVACY POLICY</p></Link>
            <Link to="/Terms of Service" className='Link'><p>TERM OF SERVICE</p></Link>
            <Link to="/help" className='Link'><p>GET HELP</p></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
