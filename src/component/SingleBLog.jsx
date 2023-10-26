import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState();
  const navigate = useNavigate()

  

  useEffect(() => {
    getSingleBlog();
  }, []);

  async function getSingleBlog() {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/v2/newBlog/${id}`);
      console.log(data);
      setBlog(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/v2/newBlog/${id}`);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {blog && (
        <div>
          <h1>{blog.title}</h1>
          <p>{blog.desc}</p>
          <p>Written by:   {blog.author}</p>
          <p>Publish Year:  {blog.publishYear}</p>
        </div>
      )}
      <button style={{gap:'20px'}} className='btn btn-info' onClick={handleClick}>
        Delete
      </button>
      <Link to={`/edit/${id}`}>
        <button className='btn btn-info'>Edit</button>
      </Link>
    </div>
  );
};

export default SingleBlog;