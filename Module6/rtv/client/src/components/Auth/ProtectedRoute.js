import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function ProtectedRoute(props) {
    const { path, redirectTo, component: C, token, ...rest} = props
        if(token){
            return (
                <Route path={path} render={() => <C {...rest}/>} />
            )
        } else {
            return (
                <Redirect to={redirectTo} />
            )
        }
    
}