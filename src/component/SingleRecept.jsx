import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const SingleRecept = () => {
  const { id } = useParams();
  const [recept, setrecept] = useState();
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    SingleRecept();
  }, []);
  async function SingleRecept() {
    try {
      const { data } = await axios.get(
        `http://localhost:2000/api/v1/recept/${id}`
      );
      console.log(data, "testing");
      setrecept(data);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  }

  return (
    <div>
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
                    <div>{recept.photo}</div>
                  </div>
                  <div className="col-sm-6">
                    <h3>ingredients:</h3>
                    <p>{recept.ingredients}</p>
                  </div>
                </div>
              </div>
              <br />

              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <div >{recept.description}</div>
                  </div>
                  <div className="col-sm-6">

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