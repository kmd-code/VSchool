import React, {useState} from 'react'

function BountyTile(props) {
    const {isAlive, firstName, lastName, bounty, _id} = props.bountyObj
    const [edit, setEdit] = useState()

    return (
        <div className='bountyTile'>
            <p>{`${firstName} ${lastName}`}</p>
            <p className="bounty" style={{fontFamily: "Mandalorian"}}>${bounty}</p>
            <div>
                <button className="bountyButton">Edit</button>
            </div>
        </div>
    )
}

export default BountyTile