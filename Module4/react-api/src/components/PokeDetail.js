import React, {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
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
            <div>
                <img alt="Front View" src={getSafe(() => pokeInfo.sprites.front_default)}/>
                <button onClick={() => favs.addFav(getSafe(() => pokeInfo.id))}>Favorite</button>
                <h1>{getSafe(() => pokeInfo.name)}</h1>
                <h2>Height: {getSafe(() => pokeInfo.height)}</h2>
                <h2>Weight: {getSafe(() => pokeInfo.weight)}</h2>
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