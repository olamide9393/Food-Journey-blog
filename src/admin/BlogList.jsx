import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../RequestUrl";

const BlogList = () => {
         const [blogDatas, setblogDatas] = useState([]);
         const [loading, setloading] = useState(false);
       
         useEffect(() => {
           history();
         }, []);
         async function history() {
           setloading(true);
       
           try {
             const { data } = await axiosInstance.get("blog/getblog", {});
           setblogDatas(data.result)
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
            style={{ width: "100px", height: "100px" }}
          ></div>
        </h1>
      ) : (
        blogDatas?.map((elem) => (
          <div >
                              <div>
      <table className="table" style={{width:'100%'}}>
        <thead>
          <tr>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
      
       <tr>
            <td>{elem.title}</td>
            <td>{elem.description}</td>
            <td>
            <div>
              <Link  to={"/blog/" + elem._id}className="btn btn-success btn-block mb-4" >
                SHOW BLOGS
              </Link>
              </div>
              <br />
              <div>
              <Link  to={"/blog/" + elem._id} className="btn btn-success btn-block mb-4">
                EDITS
              </Link>

              </div>
              <br />
              <div>
              <Link  to={"/blog/" + elem._id} className="btn btn-danger btn-block mb-4">
                DELETE
              </Link>
              </div>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
           
          </div>
        ))
      )}
      
    </div>
  )
}

export default BlogList
