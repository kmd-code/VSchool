import React, { useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login(props) {
    const { signup } = useAuth()
    const { error, setError, loading, setLoading } = props.value
    
    const userEmail = useRef()
    const userPass = useRef()
    const passConfirm = useRef()
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        if(userPass.current.value !== passConfirm.current.value){
            return setError("Passwords do not match")
        }

        try {
            setError('')
            setLoading(true)
            await signup(userEmail.current.value, userPass.current.value)
            history.push('/')
        } catch {
            setError("Failed to create account")
        }

        setLoading(false)
    }
    

    return (
        <>
        <form>
            <h2>Sign Up</h2>
            <p>{error}</p>
            <label>Email</label>
            <input type="email" ref={userEmail} required></input>
            <label>Password</label>
            <input type="password" ref={userPass} required></input>
            <label>Confirm Password</label> 
            <input type='password' ref={passConfirm} required></input>
            <button disabled={loading} onClick={handleSubmit}>Sign Up</button>
        </form>
        <p>Already have an account? <Link to='/login'>Login</Link></p>
        </>
    )
}
