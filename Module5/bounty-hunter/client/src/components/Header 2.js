import React from 'react'

function Header(props){
    console.log(props.user)
    const mandalorian = {
        fontFamily: "Mandalorian",
        fontSize: "1.5rem",
        padding: "1px"
    }

    return (
        <header>
            <h1 style={mandalorian}>{`${props.user[0].firstName} ${props.user[0].lastName}`}</h1>
            <h1 style={mandalorian}>{`$${props.user[0].bank}`}</h1>
        </header>
    )
}

export default Header