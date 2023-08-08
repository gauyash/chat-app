import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Authentication = () => {

  const isLoggedIn=false

  if(!isLoggedIn){
    return <Navigate to="login" />
  }
  return (
    <div>
    <Outlet />
    </div>

  )
}

export default Authentication