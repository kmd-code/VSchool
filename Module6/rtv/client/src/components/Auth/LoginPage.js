import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'

const initState = {
    username: '',
    password:''
}

function LoginPage(props) {
    const [user, setUser] = useState(initState)
    const [toggle, setToggle] = useState(false)

    const { signup, login }= useContext(UserContext)
    
   return (
   <>
       <h1>This is the Login Page</h1>
       <form>
           <input 

           />
           <input 
           
           />
       </form>
    </>
   )
}

export default LoginPage