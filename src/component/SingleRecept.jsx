import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ReceptSideBar from "./ReceptSideBar";
import axiosInstance from "../../RequestUrl";

const SingleRecept = () => {
  const { id } = useParams();
  const [recept, setrecept] = useState();
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    SingleRecept();
  }, []);
  async function SingleRecept() {
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
      console.log(data);
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

              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <img src={recept.photo} />
                  </div>
                  <div className="col-sm-6">
                    <h3>ingredients:</h3>
                    <ul>
                      <li>{recept.ingredients}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <br />

              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <div>{recept.description}</div>
                  </div>
                  <div className="col-sm-6">
                    <div>{recept.preparation}</div>

                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Your messages"
                        id="floatingTextarea2"
                        style={{ height: "100px" }}
                      ></textarea>
                      <label htmlFor="floatingTextarea2">Your messages</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* <h1> hello world { id }</h1> */}
    </div>
  );
};

export default SingleRecept;
