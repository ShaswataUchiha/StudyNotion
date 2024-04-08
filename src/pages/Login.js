import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/login.png'

const Login = ( {setIsLogggedIn} ) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond"
      desc2="Education for future-proof your career"
      image={loginImg}
      formtype="login"
      setIsLogggedIn={setIsLogggedIn}
    />
  )
}

export default Login
