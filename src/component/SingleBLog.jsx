import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


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
      console.log(data,"testing");
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
      ell
    




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
          
          <h1>{blog.title}</h1>
        
        </div>
      )}
   </div>
      )}


      
      {/* <h1> hello world { id }</h1> */}
      
 
    </div>
  );
};

export default SingleBlog;