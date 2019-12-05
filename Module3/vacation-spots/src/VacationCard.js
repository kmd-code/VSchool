import React from "react"

function VacationCard(props) {
    return (
        <div>
            <img src={props.img} alt=""/>
            <h1>{props.place} 
            <span style={{display: props.price <= 500 ? "inline" : "none"}}> - $</span>
            <span style={{display: props.price >= 500 && props.price <= 1000 ? "inline" : "none"}}> - $$</span>
            <span style={{display: props.price >= 1000 ? "inline" : "none"}}> - $$$</span>
            {props.price}</h1>
            <h2>Best time to Visit: {props.timeToGo}</h2>
        </div>
    )
}

export default VacationCard