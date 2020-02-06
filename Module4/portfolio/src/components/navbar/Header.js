import React from 'react'
import {Link} from 'react-router-dom'

function Header(){
return (
    <header>
        <div className="logoCont">
            <button className='logo'><Link to='/'>KD</Link></button>
        </div>
        <div className="buttonCont">
            <button className="navLink"><Link to='/about'>About</Link></button>
            <button className="navLink"><Link to='/projects'>Projects</Link></button>
            <button className="navLink"><Link to='/blog'>Blog</Link></button>
            <button className="navLink"><Link to='/contact'>Contact</Link></button>
        </div>
    </header>
    ) 
}

export default Header