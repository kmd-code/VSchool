import React from 'react'
import {Link} from 'react-router-dom'

function Home(props) {
    return (
        <div className="content home">
            <div>
                <h1>Kaydon Duvall</h1>
                <h2>Web Developer</h2>
            </div>
            <div>

            </div>
            <div>
                <button className="homeButton"><Link to='/projects'>Projects</Link></button>
            </div>
        </div>     
    )
}

export default Home