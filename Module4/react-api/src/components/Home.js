import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Home(props) {
    const [filtered, setFiltered] = useState(props.data)
    
    const pokeList = filtered.map((poke, index) => {
        return (
            <Link key={poke.name} className='pokeTile' to={`/pokemon/${poke.name}`}>{poke.name.toUpperCase()}</Link>
        )
    })

    function handleChange(e) {
        let currentPokeList 
        
        let newPokeList

        if (e.target.value !== "") {
        currentPokeList = props.data

        newPokeList = currentPokeList.filter(item => {
            return item.name.includes(e.target.value.toLowerCase());
            })
        } else {
            newPokeList = props.data
        }
        setFiltered(() => newPokeList)
    }

    return (
        <div className="container">
        <div className="searchCont">
            <h1>Poke Search</h1>
            <input type='text' onChange={handleChange} placeholder='Search Here...'/>
        </div>
        <div className="pokeDisplay">
            {pokeList}
        </div>
        </div>
    )

}

export default Home

