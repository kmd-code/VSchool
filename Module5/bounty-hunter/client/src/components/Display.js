import React from 'react'
import BountyTile from './BountyTile'

function Display(props){

    const bountyList = props.bounties.map(bountyObj => {
        return (
            <BountyTile key={bountyObj._id} bountyObj={bountyObj}/>
        )
    })


    return (
        <div className='bountyContainer'>
            {bountyList}
        </div>
    )
}

export default Display