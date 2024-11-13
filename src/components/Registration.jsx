import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';


function Registration() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
      if(data.password === data.confirmPassword){
        axios.post('http://localhost:4000/registration',{
          name: data.name,
          email: data.email,
          number:data.number,
          password: data.password,
          dob:data.dob,
          address:data.address,
          gender:data.gender

          
        })
        .then(response => {
          console.log(response.data);
          alert(response.data.result)
          })
         
      }
      else{
        alert("Password and Confirm Password does not match");
      }
     
  };

  return (
    <div>
      <div className="box_reg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="appo_title">
            <h5>Registration</h5>
          </div>
          <div className="form-group">
            <input {...register('name',{required:true})} type="text" placeholder="Enter your Name" />
            <input {...register('email',{required:true})} type="text" placeholder="Enter your E-mail" />
            <input {...register('number',{required:true})} type="text" placeholder="Enter your Number" />
            <input {...register('password',{required:true})} type="password" placeholder="Create a Password" />
            <input {...register('confirmPassword')} type="password" placeholder="Confirm Password" />
            <input {...register('dob',{required:true})} type="text" placeholder="Enter your Date of Birth" />
            </div>
            <div className='add_form'>
            <textarea {...register('address',{required:true})} type="text" placeholder="Enter your Address" />
            <select {...register('gender',{required:true})} type="text" >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            </div>
           
            <button type="submit" className="btn btn-primary">Register</button>
            
           <div className='log_reg'>

           <p>Already have an account?</p>
           <Link to='/login'><p style={{color:'blue'}}>Log in</p></Link>
           </div>
           

         
        </form>
      </div>
    </div>
  )
}

export default Registration;
