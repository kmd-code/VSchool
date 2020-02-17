import React, {useState, useEffect, useContext} from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import {PokeFavs} from '../context/PokeFavs'

function PokeDetail(props) {
    const favs = useContext(PokeFavs)
    const {pokeId} = useParams()
    const [pokeInfo, setPokeInfo] = useState({})

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
            .then(resp => {
                setPokeInfo(() => resp.data)
            })
            .catch(error => console.log(error))
    }, [pokeId])

    function getSafe(fn, defaultVal) {
        try {
            return fn();
        } catch (e) {
            return defaultVal;
        }
    }
     
    if (pokeInfo) {
        return (
            <div className="container">
            <div className="pokeDetail">
                <div className="poke">
                <img alt="Front View" src={getSafe(() => pokeInfo.sprites.front_default)}/>
                </div>
                <div className='title'>
                <h1>{getSafe(() => pokeInfo.name.toUpperCase())}</h1>
                <p>HEIGHT: {getSafe(() => pokeInfo.height)}</p>
                <p>WEIGHT: {getSafe(() => pokeInfo.weight)}</p>
                <p>TYPE: {getSafe(() => pokeInfo.types[0].type.name.toUpperCase())}</p>
                <div className='detailBtns'>
                <Link className='detailBtn' to='/'>Back</Link>
                <button className="detailBtn" onClick={() => favs.addFav({
                        name: getSafe(() => pokeInfo.name),
                        sprite: getSafe(() => pokeInfo.sprites.front_default)
                    }
                )}>Favorite</button>
                </div>
                </div>
            </div>
            </div>
        )
    } else {
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        )
    }

}

export default PokeDetail