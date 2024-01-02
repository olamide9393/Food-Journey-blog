import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ReceptSideBar from "./ReceptSideBar";
import axiosInstance from "../../RequestUrl";
import './Footer.css'


const SingleRecept = () => {
  const { id } = useParams();
  const [recept, setrecept] = useState();
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    SingleRecept();
  }, []);
  async function SingleRecept() {
    setloading(true)

    // try {
    //   const { data } = await axios.get(
    //     `http://localhost:2000/api/v1/recept/${id}`
    //   );
    //   console.log(data, "testing");
    //   setrecept(data);
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setloading(false);
    // }

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
      } catch (error) {}
    }
    try {
      const { data } = await axiosInstance.get(`recept/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setrecept(data);
    } catch (error) {
      // Handle the error appropriately for your application
      if (error.data && error.data.status === 401) {
        console.error("Request error:", error.message);
        window.location.reload();
        navigate("/login");
        console.log(error);
      } else {
      }
    } finally {
      setloading(false);
    }
  }

  return (
    <div>
      <ReceptSideBar />

      {loading ? (
        <h1>
          <div
            className="spinner-border text-success"
            style={{ width: "100px", height: "100px" }}
          ></div>
        </h1>
      ) : (
        <div>
          {recept && (
            <div>
              <h1 style={{ textAlign: "center" }}>{recept.title}</h1>
              <div className="photo-size">
                <img src={recept.photo} />
              </div>
              <h2 style={{ textAlign: "center" }}>{recept.description}</h2>

              <h3>ingredients:</h3>
              <li>{recept.ingredients}</li>
              <br />
              <h3>preparation:</h3>
              <div>{recept.preparation}</div>
              <br />
              <div className="form-floating">
                <label htmlFor="floatingTextarea2">Your messages</label>
                <textarea
                  className="form-control"
                  placeholder="Your messages"
                  id="floatingTextarea2"
                  style={{ height: "200px", width: "500px" }}
                ></textarea>
              </div>
              <br />
              <br />
              <br />
            </div>
          )}
        </div>
      )}

      {/* <h1> hello world { id }</h1> */}
    </div>
  );
};

export default SingleRecept;
