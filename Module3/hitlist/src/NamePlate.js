import React from "react"

const NamePlate = (props) => {
    return (
        <div className="nameplate">
            <img src={props.image} alt={props.name} />
            <h3>{props.name}</h3>
        </div>
    )
}

export default NamePlate
