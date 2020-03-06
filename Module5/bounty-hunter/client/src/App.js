import React, {useEffect} from 'react'
import axios from 'axios'
import styled from '@emotion/styled'

const BountyContainer = styled('div')`
    height: 450px;
    width: 600px;
    margin: auto;
    background-color: #ffffff;
    box-shadow:0px 0px 3px 1px grey;
    padding: 10px;
`
BountyContainer.displayName = 'BountyContainer'

function App(){
    useEffect(() => {
        axios.get('/bounties')
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <BountyContainer>
            <h1>App Page</h1>
        </BountyContainer>
    )
}

export default App