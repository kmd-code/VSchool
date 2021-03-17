import React, { useState } from 'react'
import { useAuth } from './context/AuthContext'
import { useHistory } from 'react-router-dom'

export default function Dashboard() {

    const { logout } = useAuth()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    function handleClick(e){
        e.preventDefault()
        logout()
    }

    return (
        <div>
            Dashboard
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}
