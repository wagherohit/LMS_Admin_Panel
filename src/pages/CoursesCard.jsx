import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CoursesCard = () => {

  const [data, setData] = useState([])


  const getdata = async()=>{
      
    try{
        const response = await axios.get('https://lms-backend-vlug.onrender.com/Courses')
    
    setData(response.data)
    console.log(data)
    }
    catch(err){
         console.log(err)
    }
  }

  console.log(data)

  useEffect(() => {
   getdata()
  }, [])
  
  return (
    <>
     <div className='container-fluid ' >
      <div className='row'>
        <div className='col-md-12 bg-dark p-3'>
          <div className='row'>
            {
              data.map((course)=>{
                return(
                  <>
                  <div className='col-md-3 mb-3 mt-5 '>
                     <div className='card h-100 shadow-sm border-0 rounded-4' id='seems'>
      
      <img
        src={course.image}
        className='img-fluid rounded-top-4'
        style={{ height: '180px', objectFit: 'cover' }}
        alt={course.title}
      />

      <div className='card-body d-flex flex-column'>
        <h5 className='card-title fw-semibold mb-2'>{course.title}</h5>

        <p className='text-info mb-1'>
          <i className='bi bi-bookmark-fill me-1'></i>{course.category}
        </p>
        <p className='mb-2'>
          <i className='bi bi-person-fill me-1'></i>{course.instructor}
        </p>

        <div className='d-flex flex-wrap gap-2 mb-3'>
          <span className='badge bg-light text-dark'>
            <i className='bi bi-clock me-1'></i>{course.duration}
          </span>
          <span className='badge bg-light text-dark'>
            <i className='bi bi-graph-up-arrow me-1'></i>{course.level}
          </span>
          <span className='badge bg-light text-dark'>
            <i className='bi bi-translate me-1'></i>{course.language}
          </span>
        </div>

        <div className='d-flex justify-content-between align-items-center mb-3'>
          <span className='text-warning'>
            <i className='bi bi-star-fill me-1'></i>{course.rating}
          </span>
          <span className='fw-bold text-success'>${course.price}</span>
        </div>

        <button className='btn btn-dark mt-auto rounded-pill'>
          <i className='bi bi-cart-plus me-1'></i> Enroll Now
        </button>
      </div>
                     </div>

                  </div>
                  
                  
                  </>
                )
              })
            }

          </div>

        </div>

    

      </div>

     </div>
     
      
    
    
    </>
  )
}

export default CoursesCard