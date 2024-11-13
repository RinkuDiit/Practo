import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Bookdoc() {

    const [allDoctors, setAllDoctors] = useState([])
    const [findDoc, setfindDoc] = useState([])
    const [specializationss, setspecialization] = useState('')
    const [location, setLocation] = useState('')


    useEffect(() => {
        axios.get('http://localhost:4000/doctors')
            .then((res) => {
                setAllDoctors(res.data.result)
            });




    }, []);

    function findDoctor() {
        if (specializationss && location) {
            axios.get(`http://localhost:4000/doctors_location/${specializationss}/${location}`)
                .then((res) => {
                    console.log(res.data.result)
                    setfindDoc(res.data.result)
                })
        }
        else {
            alert('Please Chose a specializations and a Location')
        }
    }


    const filterCities = Array.from(
        new Set(allDoctors.map(doctor => doctor.location.city))
    );

    const filterspecialization = Array.from(
        new Set(allDoctors.map(specialization => specialization.specialization))
    )



    return (
        <div>
            <div className='bookDoc'>
                <h1>Book an appointment</h1>
                <h6 style={{ color: 'gray' }}>Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</h6>
            </div>
            <div className='search_doc'>
                <h2>Find and Book</h2>
                <div className="search_doc_inputs">
                    <div className='input1'>
                        <span style={{ width: '15%' }}>
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                        </span>
                        <input list='citys' onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Select a city" />

                        <datalist id='citys'>
                            {filterCities.map((city) => (
                                <option key={city} value={city} />
                            ))}
                        </datalist>
                    </div>
                    <div className='input2'>
                        <span style={{ width: '10%' }}><i class="fa fa-search" aria-hidden="true"></i></span>
                        <input list='specialization' type="text" placeholder="Select a specialization" onChange={(e) => setspecialization(e.target.value)} />
                        <datalist id='specialization'>
                            {filterspecialization.map((specialization) => (
                                <option value={specialization} />
                            ))}
                        </datalist>
                    </div>
                    <div className="find">
                        <button className='btn btn-primary finddd' onClick={findDoctor}>Find Doctor</button>
                    </div>
                </div>

            </div>
            <div className="doctorslist">
                <div className="container doctorslist_container">
                    {findDoc.map((doc) => (
                        <Link to={'/doctor/' + doc._id}><div id={doc._id} className="doc">
                            <div className="doc_img" style={{ boxShadow: 'none' }}>
                                <img src={doc.image} alt="doc" />
                            </div>
                            <div className="doc_info">
                                <h3>{doc.name}</h3>
                                <p>{doc.specialization}</p>
                                <p>{doc.experience} years experience overall</p>
                                <h6>{doc.location.clinicName}</h6>
                                <p>{doc.location.city},{doc.location.state}</p>
                                <h5>₹{doc.consultationFee} Fees</h5>

                            </div>
                        </div></Link>
                    ))}
                </div>


            </div>



        </div>
    )
}

export default Bookdoc