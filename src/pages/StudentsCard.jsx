import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Table from '../components/Table';
import {useNavigate } from 'react-router-dom'


const StudentsCard = () => {
  const [studentdata, setStudentdata] = useState([]);
      const navigate = useNavigate()


  const getdata = async () => {
    try {
      const response = await axios.get("http://localhost:3000/Students");
      const result = response.data;
      setStudentdata(result);
    } catch (error) {
      console.log('student not fetching', error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);


   const DeleteUser = async (id) => {
    // filtered data
    const result = studentdata.filter((val) => val.id !== id);
    setStudentdata(result);

    await axios.delete(`https://lms-backend-vlug.onrender.com/Students/${id}`);
  };

  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-12'>
          <div className="table-responsive">
            <table className="table table-striped table-bordered align-middle">
              <thead className="table-dark">
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Course</th>
                  <th scope="col">View</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  studentdata.map((val, idx) => (
                   <tr>
                     <td>{idx + 1}</td>   
                     <td>{val.first_name}</td>
                     <td>{val.last_name}</td>
                     <td>{val.email}</td>
                     <td>{val.course}</td>
                     <td><button className='btn btn-dark' onClick={() => navigate(`/students/${val.id}`)}>View Details</button></td>
                    <td><button className='btn btn-success' onClick={()=> navigate(`/edituser/${val.id}`)}>Edit</button> <button onClick={() =>
                      window.confirm("Are You Sure ? ")
                        ? DeleteUser(val.id)
                        : null
                    }   className='btn btn-danger'>Delete</button></td>
                   </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsCard;
