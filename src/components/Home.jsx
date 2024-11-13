import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>
        <div className="section1">
             <div className="container_section1">
                <div style={{padding:'30px'}} className="section1_text">
                  <h1>Book your <br /> Doctor Appointment <br /> online</h1>
                  <p>Convenient and easy way to book your doctor appointment from the comfort of your home.</p>
                  <button style={{width:'243px'}} className='btn btn-primary'>Book your appointment Now</button>
                  
                </div>
                <div className="section1_img">
                    {/* <img src={require('../img/194-1943739_indian-doctor-hd-png-download.png')} alt="" /> */}
                    <img src="https://www.hopkinsmedicine.org/-/media/home-care-group/images/in-home-primary-care640.jpg" alt="" />
                </div>
            </div>
        </div>    
            <div className="section2">
              <div className="container container_section2">
                <div className="section2_text">
                  <h4>Book an appointment for an in-clinic consultation</h4>
                  <p>Find experienced doctors across all specialties</p>
                </div>
                <div className="section2_discrubtion">
                  <div className="specialties">
                    <div className="specialties_img">
                      <img src={require('../img/64b5cb78f54b87b6b7ffe156_63ed9c8939c05bd03c382874_types-of-dentists.jpeg')} alt="" />
                    </div>
                    <div className="specialties_text">
                      <h4>Dentist</h4>
                      <p>Teething troubles? Schedule a dental checkup</p>

                    </div>
                  </div>
                  <div className="specialties">
                    <div className="specialties_img">
                      <img src={require('../img/qualified-dermatologist-in-sterile-gloves-examinin-2021-09-03-14-17-40-utc-1-scaled.jpg')} alt="" />
                    </div>
                    <div className="specialties_text">
                      <h4>Dermatologist</h4>
                      <p>Focuses on skin, hair, and nail disorders.</p>

                    </div>
                  </div>
                  <div className="specialties">
                    <div className="specialties_img">
                      <img src={require('../img/iStock-1319855785.jpg')} alt="" />
                    </div>
                    <div className="specialties_text">
                      <h4>Cardiologist</h4>
                      <p>Specializes in diagnosing and treating heart and cardiovascular conditions.</p>

                    </div>
                  </div>
                  <div className="specialties">
                    <div className="specialties_img">
                      <img src={require('../img/iStock-132264568-768x512.jpg')} alt="" />
                    </div>
                    <div className="specialties_text">
                      <h4>Pediatrician</h4>
                      <p>Provides medical care for infants, children, and adolescents.</p>

                    </div>
                  </div>
                  <div className="specialties">
                    <div className="specialties_img">
                      <img src={require('../img/iStock-1072406518-1024x683.jpg')} alt="" />
                    </div>
                    <div className="specialties_text">
                      <h4>Otolaryngologist (ENT)</h4>
                      <p>Focuses on ear, nose, and throat disorders.</p>

                    </div>
                  </div>
                  <div className="specialties">
                    <div className="specialties_img">
                      <img src={require('../img/Orthopedic-Surgery.jpg')} alt="" />
                    </div>
                    <div className="specialties_text">
                      <h4>Orthopedic Surgeon</h4>
                      <p>Treats conditions related to bones, joints, and muscles.</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
       
        
    </div>
  ) 
}

export default Home