import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './components/Navbar';


const StudentsDetails = () => {
    const [student, setStudent] = useState([])

     const { id } = useParams();

    const getstudent= async ()=>{
        const response = await axios.get(`https://lms-backend-vlug.onrender.com/Students/${id}`)

        setStudent(response.data)
    }

    useEffect(() => {
        getstudent()
    }, [])
    
  return (
    <>
      
      <div className='container-fluid mt-5 bg-dark' style={{minHeight:'95vh'}}>
        <div className='row'>
            <div className='col-md-4 mt-5'>
                <div className='card text-center p-3' id='seems'>
                    <div className='card-title'>
                        <h1 className='fw-bold text-info'> Name: {student.first_name} {student.last_name}</h1>
                    </div>
                    <div className='card-body p-3'>
                        <img className='img-fluid' style={{height:'300px'}}  src={student.profile_image} alt="" />
                        <p className='text-warning'>Email: {student.email}</p>
                    </div>

                    <div className='card-fotter '>
                        <h4>Course Name: {student.course}</h4>
                    </div>

                </div>

            </div>

        </div>


      </div>
    </>
  )
}

export default StudentsDetails