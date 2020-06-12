import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UserContext = React.createContext()

function UserContextProvider(props) {
    const initState = {
        user: {},
        token: '',
    }
    const [userState, setUserState] = useState(initState)

    function signup(credentials) {
        axios.post('/auth/signup', credentials)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <UserContext.Provider value={{
            ...userState, 
            signup
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContextProvider, UserContext} 
