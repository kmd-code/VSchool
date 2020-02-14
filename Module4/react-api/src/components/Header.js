import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/favorites'>Favorites</Link>
            </div>
        </header>
    )
}

export default Header