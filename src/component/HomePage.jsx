import React from 'react'
import { Link } from 'react-router-dom'
import avocado from "../assets/avocado.jpeg";

const HomePage = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6' style={{marginTop:'100px'}}>
            <h1 style={{fontSize:'50px'}}>DO YOU WANT A HEALTHY LIFE ?</h1>
            <p>The thing you need to do is to eat healthy.You can find everything about healthy eating here.On this site you can both read blog posts and use healthy recepts</p>
            <button className="btn btn-success">
                <Link
                  style={{
                    color: "white",
                    borderRadius: "100%",
                    textDecoration: "none",
                  }}
                  to="/login"
                >
                  START READING
                </Link>
              </button>

          </div>
          <br />
          <div className='col-sm-6'>
          <img
                src={avocado}
                alt="avocado"
                style={{ width: "100%", height: "50vh" }}
              />

          </div>
        </div>
      </div>
      <br />
      <br />
      <div>
        <h1 style={{textAlign:'center'}}>LATEST BLOG</h1>

        
        
      </div>

      <div>
        <h1 style={{textAlign:'center'}}>MOST READ RECEPTS</h1>
      </div>
      
    </div>
  )
}

export default HomePage
