import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import MessageProvider from '../hoc/MessageProvider'

const HomeLayout = () => {

  // Custom hooks
  const {isAuthenticated} = useUser()

  return isAuthenticated === undefined ? (<p>...Loading</p>) :
  isAuthenticated ?
    (
      <div
        className="container-primary gap-6 w-full sm:w-9/12 md:w-6/12"
      >
        <header>
          <h1>Real-time chat on React.js</h1>
        </header>
        <MessageProvider>
          <Outlet />
        </MessageProvider>
      </div>
    ) : <Navigate to='/login' />

}

export default HomeLayout