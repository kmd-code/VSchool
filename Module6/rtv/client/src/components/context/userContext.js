import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UserContext = React.createContext()

function UserContextProvider(props) {
    const initState = {
        username: '',
        password: '',
        email: ''
    }
    const user = useState(initState)

    function login(user){
        axios.post('/auth/login', user)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    function signup(user){
        axios.post('/auth/signup', user)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <UserContext.Provider value={user, login, signup}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContextProvider, UserContext} 
