import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"

export const useUser = () => {
    
    const [user, setUser] = useState();

    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => setUser(user))
    }, [])

    return {user, isAuthenticated: user}

}