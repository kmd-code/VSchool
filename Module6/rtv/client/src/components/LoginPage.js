import React, { useState } from 'react'
import Home from './Home'

function LoginPage(props) {
    const initInput = {
        username: '',
        password: ''
    }
    const [input, setInput] = useState(initInput)
    const [existingUser, setExistingUser] = useState(true)

    function handleChange(e){
        const {name, value} = e.target
        setInput(prevInput => {
            return {
                ...prevInput, 
                [name]: value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(input)
        setInput(() => initInput)
    }

    function handleToggle(e){
        e.preventDefault()
        setExistingUser(prevToggle => !prevToggle)
    }

    if(localStorage.getItem("user")){
        return (
            <Home />
        )
    } else { 
        return (
            <form handleSubmit={handleSubmit}>
                <h1>{existingUser ? "Login" : "Signup"}</h1>
                    <input 
                        onChange={handleChange} 
                        name='username' 
                        value={input.username} 
                        type='text'
                        placeholder='Username...'
                    />
                    <input 
                        onChange={handleChange} 
                        name='password' 
                        value={input.password} 
                        type='text'
                        placeholder='Password'
                    />
                <button>Login</button>
                <button onClick={handleToggle}>{existingUser ? "New User?" : "Existing User?"}</button>
            </form>
        )         
    }
}

export default LoginPage