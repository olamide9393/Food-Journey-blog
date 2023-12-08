import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../RequestUrl";
import ReceptSideBar from "../component/ReceptSideBar";

const Salad = () => {
  const [blogDatas, setblogDatas] = useState([]);

  const [loading, setloading] = useState(false);

  useEffect(() => {
    history();
  }, []);
  async function history() {
    setloading(true);

    try {
      const { data } = await axiosInstance.get("Recept/getRecept/");
      console.log(data);

      const saladCategory = data.result.filter(
        (recept) => recept.category === "Salads"
      );
      // console.log(saladCategory, "cayeen");

      setblogDatas(saladCategory);
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
              {/* <div className="col-sm-4">hello</div> */}
              <br />

              <div className="col-sm-3">
                <div className="card" style={{ width: "25rem" }}>
                  <img src={elem.photo} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{elem.title}</h5>

                    <Link
                      className="btn btn-success"
                      to={"/recept/" + elem._id}
                    >
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        ))
      )}
      <br />
      <br />
    </div>
  );
};

export default Salad;
