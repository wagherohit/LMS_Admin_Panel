import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from "emailjs-com";


const AddStudent = () => {
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [email, setEmail] = useState('')
    const [course, setCourse] = useState('')
    const [profile_image, setProfile_image] = useState('')

    const nav = useNavigate()


const saveForm = async(e)=>{
    
      e.preventDefault(); 


    const formdata = {first_name,last_name,email,course,profile_image}
    try{
        
      // ⿡ Send Email to Admin
      await emailjs.send(
        "service_ov0v3ke",   // replace with EmailJS service ID
        "template_hsxm7pc",  // replace with EmailJS template ID
        formdata,
        "1c3BYbq-0MO8aAiDH"    // replace with EmailJS public key
      );


          const response = await axios.post('https://lms-backend-vlug.onrender.com/Students', formdata)
          console.log( "Students add Succesfully",response.data)
           
              nav('/students')

          setFirst_name('')
          setLast_name('')
          setEmail('')
          setCourse('')
          setProfile_image('')
    }
    catch(err){
        console.log("Students Not ADD",err)

    }



}
    
  return (
    <>
      
        <div className="container mt-5">
      <h4>Add New Student</h4>
      <form onSubmit={saveForm}  className="row g-3 mt-5">
        <div className="col-md-6">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            name="first_name"
            value={first_name}
            onChange={(e)=> setFirst_name(e.target.value)}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="last_name"
            value={last_name}
            onChange={(e)=> setLast_name(e.target.value)}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Course</label>
          <input
            type="text"
            className="form-control"
            name="course"
            value={course}
            onChange={(e)=> setCourse(e.target.value)}            
            required
          />
        </div>

        <div className="col-12">
          <label className="form-label">Profile Image URL</label>
          <input
            type="url"
            className="form-control"
            name="profile_image"
            value={profile_image}
            onChange={(e)=> setProfile_image(e.target.value)}
            required
           
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-dark">Add Student</button>
        </div>
      </form>
    </div>
    
    </>
  )
}

export default AddStudent