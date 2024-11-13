import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { json, Link, useNavigate } from 'react-router-dom';
import logo from '../img/practo.svg'
import avatar from '../img/nurse-doctor-avatars-characters_18591-65146.avif'


function Loginuser() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    axios.post('http://localhost:4000/login', {
      email: data.email,
      password: data.password
    })
      .then((res) => {
        console.log(res.data)
        sessionStorage.setItem('user', JSON.stringify(res.data))
        if (res.data.status == 'success') {
          navigate(`/profile`);
        }
        else {
          alert(res.data.result)
        }
      })

  }

  return (
    <div>
      <div className="home">

        <div className="box_login">
          <div className="login_formmm">
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', alignItems: 'center' }}>
              <div className="form-group login_page">
                <img src={logo} alt="" />
                <input {...register('email', { required: true })} type="text" placeholder="Enter your E-mail" />
                <input {...register('password', { required: true })} type="password" placeholder="Enter your Password" />

                <button type="submit" className="btn btn-primary">Log in</button>
                <Link to='/register'><p style={{ textDecoration: 'underline' }}>Registration</p></Link>


              </div>
            </form>
          </div>
          <div className="login_imagess">
            <img src={avatar} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loginuser;