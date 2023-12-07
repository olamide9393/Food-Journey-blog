import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../RequestUrl";
import avocado from "../assets/avocado.jpeg";

const HomePage = () => {
  const [blogDatas, setblogDatas] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    history();
  }, []);
  async function history() {
    setloading(true);

    try {
      const { data } = await axiosInstance.get("Recept/getRecept/", {});
      console.log(data);
      const firstFourItems = data.result.slice(0, 4);
      setblogDatas(firstFourItems);
    } catch (error) {
    } finally {
      setloading(false);
    }
  }

  useEffect(() => {
    history();
  }, []);
  async function history() {
    setloading(true);

    try {
      const { data } = await axiosInstance.get("blog/getblog", {});
      // console.log(data);
      const firstFourItems = data.result.slice(0, 4);
      setblogDatas(firstFourItems);
    } catch (error) {
    } finally {
      setloading(false);
    }
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6" style={{ marginTop: "100px" }}>
            <h1 style={{ fontSize: "50px" }}>DO YOU WANT A HEALTHY LIFE ?</h1>
            <p>
              The thing you need to do is to eat healthy.You can find everything
              about healthy eating here.On this site you can both read blog
              posts and use healthy recepts
            </p>
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
          <div className="col-sm-6">
            <img
              src={avocado}
              alt="avocado"
              style={{ width: "100%", height: "50vh" }}
            />
          </div>
        </div>
      </div>
      <br />
    
      
      

       
    
        <h1 style={{ textAlign: "center" }}>LATEST BLOG</h1>
        <br />
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

                      <Link
                        className="btn btn-success"
                        to={"/blog/" + elem._id}
                      >
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

      <br />
      <br />
      <div>
        <h1 style={{ textAlign: "center" }}>MOST READ RECEPTS</h1>

        {loading ? (
          <h1>
            <div
              className="spinner-border text-success"
              style={{ width: "100px", height: "100px" }}
            ></div>
          </h1>
        ) : (
          blogDatas?.map((elem) => (
            <div className="container " style={{ marginTop: "50px" }}>
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
      </div>
    </div>
  );
};

export default HomePage;
