import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    width: 25%;
    padding: 2%;
`
const Button = styled.button`

`

function AuthForm(props) {
    const { handleSubmit, 
            handleChange, 
            inputs: {username, password}, 
            btnText,
            toggleForm,
            toggleText
        } = props

    return (
        <Form onSubmit={handleSubmit}>
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
            <Button>{btnText}</Button>
            <Button onClick={toggleForm}>{toggleText}</Button>
        </Form>
    )
}

export default AuthForm