import React from "react"

function Header(props) {
    return (
        <header className={`${props.theme}-theme`}>
            <p>About</p>
            <p>Contact</p>
            <p>Home</p>
        </header>
    )
}

export default Header