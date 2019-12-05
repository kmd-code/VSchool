import React from "react"
import Friend from "./Friend"
import friendArr from "/Users/kaydon/Desktop/VSchool/Module3/friends-with-pets/src/friendArray.js"


function FriendList() {

    const friendsArr = friendArr.map(friend => <Friend name={friend.name} age={friend.age} pets={friend.pets}/>)

    return (
        <div>
            {friendsArr}   
        </div>
    )
}

export default FriendList