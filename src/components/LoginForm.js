import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = ({setIsLogggedIn}) => {

  const navigate = useNavigate();  

  const [formData, setFormData] = useState( {
    email : "", password : ""
  } ) 

  const [showPassword, setShowPassword] = useState(false)

  function changeHandeler(event){
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ))
  }
  
  function submitHandeler(event){
    event.preventDefault();
    setIsLogggedIn(true);
    toast.success("Logged In")
    navigate("/dashboard")
  }

  return (
    <form onSubmit={submitHandeler}
    className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Adress <sup className='text-pink-200'>*</sup>
            </p>
            <input
                required
                name='email'
                type='email'
                value={formData.email}
                onChange={changeHandeler}
                placeholder='Enter email id'
                className='rounded  bg-richblack-800 text-richblack-5 w-full p-[12px]'
            />
        </label>

        <label className='full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Enter password <sub className='text-pink-200'>*</sub>
            </p>
            <input
                required
                name='password'
                type={showPassword ? ('text') : ('password')}
                value={formData.password}
                onChange={changeHandeler}
                placeholder='Enter your password'
                className='rounded  bg-richblack-800 text-richblack-5 w-full p-[12px]'
            />

            <span 
            className='absolute cursor-pointer right-3 top-[270px] text-white'
             onClick={ () => setShowPassword( (prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24}/>) : (<AiOutlineEye fontSize={24}/>) }
            </span>

            <Link to='#'>
                <p
                className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                    Forgot Password
                </p>
            </Link>
        </label>

        <button
        className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900
        px-[12px] py-[8px]'
        > Sign-In </button>
    </form>
  )
}

export default LoginForm