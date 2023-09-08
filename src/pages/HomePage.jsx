import React from 'react'
import SendMessageForm from '../components/forms/SendMessageForm'
import MessageList from '../components/lists/MessageList'

const HomePage = () => {
  return (
    <>
      <header>
        <h1>Real-time chat on React.js</h1>
      </header>
      <main
        className='grow overflow-auto'
      >
        <MessageList />
      </main>
      <footer>
        <SendMessageForm />
      </footer>
    </>
  )
}

export default HomePage