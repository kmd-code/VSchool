import React, { useState } from 'react'
import axios from 'axios'

const UserContext = React.createContext()

function UserContextProvider(props) {
    const initState = {
        user: {},
        token: '',
    }
    const [userState, setUserState] = useState(initState)

    function signup(credentials) {
        console.log(credentials)
        axios.post('/auth/signup', credentials)
        .then(res => {
            handleData(res.data)
        })
        .catch(err => console.log(err))
    }

    function login(credentials) {
        axios.post('/auth/login', credentials)
        .then(res => {
            handleData(res.data)
        })
        .catch(err => console.log(err))
    }

    function handleData(data) {
        const {user, token} = data
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("token", token)
        setUserState(prev => ({...prev, user, token}))
    }

    return (
        <UserContext.Provider value={{
            ...userState, 
            signup,
            login
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContextProvider, UserContext} 
