import React, {useState, useEffect} from 'react'
const PokeFavs = React.createContext()

function PokeFavsProvider(props) {
    const [favorites, setFavorites] = useState([])

    function addFav(key) {
        if(favorites.includes(key)){
            alert("That is already in your favorites!")
        } else {
            setFavorites(prevFavs => ([...prevFavs, key]))
        }  
    }

    return (
        <PokeFavs.Provider value={{favorites, addFav}}>
            {props.children}
        </PokeFavs.Provider>
    )
}

export {PokeFavsProvider, PokeFavs}