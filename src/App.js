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
import AdminLogin from './components/AdminLogin.jsx';
import Admin from './components/Admin.jsx';
import AboutUs from './components/AboutUs.jsx';
import ContactUs from './components/ContactUs.jsx';
import Service from './components/Servies.jsx';

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
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/doctor/:id" element={<Doctor />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/servies" element={<Service />} />





          

        </Routes>
        <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default App