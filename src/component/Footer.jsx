import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-3'>
            <p>CONTACT US</p>
             <Link>
             <p>HOME</p>
             </Link>
             <Link><p>BLOG</p></Link>
             <Link><p>RECEPT</p></Link>
    
            
          </div>
          <div className='col-sm-3'>
            <p>CONTACT</p>
            <Link><p>OUR TEAM</p></Link>
            <Link><p>CONTACT US</p></Link>

            <p></p>
            
          </div>
          <div className='col-sm-3'>
            <p>PARTNER WITH US</p>
            <Link><p>PRIVACY POLICY</p></Link>
            <Link><p>TERM OF SERVICE</p></Link>
            <Link><p>GET HELP</p></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
