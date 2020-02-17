import React from 'react'
import {Link} from 'react-router-dom'

function Favorites(props) {
    const pokeFavs = JSON.parse(localStorage.getItem('localFavs'))

    const pokeFavDisp = pokeFavs.map(poke => {
        return (
            <Link className='pokeCard' key={poke.name} to={`/pokemon/${poke.name}`} >
                <img alt={poke.name} src={poke.sprite} />
                <p>{poke.name.toUpperCase()}</p>
            </Link>
        )
    })

    return (
        <div className='container'>
            <h1>Your current Favorites: </h1>
            <div className='pokeDisplay'>
                {pokeFavDisp}
            </div>
        </div>
    )
}

export default Favorites