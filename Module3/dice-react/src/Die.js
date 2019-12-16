import React from "react"

function Die(props) {

    if (props.num === 1) {
        return (
        <div className="dice first-face">
        <span className="dot"></span>
        </div>)
    } else if (props.num === 2){
        return (
            <div className="dice second-face">
            <span className="dot"></span>
            <span className="dot"></span>
            </div>)
    } else if (props.num === 3){
        return  (
            <div className="dice third-face">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            </div>)
    } else if (props.num === 4){
        return (
            <div className="fourth-face dice">
            <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
            </div>
            <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
            </div>
            </div>)
    } else if (props.num === 5){
        return (
            <div className="fifth-face dice">
            <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
            </div>
            <div className="column">
            <span className="dot"></span>
            </div>
            <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
            </div>
            </div>)
    } else if (props.num === 6){
        return (
            <div className="sixth-face dice">
            <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            </div>
            <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            </div>
            </div>)
    } else {
        return <div></div>
        
    }
} 

export default Die