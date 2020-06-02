import React, { useState } from 'react'
import Home from './Home'

function LoginPage(props) {
    const initInput = {
        username: '',
        password: ''
    }
    const [input, setInput] = useState(initInput)
    const [returningUser, setReturningUser] = useState(true)

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
        setReturningUser(prevToggle => !prevToggle)
    }

    if(localStorage.getItem("user")){
        return (
            <Home />
        )
    } else { 
        return (
            <form>
                <h1>{returnUser ? 'Welcome Back', 'Sign Up'}/h1>
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
                <button onClick={handleSubmit}>Login</button>
            </form>
        )         
    }
}

export default LoginPage