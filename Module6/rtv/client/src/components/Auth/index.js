import React, { useContext, useState } from 'react'
import { UserContext } from '../context/userContext'
import AuthForm from './AuthForm'
import styled from 'styled-components'

const initState = {
    username: '',
    password:''
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

function Auth(props) {
    const [inputs, setInputs] = useState(initState)
    const [toggle, setToggle] = useState(false)

    const { signup, login, errMsg }= useContext(UserContext)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prev => ({...prev, [name]: value}))
        console.log(inputs)
    }

    function handleSignup(e) {
        e.preventDefault()
        signup(inputs)
        setInputs(initState)
        console.log("Signup Function")
    }

    function handleLogin(e) {
        e.preventDefault()
        login(inputs)
        setInputs(initState)
        console.log("Login Function")
    }

    function toggleForm (e) {
        e.preventDefault()
        setToggle(p => !p)
    }
    
   return (
        <AuthForm 
            handleChange={handleChange}
            handleSignUp={handleSignup}
            handleLogin={handleLogin}
            inputs={inputs}
            errMsg={errMsg}
        />
    ) 
}

export default Auth