import React from 'react'
import { useMessage } from '../../hooks/useMessage'

const MessageList = () => {

    // Custom hooks
    const { messages } = useMessage();

    const uid = localStorage.getItem('uid');


    return messages === undefined ? (<p>...Loading</p>) :
    !!messages ? (
    <>
        {
            messages.map(message => (
                <div
                    className={`message ${message.id === uid ? 'my_message' : null}`}
                >
                    <h3>{message.name}</h3>
                    <p>{message.message}</p>
                </div>
            ))
        }
    </>
    ) : null
    

}

export default MessageList