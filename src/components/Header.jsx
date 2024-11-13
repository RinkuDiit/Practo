import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/practo.svg'


function Header() {
  return (
    <div>
      {/* <div className="header"> */}
      <nav className="navbar navbar-expand-lg navbar-light header">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Link to='/'> <img src={logo} alt="" /></Link>
          </a>
          <div style={{display:'flex'}}>
            <Link to='/profile'><button className='mobile_profile profiles'><i class="fa fa-user fa-2x " aria-hidden="true"></i></button></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link to='/bookdoc' className="nav-link active" aria-current="page" href="#">Find a Doctor</Link>
              </li>
              <li className="nav-item">
                <Link to='/servies' className="nav-link active" aria-current="page" href="#">Services</Link>
              </li>
              <li className="nav-item">
                <Link to='/About' className="nav-link active" aria-current="page" href="#">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to='/contact' className="nav-link active" aria-current="page" href="#">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link to='/admin' className="nav-link active" aria-current="page" href="#">Admin panel</Link>
              </li>

            </ul>
            <Link to='/profile'><button className='computer_profile profiles'><i class="fa fa-user fa-2x" aria-hidden="true"></i></button></Link>
            <Link to='/bookdoc'><button className='btn btn-primary'>Book an Appointment</button></Link>
          </div>


        </div>
      
      </nav>
    </div>
    // </div>
  )
}

export default Header