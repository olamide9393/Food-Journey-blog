import axios from "axios";
import React, { useEffect, useState } from "react";

const Bloglist = () => {
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

                                                <div className='blog-preview' key={elem._id} style={{ marginTop: '20px', }}>
                                                                             <h3 style={{ color: '' }}>{elem.title}</h3>
                                                        <p>Written by {elem.author}</p>
                                                        <Link style={{ color: '#f1356d' }} to={"more/" + elem._id + "?" + elem.title} >read more</Link>
                                                </div>
                               ))
                        }
      
    </div>
  )
}

export default Bloglist
