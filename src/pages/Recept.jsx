import axios from "axios";
import React, { useEffect, useState } from "react";

const Recept = () => {
  const [blogDatas, setblogDatas] = useState([]);

  const [loading, setloading] = useState(false);

  useEffect(() => {
    history();
  }, []);
  async function history() {
    setloading(true);

    try {
      const { data } = await axios.get(
        "http://localhost:2000/api/v1/Recept/getRecept",
        {}
      );
      console.log(data);
      setblogDatas(data.result);
    } catch (error) {
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
            style={{ width: "100px", height: "100px", }}
          ></div>
        </h1>
      ) : (
        blogDatas?.map((elem) => (
          <div className="container-fluid " style={{ marginTop: "50px" }}>
            <div className="row">
              <div className="col-sm-4">hello</div>
              <br />

              <div className="col-sm-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">{elem.title}</p>
                  </div>
                </div>
              </div>
              <br />
              <div className="col-sm-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">{elem.title}</p>
                  </div>
                </div>
              </div>
              <br />
              <div className="col-sm-2">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">{elem.title}</p>
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

export default Recept;
