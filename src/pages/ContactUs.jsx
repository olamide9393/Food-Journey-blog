import React, { useState } from "react";

const ContactUs = () => {
  const [Data, setData] = useState();
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...Data, [name]: value });
  }
  function handleClick(e) {
    e.preventDefault();

    console.log(Data);
  }
  return (
    <div>
      <h1 style={{textAlign:'center',fontSize:'50px'}}>Contact Us</h1>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div
              className="tab-content container mt-2"
              style={{ backgroundColor: "whitesmoke" }}
            >
              <div
                className="tab-pane fade show active"
                id="pills-login"
                role="tabpanel"
                aria-labelledby="tab-login"
              >
                <form onSubmit={handleClick}>
                  <br />

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="loginName">
                      {" "}
                      Your Name:
                    </label>
                    <input
                      type="name"
                      name="name"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="loginName">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="loginName">
                      {" "}
                      Your number
                    </label>
                    <input
                      type="number"
                      name="number"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Your messages"
                      id="floatingTextarea2"
                      style={{ height: "100px" }}
                    ></textarea>
                    <label htmlFor="floatingTextarea2">Your messages</label>
                  </div>
                  <br />

                  <button
                    type="submit"
                    className="btn btn-success btn-block mb-4"
                  >
                    Submit
                  </button>
                  {/* {
                                                               err
                                                               &&
                                                               <p className='text-danger text-center'>{err}</p>
                                                      } */}
                </form>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            
            <p style={{ fontSize: "20px" }}>Phone & Email:</p>
            <p>+234 70 4848 38 28</p>
            <p>olamideantony4@gmail.com</p>

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
