import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home';
import Profile from '../pages/Profile';

const AppRouter = () => {
  return (
    <Router>
      <nav className='text-white'>
        <Link to="/home">Home</Link> | <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default AppRouter