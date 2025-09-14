// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Courses from './pages/Courses';
import Form from './components/Form';
import Students from './pages/Students';
import StudentsDetails from './StudentsDetails';
import Login from './pages/Login';
import AddStudent from './pages/AddStudent';
import EditUser from './components/EditUser';
import ProtectedRoute from './components/ProtectedRoute'; // ✅ Import this

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>

        {/* Public Route */}
        <Route path='/' element={<Login />} />

        {/* Protected Routes */}
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path='/courses'
          element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          }
        />

        <Route
          path='/form'
          element={
            <ProtectedRoute>
              <Form />
            </ProtectedRoute>
          }
        />

        <Route
          path='/students'
          element={
            <ProtectedRoute>
              <Students />
            </ProtectedRoute>
          }
        />

        <Route
          path='/students/:id'
          element={
            <ProtectedRoute>
              <StudentsDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path='/addstudents'
          element={
            <ProtectedRoute>
              <AddStudent />
            </ProtectedRoute>
          }
        />

        <Route
          path='/edituser/:id'
          element={
            <ProtectedRoute>
              <EditUser />
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  );
};

export default App;
