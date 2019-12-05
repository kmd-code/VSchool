import React from "react"

function PetComponent(props) {
    return (
            <li>Name: {props.name.charAt(0).toUpperCase() + props.name.slice(1)} / Breed: {props.breed.toLowerCase()}</li>
    )
}

export default PetComponent