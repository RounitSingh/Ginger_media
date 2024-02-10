import React,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'

import axios from 'axios'


const Login = () => {
     const [values,setValues]= useState({
          email: '',
          password: ''
     })
     const navigate=useNavigate();
     const [errors,setErrors]= useState({})
     const handleInput=(event)=> {
          setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))

     }

     
      



     const handleSubmit = (event) => {
          event.preventDefault();
      
          axios.post(`${window.location.origin}/login`, values)
              .then(res => {
                   if (res.data === "Success") {
                      navigate('/home');
                  } else {
                     alert("No record existed");
                  }
              })
              .catch(err => console.log(err));
      }
      

     // const handleSubmit=(event)=>{
     //      event.preventDefault();
      
     //      axios.post(  'http://localhost:8081/' , {email, password})
     //      .then(res=>{
     //        if(res.data === "Success"){
     //           navigate('/home');}
     //           else {
     //                alert("No record existed");
     //           }
     //      })
     //      .catch(err=>console.log(err));

     // }


    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
           <div className='bg-white p-3 rounded w-25'>
           <h2>Sign-In</h2>
             <form action="" onSubmit={handleSubmit}>
               <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' placeholder='Enter Email' name='email' onChange={handleInput} className='from-control rounded-0' />
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
               </div>
               <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type='password' placeholder='Enter password' name='password' onChange={handleInput} className='from-control rounded-0' />
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
               </div>
               <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
               <p>you are agree to our policies</p>
               <Link to='/signup' className='btn btn-defalut border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
            </form>
           </div>
        </div>
      )
}

export default Login