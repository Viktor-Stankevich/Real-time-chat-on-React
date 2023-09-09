import React from 'react'
import SendMessageForm from '../components/forms/SendMessageForm'
import MessageList from '../components/lists/MessageList'
import { getAuth, signOut } from 'firebase/auth'

const HomePage = () => {

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
    localStorage.removeItem('uid')
  }

  return (
    <>
      <main
        className='grow overflow-auto'
      >
        <MessageList />
      </main>
      <footer
        className='flex flex-col'
      >
        <SendMessageForm />
        <button
                type='button'
                className='text-orange-600 border-none hover:text-orange-700 transition py-4'
                onClick={logout}
            >Выйти</button>
      </footer>
    </>
  )
}

export default HomePage