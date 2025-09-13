import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const EditUser = () => {

    const nav = useNavigate();


  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    course: "",
    profile_image: "",
  });

  const data2 = useParams();
  const id = data2.id;


  const fetchUser = async () => {
    try {
      const result = await axios.get(`http://localhost:3000/Students/${id}`);
      console.log(result);
      console.log(result.data);

      setData(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);



  const updateHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  

  const UpdateForm = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3000/Students/${id}`, data);
      alert("User Successfully Updated");
      console.log(data);
      nav("/students");

    } catch (err) {
      console.log(err);
    }
  };
  return (
   <>
   
   <div className='container'>
    <div className='row'>
        <div className='col-md-12 mt-5'>
           
            <form onSubmit={(e) => UpdateForm(e)}   className="row g-3 mt-5">
        <div className="col-md-6">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            name="first_name"
            value={data.first_name}
            onChange={(e)=> updateHandler(e)}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="last_name"
            value={data.last_name}
            onChange={(e)=> updateHandler(e)}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={data.email}
            onChange={(e)=> updateHandler(e)}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Course</label>
          <input
            type="text"
            className="form-control"
            name="course"
            value={data.course}
            onChange={(e)=> updateHandler(e)}            
            required
          />
        </div>

        <div className="col-12">
          <label className="form-label">Profile Image URL</label>
          <input
            type="url"
            className="form-control"
            name="profile_image"
            value={data.profile_image}
            onChange={(e)=> updateHandler(e)}
            required
           
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-dark">Update Students</button>
        </div>
      </form>
        </div>

    </div>

   </div>
   
   </>
  )
}

export default EditUser