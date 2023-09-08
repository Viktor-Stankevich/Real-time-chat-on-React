import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AuthProvider from '../hoc/AuthProvider'
import { useUser } from '../hooks/useUser'

const AuthLayout = () => {

    // Custom hooks
    const {isAuthenticated} = useUser()

    return isAuthenticated === undefined ? (<p>...Loading</p>) :
    !isAuthenticated ?
      (
        <div
        className="container-primary w-max justify-center"
    >
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </div>
      ) : <Navigate to='/' />

      

    
}

export default AuthLayout