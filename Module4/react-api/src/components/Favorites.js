import React from 'react'
import {Link} from 'react-router-dom'

function Favorites(props) {
    const pokeFavs = JSON.parse(localStorage.getItem('localFavs'))

    const pokeFavDisp = pokeFavs.map(poke => {
        return (
            <Link to={`/pokemon/${poke.name}`} >
            <div className='pokeCard' key={poke.id}>
                <img alt={poke.name} src={poke.sprite} />
                <p>{poke.name.toUpperCase()}</p>
            </div>
            </Link>
        )
    })

    return (
        <div>
            <h1>Your current Favorites: </h1>
            {pokeFavDisp}
        </div>
    )
}

export default Favorites