import React from 'react'

export default function Nav(props) {
    return (
        <div>
        <h1>This is the Navbar</h1>
        <button onClick={props.logout}>Logout</button>
        </div>
    )
}