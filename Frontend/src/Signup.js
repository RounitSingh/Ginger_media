import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios'

const Signup = () => {
  const [values,setValues]= useState({
    name: '',
    email: '',
    password: ''
})
const navigate=useNavigate();
const [errors,setErrors]= useState({})
const handleInput=(event)=> {
  setValues({...values, [event.target.name]: event.target.value});
 
}

const handleSubmit=(event)=>{
    event.preventDefault();

    axios.post(  `${window.location.origin}/signup` , values)
    .then(res=>{
      navigate('/');
    })
    .catch(err=>console.log(err));
}



  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
           <div className='bg-white p-3 rounded w-25'>
             <h2>Sign-Up</h2>
           <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='name'><strong>Name</strong></label>
                    
                    <input type='text' placeholder='Enter Name' name='name' onChange={handleInput} className='from-control rounded-0'></input>
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
             
                </div>
               <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' placeholder='Enter Email' name='email' onChange={handleInput} className='from-control rounded-0'></input>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
            
                </div>
               <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type='password' placeholder='Enter password' name='password' onChange={handleInput} className='from-control rounded-0'></input>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
             
               </div>
               <button className='btn btn-success w-100 rounded-0'>Sign up</button>
               <p>you are agree to our policies</p>
               <Link to='/' className='btn btn-defalut border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
            </form>
           </div>
        </div>
  )
}

export default Signup