import React from "react"

function Badge(props) {
    console.log(props)
    return (
        <div className="flexCont">
            <div className="badge">
            <h1 className="badgeHeader">Badge:</h1>
                <div className="column">
                    <h2 className="name">Name: {props.info.firstName} {props.info.lastName}</h2>
                    <br />
                    <h2 className="birthPlace">Birthplace: {props.info.birthPlace}</h2>
                    <br />
                    <h2 className="email">Email: {props.info.email}</h2>
                </div>
                <div className="column">
                    <h2 className="phone">Phone: {props.info.phone}</h2>
                    <br />
                    <h2 className="favFood">Favorite Food: {props.info.favFood}</h2>
                </div>
                <br />
                <p className="about">{props.info.about}</p>
                <button className="button" onClick={props.handleEdit}>Edit</button>
            </div>
        </div>
    )
}

export default Badge