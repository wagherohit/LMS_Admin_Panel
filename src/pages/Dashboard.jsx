import React from 'react'
import CoursesCard from './CoursesCard'
import Students from './Students'
import StudentsCard from './StudentsCard'
import Navbar from '../components/Navbar'

const Dashboard = () => {
  return (
  <>
  <div className='container  mt-5'  >
    <div className='row'>
      <div className='col-md-6 mt-5'>
        <div className='mt-5 hero '>
         <div className='mt-5'>
           <h1 className='fw-bold '>Key to your success</h1>
          <p className='fw-bold'>Build Skills for today,tomorrow,and beyound. Eduaction to future-proof your career.</p>
         </div>

         <div className=''>
           <button className='btn btn-warning rounded-pill mx-2'>Learn More</button>
           <button className='btn btn-dark rounded-pill mx-2'>Courses</button>

        </div>
         
        </div>
        
        
      </div>

      <div className='col-md-6 mt-5'>
        <div>
          <img className='img-fluid' src="https://themazine.com/html/Lebari_new/lebari/lebari/images/main-slider/image-5.png" alt="" />
        </div>

      </div>

    </div>
  </div>
  <hr />

  <div className='container-fluid mt-5'>
    <div className='row'>
      <div className='col-md-12 '>
        <h2 className='fw-bold'>Our Courses</h2>
      </div>
      <hr />
      <CoursesCard/>
    </div>
  </div>

  <hr />

  <div className='conatainer mt-5'>
    <div className='row'>
      <div className='col-md-12'>
        <h2 className='fw-bold'>Students List:</h2>
      </div>
      <hr />
      <StudentsCard/>

    </div>

  </div>
  
  </>
  )
}

export default Dashboard