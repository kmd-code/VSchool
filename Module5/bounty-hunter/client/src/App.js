import React, {useEffect} from 'react'
import axios from 'axios'

function App(){
    

    useEffect(() => {
        axios.get('/bounties')
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>App Page</h1>
        </div>
    )
}

export default App