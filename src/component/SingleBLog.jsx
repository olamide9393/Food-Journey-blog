import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Sidebar from './BlogSideBar';



const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setblog] = useState();
  const navigate = useNavigate()
  const [loading, setloading] = useState(false);


  

  useEffect(() => {
    getSingleBlog();
  }, []);
  async function getSingleBlog() {
    try {
      const { data } = await axios.get(`http://localhost:2000/api/v1/blog/${id}`);
      
      setblog(data);
    } catch (error) {
      console.log(error);
    }
    finally {
      setloading(false);
    }
  }
  
  
  return (
    <div>
      <Sidebar/>
      {loading ? (
        <h1>
          <div
            className="spinner-border text-success"
            style={{ width: "100px", height: "100px" }}
          ></div>
        </h1>
      ) : (
        <div>
          {blog && (
            <div>
              <h1 style={{ textAlign: "center" }}>{blog.title}</h1>
              <br /><br />

              <div className="container">
                
                    <img src={blog.photo}  />
                  </div>
              <br /><br /><br />

              <div className="container"  >
                <div className="row">
                  <div className="col-sm-6">
                    <div>{blog.description}</div>
                  </div>
                  <br /><br />
                  <div className="col-sm-6">
                    <div>
                      {blog.benefits}
                    </div>

                  <div className="form-floating">
                    <label htmlFor="floatingTextarea2" style={{fontSize:"30px"}}>Comments:</label>
                    <textarea
                      className="form-control"
                      placeholder="Your messages"
                      id="floatingTextarea2"
                      style={{ height: "100px" }}
                    ></textarea>
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

export default SingleBlog;