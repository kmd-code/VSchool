import React from 'react'
import {Link} from 'react-router-dom'

function Header(props) {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/favorites'>Favorites</Link>
        </div>
    )
}

export default Header