import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../RequestUrl";
import ReceptSideBar from "../component/ReceptSideBar";

const ReceptPage4 = () => {
  const [blogDatas, setblogDatas] = useState([]);

  const [loading, setloading] = useState(false);

  useEffect(() => {
    history();
  }, []);
  async function history() {
    setloading(true);

    try {
      const { data } = await axiosInstance.get(
        "Recept/getRecept/",
        {}
      );
      const firstFourItems = data.result.slice(30, 40);
      setblogDatas(firstFourItems);
    } catch (error) {
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
        blogDatas?.map((elem) => (
          <div className="container-fluid " style={{ marginTop: "50px" }}>
            <div className="row">
              <br />

              <div className="col-sm-3">
              <div className="card" style={{ width: "25rem" }}>
                <img src={elem.photo}  className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{elem.title}</h5>
                  
                  <Link className="btn btn-success" to={"/recept/" + elem._id }>
                    READ MORE
                  </Link>
                </div>
              </div>
              </div>
              <br />
            </div>
            <br />
            <br />
          </div>
        ))
      )}

      <div className="container">
        <ul className="pagination" style={{ gap: "20px" }}>
          <li className="page-item">
            {" "}
            <Link className="page-link" to="/recept">
              1
            </Link>{" "}
          </li>
          <li className="page-item">
            {" "}
            <Link className="page-link" to="/recept/2">
              2
            </Link>{" "}
          </li>
          <li className="page-item">
            {" "}
            <Link className="page-link" to="/recept/3">
              3
            </Link>{" "}
          </li>
          <li className="page-item">
            {" "}
            <Link className="page-link" to="/recept/4">
              4
            </Link>{" "}
          </li>
          <li className="page-item">
            {" "}
            <Link className="page-link" to="/recept/5">
              {" "}
              5{" "}
            </Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReceptPage4;
