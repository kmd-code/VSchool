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

    const { signup, login }= useContext(UserContext)

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
    <div>
        {!toggle ? (
            <>
            <AuthForm 
                handleChange={handleChange}
                handleSubmit={handleSignup}
                inputs={inputs}
                btnText={"Signup"}
                toggleForm={toggleForm}
                toggleText={"Already a User?"}
            />
            </>
        ) : (
            <>
            <AuthForm 
                handleChange={handleChange}
                handleSubmit={handleLogin}
                inputs={inputs}
                btnText={"Login"}
                toggleForm={toggleForm}
                toggleText={"Need to Signup?"}
            />
            </>
        )}
    </div>
   )

}

export default Auth