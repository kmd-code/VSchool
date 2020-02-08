import React from 'react'
import {Link} from 'react-router-dom'

function Home(props) {
    const pokeList = props.data.map((poke, index) => {
        return (
            <h4 key={index + 1}><Link to={`/pokelist/${index + 1}`}>{poke.name.toUpperCase()}</Link></h4>
        )
    })

    return (
        <div className="container">
           <div>

           </div>
           <div className="pokeDisplay">
            {pokeList}
           </div>
        </div>
    )
}

export default Home