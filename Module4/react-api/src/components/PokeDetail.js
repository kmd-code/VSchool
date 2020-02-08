import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function PokeDetail(props) {
    const {pokeId} = useParams()
    const [pokeDetail, setPokeDetail] = useState()

    useEffect(() => {
        const axios = require('axios')
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
            .then(resp => {
                setPokeDetail(() => resp.data)
                console.log('API call made')
            })
            .catch(error => console.log(error))
    }, [pokeId])

    console.log(pokeDetail)

    return (
        <div>
            <h1></h1>
        </div>
    )
}

export default PokeDetail