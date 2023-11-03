import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setblog] = useState();
  const navigate = useNavigate()

  

  useEffect(() => {
    getSingleBlog();
  }, []);
  async function getSingleBlog() {
    try {
      const { data } = await axios.get(`http://localhost:2000/api/v1/blog/${id}`);
      console.log(data,"testing");
      setblog(data.result);
    } catch (error) {
      console.log(error);
    }
  }
  
  
  return (
    <div>
            {blog && (
        <div>
          <h1>{blog.title}</h1>
        </div>
      )}
      
      {/* <h1>{ id }</h1> */}
 
    </div>
  );
};

export default SingleBlog;