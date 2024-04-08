import React from 'react'
import signupImg from '../assets/signup.png'
import Template from '../components/Template'

const Signup = ( {setIsLogggedIn} ) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond"
      desc2="Education for future-proof your career"
      image={signupImg}
      formtype="signup"
      setIsLogggedIn={setIsLogggedIn}
    />
  )
}

export default Signup
