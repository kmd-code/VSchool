import React from "react"
// import Pet from "./components/Pet"
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