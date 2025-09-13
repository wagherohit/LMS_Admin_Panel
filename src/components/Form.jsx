import axios  from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Form = () => {

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [instructor, setInstructor] = useState('')
  const [duration, setDuration] = useState('')
  const [level, setLevel] = useState('')
  const [rating, setRating] = useState('')
  const [students_enrolled, setStudents_enrolled] = useState('')
  const [language, setLanguage] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

      const navigate = useNavigate();

  






 const handleSubmit = async (e)=>{
       e.preventDefault();

     const formData = {title,category,instructor,duration,level,rating,students_enrolled,language,price,image}
     console.log(formData)
     
  
     try{
      const response = await axios.post('http://localhost:3000/Courses',formData)
       console.log( 'Courses Add Succefuly...!' ,response.data)

       navigate('/courses')

     setTitle('')
     setCategory('')
     setInstructor('')  
     setDuration('')
     setLevel('')
     setRating('')
     setStudents_enrolled('')
     setLanguage('')
     setPrice('')
     setImage('')  
     }
     catch(err) {
           console.log(err)
     }

     
  
 }
  return (
    <>
    <div className="container mt-5">
      <h2 className="mb-4 fw-bold">Add New Course</h2>

      <form onSubmit={handleSubmit}  className="row g-3">

        <div className="col-md-6">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" name="title" value={title} onChange={(e)=> setTitle(e.target.value)}  required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Category</label>
          <input type="text" className="form-control" name="category" value={category} onChange={(e)=> setCategory(e.target.value)}  required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Instructor</label>
          <input type="text" className="form-control" name="instructor" value={instructor} onChange={(e)=> setInstructor(e.target.value)}  required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Duration</label>
          <input type="text" className="form-control" name="duration" value={duration} onChange={(e)=> setDuration(e.target.value)} required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Level</label>
          <select className="form-select" name="level" value={level} onChange={(e)=> setLevel(e.target.value)} required>
            <option value="">Select level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Rating</label>
          <input type="number" step="0.1" max="5" className="form-control" name="rating" value={rating} onChange={(e)=> setRating(e.target.value)} required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Students Enrolled</label>
          <input type="number" className="form-control" name="students_enrolled" value={students_enrolled} onChange={(e)=> setStudents_enrolled(e.target.value)}  required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Language</label>
          <input type="text" className="form-control" name="language" value={language} onChange={(e)=> setLanguage(e.target.value)}  required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Price ($)</label>
          <input type="number" step="0.01" className="form-control" name="price" value={price} onChange={(e)=> setPrice(e.target.value)}  required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Image URL</label>
          <input type="text" className="form-control" name="image" value={image} onChange={(e)=> setImage(e.target.value)}  required />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-dark w-100">Add Course</button>
        </div>

      </form>
    </div>
    
    
    </>
  )
}

export default Form