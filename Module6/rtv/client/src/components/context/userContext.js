import React, { useState } from 'react'
import axios from 'axios'

const UserContext = React.createContext()

function UserContextProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || '',
        errMsg: ""
    }
    const [userState, setUserState] = useState(initState)

    function signup(credentials) {
        axios.post('/auth/signup', credentials)
        .then(res => {
            handleData(res.data)
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function login(credentials) {
        axios.post('/auth/login', credentials)
        .then(res => {
            handleData(res.data)
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function logout(){
        localStorage.clear('token')
        localStorage.clear('user')
        setUserState({
            user: {},
            token: '',
            errMsg: ''
        })
    }

    function handleData(data) {
        const {user, token} = data
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("token", token)
        setUserState(prev => ({...prev, user, token}))
    }

    function handleAuthErr(errMsg){
        setUserState(prev => ({
            ...prev,
            errMsg
        }))
    }

    return (
        <UserContext.Provider value={{
            ...userState, 
            signup,
            login,
            logout
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContextProvider, UserContext} 
