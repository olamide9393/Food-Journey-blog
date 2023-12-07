import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../RequestUrl";
import Footer from "./Footer";

const Navbar = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getUser();
  }, []);
  async function getUser() {
    // Retrieve the token string from local storage
    // const tokenString = localStorage.getItem("user");
    // const {token}  = JSON.parse(tokenString);
    // console.log(token);
    let token; // Declare the token variable in the appropriate scope

    const tokenString = localStorage.getItem("user");

    if (tokenString) {
      try {
        const parsedData = JSON.parse(tokenString);
        if (parsedData && parsedData.token) {
          // Initialize the token variable here
          token = parsedData.token;
          // console.log(token, "hello");
        } else {
          console.log("Token is missing or invalid.");
        }
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const response = await axiosInstance.get("auth/getUser", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setData(response.data);
      // console.log(response.data,"test");
    } catch (error) {
      console.log(error);
      // Handle the error appropriately for your application
      if (error.response && error.response.status === 401) {
        console.error("Request error:", error.message);
        navigate("/login");
      } else {
      }
    }
  }
  useEffect(() => {
    // Check if a token is available in local storage
    const token = localStorage.getItem("user");
    setIsLoggedIn(!!token); // Set isLoggedIn to true if token is available
  }, []);

  const handleLogout = () => {
    // Clear the token from local storage on logout
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };


  
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark">
        <Link
          to="/"
          style={{ color: "black", fontSize: "15px" }}
          className="navbar-brand"
        >
       <h6>FOOD JOURNEY BLOG</h6>
        </Link>

        {isLoggedIn ? (
          <>
            <span>Welcome {data?.name}</span>
          </>
        ) : (
          <div></div>
        )}

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
          style={{ backgroundColor: "green" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                style={{
                  color: "black",
                  marginLeft: "120px",
                  marginTop: "10px",
                  fontSize: "20px",
                }}
                className="nav-link"
                to="/"
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{
                  color: "black",
                  marginLeft: "120px",
                  marginTop: "10px",
                  fontSize: "20px",
                }}
                className="nav-link"
                to="/Blog"
              >
                BLOG
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{
                  color: "black",
                  marginLeft: "120px",
                  marginTop: "10px",
                  fontSize: "20px",
                }}
                className="nav-link"
                to="/recept"
              >
                RECEPT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{
                  color: "black",
                  marginLeft: "120px",
                  marginTop: "10px",
                  fontSize: "20px",
                }}
                className="nav-link"
                to="/about-us"
              >
                ABOUT US
              </Link>
            </li>

            {/* <li className="nav-item">
        <Link style={{color:'black',marginLeft:'100px',marginTop:'10px',fontSize:'20px'}}  className="nav-link" to="/Createblog" >CREATE BLOG</Link>
      </li> 
      <li className="nav-item">
        <Link style={{color:'black',marginLeft:'100px',marginTop:'10px',fontSize:'20px'}}  className="nav-link" to="/Admin-dashboard" >ADMIN DASHBOARD</Link>
      </li>  */}

            {isLoggedIn ? (
              // Display "Logout" if the user is logged in
              <>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    onClick={handleLogout}
                    style={{
                      marginLeft: "150px",
                      marginTop: "30px",
                      color: "black",
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              // Display "Login" and "Register" if the user is not logged in
              <>
                <li className="nav-item">
                  <Link
                    style={{
                      color: "black",
                      marginLeft: "120px",
                      marginTop: "10px",
                      fontSize: "20px",
                    }}
                    className="nav-link"
                    to="/register"
                  >
                    REGITSTER
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{
                      color: "black",
                      marginLeft: "120px",
                      marginTop: "10px",
                      fontSize: "20px",
                    }}
                    className="nav-link"
                    to="/login"
                  >
                    LOGIN
                  </Link>
                </li>
              </>
            )}

            <nav className="navbar navbar-expand-sm navbar-dark">
              <form
                style={{
                  marginLeft: "100px",
                  marginTop: "10px",
                  fontSize: "25px",
                }}
                className="form-inline"
              >
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                />
                <button className="btn btn-success" type="submit">
                  Search
                </button>
              </form>
            </nav>
          </ul>
        </div>
      </nav>
      <Outlet />
      
      <div style={{ border: "1px solid green" }}></div>
      <br />
      <Footer />
    </div>
  );
};

export default Navbar;
