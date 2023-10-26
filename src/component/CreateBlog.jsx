import axios from 'axios';
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import { post } from '../../../backend/routes/Auth';


const CreateBlog = () => {
         const [data, setdata] = useState([]);
         const [file, setFile] = useState([]);
         const [Result, setResult] = useState([]);
         const navigate = useNavigate()
   
         const formRef = useRef();
         function handleChange(e) {
               let name = e.target.name
               let val = e.target.value
               setdata({ ...data, [name]: val })
         }
         async function submitForm(e) {
               e.preventDefault();

                      // image
                      if (file) {
                        const data= new FormData()
                        const filename=Date.now()+file.img
                        data.append("img",filename)
                        data.append("file",file)
                        newPost.photo= filename;
                        try {
                              const res = await axios.post("http://localhost:2000/api/v1/upload/")
                              console.log(res);
                        } catch (error) {
                              console.log(error);
                        }
                        
                     }

               try {
                  const response = await axios.post("http://localhost:2000/api/v1/blog/createBlog", data,);
                  console.log(response);
                     alert('you have successfully add your blog')
               setResult(response.data)
                     navigate('/Admin-dashboard')
               } catch (error) {
                     console.log(error)
               }
        
         
         }
  return (
    <div>

<h1 style={{textAlign:'center'}}>ADD A BLOG</h1>


<div>
      <form className='container mt-5' ref={formRef} style={{ fontSize: '20px' }}>
            <div>
            <label htmlFor="name"> Blog image:</label>
            <br />
            <input onChange={(e)=>setFile(e.target.files[0])} type="file" name="" id="" />


            </div>
            <div>
                  <label htmlFor="name"> Blog tittle:</label>
                  <input type="text" className='form-control' name='title' onChange={handleChange} />
            </div>
            <div className="form-floating">
                  <label htmlFor="floatingTextarea2">category:</label>
                  <br />
                  <select name="category" onChange={handleChange}  style={{width:'100%'}}>
                           <option>SELECT OPTION</option>
                           <option>MEAT</option>
                           <option>VEGETABLE</option>
                           <option>FRUITS</option>
                           <option>MILK PRODUCT</option>
                           <option>LEGUME</option>
                           <option>SMOOTHIES</option>
                           <option>VEGAN</option>
                           
                  </select>
                  {/* <input type="name" className='form-control' name='category' onChange={handleChange} /> */}

            </div>
            <div>
                  <label htmlFor="email"> ingredients:</label>
                  {/* <input type="name" className='form-control' name='ingredients' onChange={handleChange} /> */}
                  <textarea className="form-control" name='ingredients' onChange={handleChange} style={{ height: '10vh' }} ></textarea>

            </div>
            <div>
                  <label htmlFor="email">blog description:</label>
                  <textarea className="form-control" name='description' onChange={handleChange} style={{ height: '40vh' }} ></textarea>

            </div>
            <br /> 
            <button style={{width:'100%'}} className='btn btn-success' onClick={submitForm}>PUBLISH</button>
      </form>
      {Result && <div style={{ color: "red" }}>{Result}</div>}
        

</div>
      
    </div>
  )
}

export default CreateBlog
