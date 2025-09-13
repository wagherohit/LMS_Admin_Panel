import React from 'react'
import { NavLink } from 'react-router-dom'
import CoursesCard from './CoursesCard'
import Navbar from '../components/Navbar'

const Courses = () => {
  return (
   <>
   <div className='container-fluid mt-5' >
    <div className='row'>
      <div className='col-md-12 mt-5 d-flex justify-content-between align-items-center p-2'>
        <div>
          <h3 className=''>All Courses</h3>
        </div>
        <div>
         <button className='btn btn-dark'> <NavLink className='text-decoration-none text-light' to={'/form'}> <i class="bi bi-plus-circle"></i> Add Courses</NavLink></button>
        </div>
      </div>

    

    </div>

   </div>

     <CoursesCard/>
   
   </>
  )
}

export default Courses