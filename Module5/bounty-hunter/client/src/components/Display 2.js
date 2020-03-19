import React from 'react'

function Display(props){
    const bountyList = props.bounties.map(bounty => {
        return (
            <div key={bounty._id} className='bountyTile'>
                <p>{`${bounty.firstName} ${bounty.lastName}`}</p>
                <p>{bounty.bounty}</p>
            </div>
        )
    })
    return (
        <div className='bountyContainer'>
            {bountyList}
        </div>
    )
}

export default Display