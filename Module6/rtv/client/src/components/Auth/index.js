import React, { useContext, useState } from 'react'
import { UserContext } from '../context/userContext'
import AuthForm from './AuthForm'

const initState = {
    username: '',
    password:''
}

function Auth(props) {
    const [inputs, setInputs] = useState(initState)
    const [toggle, setToggle] = useState(false)

    const { signup, login, errMsg }= useContext(UserContext)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prev => ({...prev, [name]: value}))
    }

    function handleSignup(e) {
        e.preventDefault()
        signup(inputs)
        setInputs(initState)
    }

    function handleLogin(e) {
        e.preventDefault()
        login(inputs)
        setInputs(initState)
    }

    function toggleForm (e) {
        e.preventDefault()
        setToggle(p => !p)
    }
    
   return (
        <AuthForm 
            handleChange={handleChange}
            handleSignup={handleSignup}
            handleLogin={handleLogin}
            inputs={inputs}
            toggleForm={toggleForm}
            toggle={toggle}
            errMsg={errMsg}
        />
    ) 
}

export default Auth