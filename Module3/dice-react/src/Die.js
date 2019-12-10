import React from "react"
import DiceFace from './DiceFace'

function Die(props) {

    if (props.num === 1) {
        return <DiceFace jsx=
        {<div className="dice first-face">
        <span className="dot"></span>
        </div>} />
    } else if (props.num === 2){
        return <DiceFace jsx ={
            <div className="dice second-face">
            <span className="dot"></span>
            <span className="dot"></span>
            </div>} />
    } else if (props.num === 3){
        return <DiceFace jsx ={
            <div className="dice third-face">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            </div>} />
    } else if (props.num === 4){
        return <DiceFace jsx ={
            <div className="fourth-face dice">
            <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
            </div>
            <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
            </div>
            </div>} />
    } else if (props.num === 5){
        return <DiceFace jsx ={
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
            </div>} />
    } else if (props.num === 6){
        return <DiceFace jsx={
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
            </div>} />
    } else {
        return <DiceFace jsx={
            <div></div>} />
        
    }
} 

export default Die