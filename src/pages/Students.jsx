import axios from 'axios'
import StudentsCard from './StudentsCard'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Students = () => {
   
    
  return (
    
  <>
   <div className='container-fluid mt-5  p-3' >
    <div className='row'>
        <div className='col-md-12 d-flex justify-content-between mt-5'>
            <h1>Students Data</h1>

            <div>
                <button className='btn btn-light m-1'> <NavLink className='text-dark' to={'/addstudents'}
                ><i class="bi bi-person-plus-fill"></i> ADD Students</NavLink> </button>
            </div>
        </div>
        
        <StudentsCard/>

    </div>

   </div>
  </>
  )
}

export default Students