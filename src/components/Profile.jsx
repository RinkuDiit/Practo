import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Profile() {

  const [appointments, setAppointment] = useState([])
  const [color, setColor] = useState('#961010')
  const [text, setText] = useState('Cancle')
  const user = JSON.parse(sessionStorage.getItem('user'));
  const navigate = useNavigate();


  

  const logout = () => {
    sessionStorage.removeItem('user');
    navigate('/login')        
  }

  useEffect(() => {
    if (user === null) {
      navigate('/login')
    }
    else {

      axios.get(`http://localhost:4000/appointment/${user.result._id}`)
        .then((res) => {
          console.log(res.data.result);
          setAppointment(res.data.result);
        });

    };
   
  }, [])



  if (user === null) {
    navigate('/login')
  }
  else {
    return (
      <div>

        <div className="profile">
          <div className='profile_page'>
            <div className="appo_title">
              <h5>Profile</h5>
            </div>
            {/* <div className="img_profile">
            
          </div> */}
            <div className="profile_info" id={user.result._id}>
              <div className='d-flex' style={{height:'100%'}}>
              <img src="https://img.utdstc.com/screen/1ae/615/1ae6159dd734a54776bd20d4261353325615934be1c1dab40ac88d2ed83bc8ea:600" alt="" />
              <div style={{ marginLeft: '10px' }}><h5>{user.result.name}</h5>
                <p>+91 {user.result.number}</p>
              </div>
              </div>
              <button className='btn btn-primary' style={{height:'45px'}} onClick={()=>logout()}>Log Out</button>

            </div>
            <div className='profile_info profile_info2'>
              <label htmlFor="name"></label>
              <input type="text" value={user.result.name} disabled={true} />
              <input type="email" value={user.result.email} disabled={true} />
              <input type="text" value={'+91' + user.result.number} disabled={true} />
              <input type="text" value={user.result.dob} disabled={true} />
              <input type="gender" value={user.result.gender} disabled={true} />
              <input type="add" value={user.result.address} disabled={true} />
            </div>
            <div className="myappointments">
              <div className="appo_title">
                <h5>My Appointments</h5>
              </div>
              Total Appointments - {appointments.length}
              {!appointments.length ? (
                <h5>Sorry, you don't have any appointments</h5>
              ) : (
                <div className='booook'>
                  {appointments.map((res) => (
                    <div className='booking_history'>

                      <div><h6>{res.appointment_date.date}</h6></div>
                      <div className='booking_history_details' >
                        <div>
                          <img src={res.image} alt="" />
                        </div>
                        <div>
                          <p><span>{res.doctor_name}</span></p>
                          <p><span>Pasant name</span> : Rinku</p>
                          <p><span>Slote</span>: {res.appointment_date.time}</p>
                          <p><span>Paid fees</span> : 300</p>
                          <p><span>Status</span> :{res.appointment_status}</p>
                        </div>
                      </div>
                      <div><button style={{backgroundColor:color}} className='btn appoint_cancel'>{text}</button></div>

                    </div>
                  ))}
                </div>

              )}
            </div>


          </div>
        </div>

      </div>
    )
  }
}

export default Profile