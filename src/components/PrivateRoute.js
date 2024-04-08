import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({isLogedIn, children}) => {
  if(isLogedIn){
    return children
  }
  else{
    return <Navigate to="/login/"/>
  }
}

export default PrivateRoute