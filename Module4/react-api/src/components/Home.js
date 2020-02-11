import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Home(props) {
    const [search, setSearch] = useState("")
    const pokeList = props.data.map((poke, index) => {
        return (
            <h4 key={index + 1}><Link to={`/pokemon/${index + 1}`}>{poke.name.toUpperCase()}</Link></h4>
        )
    })

    function handleChange(event) {
        const {value} = event.target
        setSearch(() => (value))
        console.log(search)
    }

    return (
        <div className="container">
            <div>
                <h1>This is the Home Page</h1>
                <input type='text' name='search' onChange={handleChange} value={search}/>
            </div>
            <div className="pokeDisplay">
                {pokeList}
            </div>
        </div>
    )
}

export default Home