import React from "react"
import Pet from "./Pet"

function Friend(props) {

    const pets = props.pets.map(pet => <Pet name={pet.name} breed={pet.breed} />)

    return (
        <ul>
            <hr></hr>
            <h2>Name: {props.name} / Age: {props.age}</h2>
            <ul>
                <h3>Pets:</h3>
                {pets} 
            </ul>
        </ul>
    )
}

export default Friend