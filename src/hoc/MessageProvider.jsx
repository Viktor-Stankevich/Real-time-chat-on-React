import { getAuth } from 'firebase/auth';
import { addDoc, collection, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
import React, { createContext, useEffect, useState } from 'react'
import { db } from '../firebase';

export const MessageContext = createContext();
const MessageProvider = ({children}) => {

    const [messages, setMessages] = useState([]);

    const auth = getAuth();

    const chatRef = collection(db, 'chats')

    const queryChat = query(chatRef, orderBy('createdAt'));

    const sendMessage = async ({message}) => {
        await addDoc(chatRef, {
            name: auth.currentUser.displayName,
            message,
            id: auth.currentUser.uid,
            createdAt: serverTimestamp()
        })
    }

    useEffect(() => {
        onSnapshot(queryChat, (snap) => {
            
            const messages = [];
            snap.forEach((doc) => {
                messages.push({...doc.data()})
            })

            setMessages(messages);
        })
    }, [])


    const value = {messages, sendMessage};

    return <MessageContext.Provider value={value}>
        {children}
    </MessageContext.Provider>

}

export default MessageProvider