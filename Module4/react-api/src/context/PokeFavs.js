import React, {useState, useEffect} from 'react'
const PokeFavs = React.createContext()

function PokeFavsProvider(props) {
    const [favorites, setFavorites] = useState([])

    function addFav(pokeObj) {
        if(JSON.stringify(favorites).includes(pokeObj.name)){
            alert("That is already in your favorites!")
        } else {
            setFavorites(prevFavs => ([...prevFavs, pokeObj]))
        }  
    }
    
    useEffect(() => {
        localStorage.setItem('localFavs', JSON.stringify(favorites))
        // console.log(JSON.parse(localStorage.getItem('localFavs')))
    }, [favorites])

    // console.log(favorites)

    return (
        <PokeFavs.Provider value={{favorites, addFav}}>
            {props.children}
        </PokeFavs.Provider>
    )
}

export {PokeFavsProvider, PokeFavs}