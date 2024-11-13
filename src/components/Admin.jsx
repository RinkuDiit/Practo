import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Charts from '../charts/Charts.jsx';
import Charts2 from '../charts/Charts2.jsx';
import Newappointchart from '../charts/Newappointchart.jsx';
import Successchart from '../charts/Successchart.jsx';
import Earningchart from '../charts/Earningchart.jsx';
import Earningchart2 from '../charts/Earning2.jsx';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const [appointments, setAppointment] = useState([]);
  const [todayappointss, settodayAppointments] = useState('');
  const [ Successfulappointments, setSuccessAppointment] = useState('')
  const [doctordata, setDoctordata] = useState({});
  const today = new Date();
  const today2 = new Date().toISOString().split("T")[0];
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-GB', options);
  const [totalappointment, setToatl] = useState(0);
  sessionStorage.setItem('totalappointment', JSON.stringify(totalappointment));
  const navigate = useNavigate()
  const [refresh, setrefresh] = useState(0)
  console.log(refresh)



  const [feature, setFeature] = useState('block');
  const [feature2, setFeature2] = useState('none');
  const [plus, setplus] = useState('+')
  // const [sub_app, setSub_app] = useState('none')
  const [feature3, setFeature3] = useState('none');

  const handlefeature = (selected) => {
    setFeature(selected === 'Dashboard' ? 'block' : 'none')
    setFeature2(selected === 'new' ? 'block' : 'none')
    // setplus(selected === 'Appointments' ? '-' : '+')
    // setSub_app(selected === 'Appointments' ? 'block': 'none')
    setFeature3(selected === 'Profile' ? 'block' : 'none')
  }

  const [display, setDisplay] = useState('block');
  const [display2, setDisplay2] = useState('none');
  const [display3, setDisplay3] = useState('none');
  const [display4, setDisplay4] = useState('none');

  const handleDisplayChange = (section) => {
    setDisplay(section === 'one' ? 'block' : 'none');
    setDisplay2(section === 'two' ? 'block' : 'none');
    setDisplay3(section === 'three' ? 'block' : 'none');
    setDisplay4(section === 'four' ? 'block' : 'none');

  };


  useEffect(() => {
    if (doctordata === null) {
      navigate('/adminlogin')
    }

    else {

      axios.get('http://localhost:4000/appointment/670f6b7f5dd2d1013924ab7d')
        .then((res) => {
          setAppointment(res.data.result);
        });
        setrefresh(0)
    }
  }, [refresh]);

  useEffect(() => {
    checktodayappoint();
    checkSuccessAppoint();
    setToatl(appointments.length + 379);
    docdata();
  }, [appointments]);

  const docdata = () => {
    const doctor = JSON.parse(sessionStorage.getItem('doctor'));
    setDoctordata(doctor);
  };

  const checktodayappoint = () => {
    let todayAppointments = 0;
    for (let i = 0; i < appointments.length; i++) {
      if (appointments[i].appointment_date.date === today2) {
        todayAppointments += 1;
      }
    }
    settodayAppointments(todayAppointments);
  };

  const checkSuccessAppoint = () => {
    let checkSuccessAppointment = 0;
    for (let i = 0; i < appointments.length; i++) {
      if (appointments[i].appointment_status === 'Success') {
        checkSuccessAppointment += 1;
      }
    }
    setSuccessAppointment(checkSuccessAppointment);
  };

  const handlestatus = (data) => {


    axios.put('http://localhost:4000/updatestatus', {
      id: data.id,
      status: data.statuss
    })
      .then((res) => {
        console.log(res.data);
      });
      setrefresh(+1)

  }

  if (doctordata === null) {
    navigate('/adminlogin')
  }

  else {

    return (
      <div>
        <div className="admin_profile">
          <div className="admin_head">
            <div className='imgg'>
              <img src={doctordata.image} alt="" />
            </div>
            <div style={{ paddingLeft: '10px' }}>
              <h5 style={{ margin: '0' }}>{doctordata.name ? doctordata.name : 'Rahul'}</h5>
              <p>({doctordata.specialization})</p>
            </div>
          </div>
          <div className="admin">
            <div className="admin_feature">
              <div className='feature' onClick={() => handlefeature('Dashboard')}><i className="fa fa-tachometer fa-2x iconnn" aria-hidden="true"></i> Dashboard</div>
              {/* <div className='feature  appo_featuress' onClick={() => handlefeature('Appointments')}> <div> <i className="fa fa-address-book-o fa-2x iconnn" aria-hidden="true"></i> Appointments </div> <div style={{ fontSize: '25px', width: '28px' }}>{plus}</div></div> */}
              <div className="feature" onClick={() => handlefeature('new')} > <ion-icon name="person-add-outline"></ion-icon>   New Appointments</div>
              <div className="feature" onClick={() => handlefeature('history')} > Appointments History</div>
              <div className='feature' onClick={() => handlefeature('Profile')}><i className="fa fa-user-md fa-2x iconnn" aria-hidden="true"></i> Profile</div>
            </div>
          </div>
          <div className="section_panel">

            <div className="dashboard_feature" style={{ display: feature }}>
              <h3>Dashboard</h3>
              <div className='appointment_data'>
                <div className="total_appointment" onClick={() => handleDisplayChange('one')}>
                  <div className='ta_datas'>
                    <div className='ta_icon'>
                      <div className="iconss" style={{ backgroundColor: '#800080d1' }}>
                        <i className="fa fa-pencil-square-o fa-2x"></i>
                      </div>
                    </div>
                    <div className="ta_data">
                      <h6>Appointments</h6>
                      <h3>{totalappointment}</h3>
                    </div>
                  </div>
                  <div className="chartss">
                    <Charts />
                  </div>
                </div>
                <div className="total_appointment" onClick={() => handleDisplayChange('two')}>
                  <div className='ta_datas'>
                    <div className='ta_icon'>
                      <div className="iconss" style={{ backgroundColor: 'orange' }}>
                        <i className="fa fa-check-square-o fa-2x"></i>
                      </div>
                    </div>
                    <div className="ta_data">
                      <h6>Successful Appointments</h6>
                      <h3>{344 + Successfulappointments}</h3>
                    </div>
                  </div>
                  <div className="chartss">
                    <Successchart />
                  </div>
                </div>
                <div className="total_appointment" onClick={() => handleDisplayChange('three')}>
                  <div className='ta_datas'>
                    <div className='ta_icon'>
                      <div className="iconss" style={{ backgroundColor: '#0b7e93d6' }}>
                        <ion-icon name="person-add" style={{ fontSize: '30px' }}></ion-icon>

                      </div>
                    </div>
                    <div className="ta_data">
                      <h6>Today Appointments</h6>
                      <p>({formattedDate})</p>
                      <h3>{todayappointss}</h3>
                    </div>
                  </div>
                  <div className="chartss">
                    <Newappointchart />
                  </div>
                </div>
                <div className="total_appointment" onClick={() => handleDisplayChange('four')}>
                  <div className='ta_datas'>
                    <div className='ta_icon'>
                      <div className="iconss" style={{ backgroundColor: '#002aff8c' }}>
                        <ion-icon name="wallet" style={{ fontSize: '30px' }}></ion-icon>
                      </div>
                    </div>
                    <div className="ta_data">
                      <h6>Earning</h6>
                      <h3>$3000</h3>
                    </div>
                  </div>
                  <div className="chartss">
                    <Earningchart />
                  </div>
                </div>
              </div>
              <div className="fullchart">
                <div style={{ display: display, padding: '0px 10px' }}><Charts2 /></div>
                <div style={{ display: display2 }}><Successchart /></div>
                <div style={{ display: display3 }}><Newappointchart /></div>
                <div style={{ display: display4, padding: '0px 10px' }}><Earningchart2 /></div>
              </div>
            </div>
            <div className="appointment_feature" style={{ display: feature2 }}>
              <h3>Appointment</h3>
              Total Appointments - {appointments.length}
              {!appointments.length ? (
                <h5>Sorry, you don't have any appointments</h5>
              ) : (
                <div className='booook'>
                  {appointments.map((res) => (
                    <div className='booking_history' key={res._id}>
                      <div><h6>{res.appointment_date.date}</h6></div>
                      <div className='booking_history_details'>
                        <div>
                          <img src={res.image} alt="" />
                        </div>
                        <div>
                          <p><span>{res.doctor_name}</span></p>
                          <p><span>Patient name</span>: Rinku</p>
                          <p><span>Slot</span>: {res.appointment_date.time}</p>
                          <p><span>Paid fees</span>: {res.consultationFee ? res.consultationFee : '1200'}</p>
                          <p><span>Status</span>: {res.appointment_status}</p>
                        </div>
                      </div>
                      <div className='btn appoint_cancel'>
                        {res.appointment_status === 'pending' ? (
                          <>
                            <button style={{ backgroundColor: '#0000ff91' }} onClick={() => handlestatus({ id: res._id, statuss: 'Accepted' })}>Accept</button>
                            <button style={{ backgroundColor: '#ff0000a6' }} onClick={() => handlestatus({ id: res._id, statuss: 'Cancel' })}>Cancel</button>
                          </>
                        ) : res.appointment_status === 'Accepted' ? (
                          <>
                            <button style={{ backgroundColor: '#28a745' }} onClick={() => handlestatus({ id: res._id, statuss: 'Success' })}>Success</button>
                            <button style={{ backgroundColor: '#ff0000a6' }} onClick={() => handlestatus({ id: res._id, statuss: 'Cancel' })}>Cancel</button>
                          </>
                        ) : res.appointment_status === 'Success' ? (
                            <>
                            <button style={{ backgroundColor: '#28a745' }} disabled={true}>Successfully Done</button>
                            </>
                        ): res.appointment_status === 'Cancel' ? (
                          <>
                          <button style={{ backgroundColor: '#ff0000a6' }} disabled={true}>Appointment was Cancel</button>
                          </>
                      ):null}
                      </div>
                    </div>
                  ))}

                </div>

              )}
            </div>
            <div className="profile_feature" style={{ display: feature3 }}>
              <h3>Profile</h3>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
