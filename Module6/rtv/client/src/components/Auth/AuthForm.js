import React from 'react'

function AuthForm(props) {
    const { handleSubmit, 
            handleChange, 
            inputs: {username, password}, 
            btnText,
        } = props

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='username'
                onChange={handleChange}
                value={username}
                placeholder='Username'
            />
            <input
                type='text'
                name='password'
                onChange={handleChange}
                value={password}
                placeholder='Password'
            />
            <button>{btnText}</button>
        </form>
    )
}

export default AuthForm