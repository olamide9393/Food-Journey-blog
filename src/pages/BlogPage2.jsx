import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const BlogPage2 = () => {
  const [blogDatas, setblogDatas] = useState([]);

  const [loading, setloading] = useState(false);

  useEffect(() => {
    history();
  }, []);
  async function history() {
    setloading(true);

    try {
      const { data } = await axios.get(
        "http://localhost:2000/api/v1/blog/getblog",
        {}
      );
      // console.log(data);
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
            style={{ width: "100px", height: "100px" }}
          ></div>
        </h1>
      ) : (
        blogDatas?.map((elem) => (
          <div className="container" style={{ marginTop: "50px" }}>
            <div className="row">
          
              <br />
              <div className="card" style={{ width: "25rem" }}>
                <img src={elem.photo}  className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{elem.title}</h5>
                  
                  <Link className="btn btn-success" to={"/blog/" + elem._id }>
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      )}

<br /><br />
                  <div className="container" >
  <ul className="pagination" style={{gap:"20px"}}>
    <li className="page-item"> <Link className="page-link"  to="/Blog">1</Link> </li>
    <li className="page-item"> <Link className="page-link"to="/Blog/2" >2</Link> </li>
    <li className="page-item"> <Link className="page-link"  to="/Blog/3">3</Link> </li>
    <li className="page-item"> <Link className="page-link" to="/Blog/4">4</Link> </li>
  <li className="page-item"> <Link className="page-link" to="/Blog/5" > 5 </Link> </li>
  </ul>
</div>
    </div>
  );
};

export default BlogPage2;
