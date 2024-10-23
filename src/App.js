import React from 'react'
import Registration from './components/Registration';
import Login from './components/Loginuser'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import Profile from './components/Profile';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Bookdoc from './components/Bookdoc';
import Footer from './components/Footer';
import Doctor from './components/Doctor.jsx';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bookdoc" element={<Bookdoc />} />
          <Route path="/doctor/:id" element={<Doctor />} />
          

        </Routes>
        <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default App