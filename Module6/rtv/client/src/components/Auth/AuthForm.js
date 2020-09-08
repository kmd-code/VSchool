import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 1%;
    width: 25%;
    padding: 1%;
    box-shadow: 3px 3px 4px 2px grey;
    border-radius: 10px;
`

const Input = styled.input`
    padding: 2%;
    margin: 2%;
    border-radius: 2px;
`

const Button = styled.button`
    width: 50%;
    align-self: center;
    border-radius: 2px;
    margin: 1%;
`

function AuthForm(props) {
    const { handleSubmit, 
            handleChange, 
            inputs: {username, password}, 
            btnText,
            toggleForm,
            toggleText,
            errMsg
        } = props

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type='text'
                name='username'
                onChange={handleChange}
                value={username}
                placeholder='Username'
            />
            <Input
                type='text'
                name='password'
                onChange={handleChange}
                value={password}
                placeholder='Password'
            />
            <Button>{btnText}</Button>
            <Button onClick={toggleForm}>{toggleText}</Button>
            <p>{errMsg}</p>
        </Form>
    )
}

export default AuthForm