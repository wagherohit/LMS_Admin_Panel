import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import Courses from './pages/Courses'
import Form from './components/Form'
import Students from './pages/Students'
import StudentsDetails from './StudentsDetails'
import Login from './pages/Login'
import AddStudent from './pages/AddStudent'
import EditUser from './components/EditUser'



const App = () => {
  return (
    <>
    
    <Router>
      <Navbar/>
      <Routes> 

        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/form' element={<Form/>} />
        <Route path='/students' element={<Students/>} />
        <Route path='/students/:id' element={<StudentsDetails/>}/>
        <Route path='/addstudents' element={<AddStudent/>} />
        <Route path="/edituser/:id" element={<EditUser/>}/>


        


      </Routes>
    </Router>
    
    
    </>
  )
}

export default App