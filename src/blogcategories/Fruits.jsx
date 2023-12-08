import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../RequestUrl";
import Sidebar from "../component/BlogSideBar";
const Fruits = () => {
  const [blogDatas, setblogDatas] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    fruit();
  }, []);
  async function fruit() {
    setloading(true);

    try {
      const { data } = await axiosInstance.get("blog/getblog/", {});
      console.log(data);

      const FruitsCategory = data.result.filter(
        (blog) => blog.category === "fruits"
      );
      // console.log(chemists,'cayeen');

      setblogDatas(FruitsCategory);
    } catch (error) {
    } finally {
      setloading(false);
    }
  }
  return (
    <div>
      <Sidebar />
      {loading ? (
        <h1>
          <div
            className="spinner-border text-success"
            style={{ width: "100px", height: "100px" }}
          ></div>
        </h1>
      ) : (
        blogDatas?.map((elem) => (
          <div className="container" style={{ marginTop: "50px" }}>
            <div className="row">
              <br />
              <div className="col-sm-4">
                <div className="card" style={{ width: "25rem" }}>
                  <img src={elem.photo} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{elem.title}</h5>

                    <Link className="btn btn-success" to={"/blog/" + elem._id}>
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Fruits;
