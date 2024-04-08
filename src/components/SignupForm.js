import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'

const SignupForm = ({setIsLogggedIn}) => {

  let navigate = useNavigate();  

  const [formData, setFormData] = useState(
    {
        firstname :"",
        secondname : "",
        email : "",
        password : "",
        confirmPassword : ""

    }
  )

  const [showPassword, setShowPassword] = useState(false)
  const [accountType, setaccountType] = useState("student")

  function changeHandeler(event){
    setFormData( (prevData) => (
        {
            ...prevData,
            [event.target.name] : event.target.value
        }
    ))
  }

  function submitHandeler(event){
    event.preventDefault()
    if(formData.password != formData.confirmPassword){
        toast.error("Password do not match")
        return;
    }

    setIsLogggedIn(true)
    toast.success("Account Created")

    const accountData = { ... formData }
    const finalData = { ...accountData, ...accountType}
    console.log("Printing the data -> ")
    console.log(finalData)

    navigate("/dashboard")

  }
    
  return (
    <div>
        {/* Student Instructor Tab */}
        <div
        className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button
            className={`${accountType === "student"
            ? "bg-richblack-900 text-richblack-5"
            : "bg-transparent text-richblack-200"
            } py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setaccountType("student")}>
                Student
            </button>

            <button 
            className={`${accountType === "instructor"
            ? "bg-richblack-900 text-richblack-5"
            : "bg-transparent text-richblack-200"
            } py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setaccountType("instructor")}>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandeler}
        className='flex flex-col w-full gap-y-4 mt-6'>
            {/* Firstname amd secondname */}
           <div className='flex gap-x-4 mt-[15px]'>
                <label className='w-full'>
                    <p
                    className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                    >First Name <sup className='text-pink-200'>*</sup></p>
                    <input
                        type='text'
                        name='firstname'
                        onChange={changeHandeler}
                        placeholder='Enter first name'
                        value={formData.firstname}
                        className='rounded  bg-richblack-800 text-richblack-5 w-full p-[12px]'
                    />
                </label>

                <label className='w-full'>
                    <p
                    className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                    >Second Name <sup className='text-pink-200'>*</sup></p>
                    <input
                        type='text'
                        name='secondname'
                        onChange={changeHandeler}
                        placeholder='Enter second name'
                        value={formData.secondname}
                        className='rounded  bg-richblack-800 text-richblack-5 w-full p-[12px]'
                    />
                </label>
           
           </div>

            <div className='mt-[15px]'>
                 {/* Email */}
                <label>
                        <p
                        className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                        >Email Adress <sup className='text-pink-200'>*</sup></p>
                        <input
                            type='email'
                            name='email'
                            onChange={changeHandeler}
                            placeholder='Enter Email'
                            value={formData.email}
                            className='rounded  bg-richblack-800 text-richblack-5 w-full p-[12px]'
                        />
                    </label>
            </div>
           

            {/* Create and confirm password */}
            <div className='flex gap-x-4 mt-[15px]'>
                <label className='w-full'>
                    <p
                    className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                    >Create Password <sup className='text-pink-200'>*</sup></p>
                    <input
                        type={showPassword ? ("text") : ("password")}
                        name='password'
                        onChange={changeHandeler}
                        placeholder='Enter password'
                        value={formData.password}
                        className='rounded  bg-richblack-800 text-richblack-5 w-full p-[12px]'
                    />

                    <span
                    className='absolute cursor-pointer right-[15.75rem] top-[472px] text-white'
                     onClick={ () => setShowPassword( (prev) => !prev)}>
                        {showPassword ? (<AiOutlineEye fontSize={24}/>) : (<AiOutlineEyeInvisible fontSize={24}/>)}
                    </span>
                </label>

                <label className='w-full'>
                    <p
                    className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                    >Confirm Password <sup className='text-pink-200'>*</sup></p>
                    <input
                        type={showPassword ? ("text") : ("password")}
                        name='confirmPassword'
                        onChange={changeHandeler}
                        placeholder='Re-enter password'
                        value={formData.confirmPassword}
                        className='rounded  bg-richblack-800 text-richblack-5 w-full p-[12px]'
                    />

                    <span
                    cl className='absolute cursor-pointer right-[0.75rem] top-[472px] text-white'
                     onClick={ () => setShowPassword( (prev) => !prev)}>
                        {showPassword ? (<AiOutlineEye fontSize={24}/>) : (<AiOutlineEyeInvisible fontSize={24}/>)}
                    </span>
                </label>
            </div>

            <button
            className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900
            px-[12px] py-[8px] mt-[10px]'>
                Create Account
            </button>
            
        </form>
    </div>
  )
}

export default SignupForm