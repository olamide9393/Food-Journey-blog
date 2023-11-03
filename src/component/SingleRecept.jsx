import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


const SingleRecept = () => {
  const { id } = useParams();
  const [recept, setrecept] = useState();
  const navigate = useNavigate()
  const [loading, setloading] = useState(false);


  

  useEffect(() => {
         SingleRecept();
  }, []);
  async function SingleRecept() {
    try {
      const { data } = await axios.get(`http://localhost:2000/api/v1/blog/${id}`);
      console.log(data,"testing");
      setrecept(data);
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
    
    {recept && (
        <div>
          
          <h1>{recept.title}</h1>
        
        </div>
      )}
   </div>
      )}


      
      {/* <h1> hello world { id }</h1> */}
      
 
    </div>
  );
};

export default SingleRecept;