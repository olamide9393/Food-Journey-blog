import React from "react";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span
            className="navbar-toggler-icon"
            style={{ backgroundColor: "black", color: "white" }}
          ></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="nav flex-column"          style={{
          backgroundColor: "green",
          width: "30%",
          height: "70vh",
        }}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Stactics
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Dashboard/Email-Template">
                E-mail Template
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Dashboard/History">
                History
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Dashboard/Subscribion">
                Subscribtion Form
              </Link>
            </li>
            <li className="nav-item">
            
                <Link className="nav-link" to="/Dashboard/Settings">
                  Settings
                </Link>
              
            </li>
          </ul>
        </div>
      </nav>
      <br />

      <Outlet />
      hi
    </div>
  );
};

export default Sidebar;
