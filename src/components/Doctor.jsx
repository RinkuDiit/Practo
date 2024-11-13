import axios from 'axios'
import { Alert } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


function Doctor() {

    const [doctor, setDoctor] = useState([]);
    const [appointments, setAppointment] = useState([])
    const [slotebook, setSlotebook] = useState([]);
    const [review, setReview] = useState([]);
    const [time, setTime] = useState([]);
    const [date, setDate] = useState('');
    const [slote, setSlote] = useState('')
    const [count, setCount] = useState(0)
    console.log(slote)


    const [sloteAvalbale, setsloteAvalbale] = useState('#490080')
    const [sloteBgc, setSloteBgc] = useState('none')
    const [userid, setUserid] = useState('')

    // console.log(slotebook)



    const user = JSON.parse(sessionStorage.getItem('user'));
    const navigate = useNavigate()

    const { id } = useParams();

    const today = new Date().toISOString().split("T")[0];




    useEffect(() => {

        window.scrollTo(0,0);
        axios.get(`http://localhost:4000/doctor/${id}`)
            .then((res) => {
                setDoctor(res.data.result)
                setReview(res.data.result.reviews)
                setTime(res.data.result.schedule.Time)
            });
        if (user) {
            setUserid(user.result._id)
        };

        axios.get(`http://localhost:4000/appointment/${id}`)
            .then((res) => {
                // console.log(res.data.result);
                setAppointment(res.data.result);
                setSlotebook(res.data.result)
            });


    }, [id,slote])

    const chooseSlote = (res) => {

        if (date) {

            let bookedslot = 0;
            for (let i = 0; i < appointments.length; i++) {
                // appointments.map((time)=>{
                //     debugger
                if (appointments[i].appointment_date.date === date) {
                    if (appointments[i].appointment_date.time === res) {
                        bookedslot = 1;
                    }
                }

            }
            if (bookedslot === 0) {
                setSlote(res);
                setSloteBgc('green')
                setsloteAvalbale('white')
            } else {
                alert('Please Choose Other Slote this is Already Booked');
            }

        }
        else {
            alert('Please Choose Date First')
        }


    }

    const appointment = () => {

        if (date && userid && slote) {

            axios.post('http://localhost:4000/postappointment', {
                user_id: userid,
                doctor_id: doctor._id,
                doctor_name: doctor.name,
                appointment_date: {
                    time: slote,
                    date: date
                },
                appointment_status: 'pending',
                image: doctor.image

            })
                .then((res) => {
                    alert(res.data.result)

                })
                setSlote(' ')

        }
        else if (!userid) {
            alert('Please Login First')
            navigate('/login')
        }
        else if(!date){
            alert('Please select a date')
        }
        else if(!slote){
            alert('Please select a slot')
        }
    }





    return (
        <div>
            <div className="Doc_section">
                <div className="continer ">
                    <div className='Doc_section_continer'>
                        <div className="doc_img">
                            <img src={doctor.image} alt="" />
                        </div>
                        <div className="doc_information">
                            <h2>{doctor?.name}</h2>
                            <p><span>{doctor?.qualifications?.join(", ")}</span></p>
                            <p><span>Specialist</span>: Cardiology</p>
                            <p><span>Experience</span>: {doctor?.experience} Years</p>
                            <p><span>Clinic</span>: {doctor?.location?.clinicName}</p>
                            <p><span>Add</span>: {doctor?.location?.address}</p>
                            <p><span>Phone</span>: {doctor?.contactInfo?.phone}</p>
                            <p><span>Email</span>: {doctor?.contactInfo?.email}</p>
                            <p><span>Languages Spoken</span>: {doctor?.languagesSpoken?.join(", ")}</p>
                            <p><span>Ratings</span>: {doctor?.ratings}</p>
                            <h5 style={{ color: 'green' }}><span style={{ color: 'black' }}>Fees</span>: ₹{doctor.consultationFee}</h5>
                        </div>
                    </div>

                </div>

                <div className="appointment">
                    <div className='appo_title'><h5>Doctor Appointment</h5></div>
                    <div style={{ padding: '5px', width: '100%' }}>
                        <b>{doctor?.name}</b>
                        <p>{doctor?.ratings}, <span style={{ color: 'green' }} >₹{doctor.consultationFee}</span>  Verified details </p>
                    </div>
                    <div className='appoint_date'>
                        <input type="date" min={today} onChange={(e) => setDate(e.target.value)} />
                        <button className='btn btn-primary mt-2' onClick={() => appointment()}>Book Appointment Now</button>
                    </div>

                    <div className='appointtttt'>
                        {time.map((res, index) => (
                            <div key={index} style={{ border: `2px solid ${slote === res ? sloteAvalbale : ''}`, backgroundColor: slote === res ? sloteBgc : '' }} className='Appointment_time' value={res} onClick={() => chooseSlote(res)} >
                                <p style={{ color: slote === res ? sloteAvalbale : '' }}>{res}</p>
                            </div>
                        ))}


                    </div>



                </div>
                <div className="reviews">
                    <div className='appo_title'><h5>Reviews</h5></div>
                    {review.map((res) => (
                        <div className="reviewsss">

                            <div className="reviewer">
                                <div className="profile_reviewer">{res.patientName.charAt(0)}</div>
                                <h5>{res.patientName}</h5>
                            </div>

                            <p> <span>Comment</span>: {res.comment}</p>
                            <p><span>Rating</span>: {res.rating} star</p>
                        </div>))}



                </div>

            </div>
        </div>
    )
}

export default Doctor