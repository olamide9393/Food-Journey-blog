import axios from "axios";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const [blogDatas, setblogDatas] = useState([]);

  const [loading, setloading] = useState(false);
       
  useEffect(() => {
    history();
  }, []);
  async function history() {
    setloading(true);
    // Retrieve the token string from local storage
    const tokenString = localStorage.getItem("user");
    const { token } = JSON.parse(tokenString);
    try {
      const { data } = await axios.get("http://localhost:2000/api/v1/blog/getblog", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setblogDatas(data.message);
    } catch (error) {
    } finally {
      setloading(false);
    }
  }
  return (
    <div>
      {
                                         loading ? <h1><div className="spinner-border text-muted" style={{ width: '100px', height: '100px' }}></div>
                                </h1> :
                                        blogData?.map((elem) => (


                                          <div className="container-fluid">
                                          <div className="row">
                                            <div className="col-sm-4">hello</div>
                                            <br />
                                  
                                            <div className="col-sm-3">
                                              <div className="card" style={{ width: "18rem" }}>
                                                <img src="..." className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                  <p className="card-text">
                                                    Some quick example text to build on the card title and make up
                                                    the bulk of the card's content.
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-sm-3">
                                              <div className="card" style={{ width: "18rem" }}>
                                                <img src="..." className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                  <p className="card-text">
                                                    Some quick example text to build on the card title and make up
                                                    the bulk of the card's content.
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-sm-2">
                                              <div className="card" style={{ width: "18rem" }}>
                                                <img src="..." className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                  <p className="card-text">
                                                    Some quick example text to build on the card title and make up
                                                    the bulk of the card's content.
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                         
                         
                      
                               ))
                        }
      
    </div>
  )
}

export default Blog
