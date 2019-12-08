import React from "react"
import FriendList from "./components/FriendList"
import friendArr from "./friendArray"

function App(){
  console.log(friendArr)
  return (
    <div>
      <FriendList />
    </div>
  )
}

export default App