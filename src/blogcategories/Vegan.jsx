import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Vegan = () => {
  const [blogDatas, setblogDatas] = useState([]);

  const [loading, setloading] = useState(false);

  useEffect(() => {
    history();
  }, []);
  async function history() {
    setloading(true);

    try {
      const { data } = await axios.get(
        "http://localhost:2000/api/v1/Recept/getRecept/",
        {}
      );
      console.log(data);

      const chemists = data.result.filter(person =>
        person.category === 'Coffee'
      );
      console.log(chemists,'cayeen');



      setblogDatas(chemists);
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
              {/* <div className="col-sm-4">hello</div> */}
              <br />

              <div className="col-sm-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">{elem.title}</p>
                    <Link style={{ color: '#f1356d' }} to={"/recept/" + elem._id } >read more</Link>

                  </div>
                </div>
              </div>
              <br />
              
            </div>
          </div>
          
        ))
        
      )}
      <br /><br />
      <div className="container" >
  <ul className="pagination" style={{gap:"20px"}}>
    <li className="page-item"> <Link className="page-link"  to="/Blog">1</Link> </li>
    <li className="page-item"> <Link className="page-link"to="/Blog/2" >2</Link> </li>
    
  </ul>
</div>
  


    </div>
  );
};

export default Vegan;
