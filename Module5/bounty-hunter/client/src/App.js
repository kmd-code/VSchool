import React, {useEffect, useState} from 'react'
import axios from 'axios'

import Header from './components/Header'
import Display from './components/Display'
import BountyForm from './components/BountyForm'

function App(){
    const [bounties, setBounties] = useState([])

    useEffect(() => {
        axios.get('/bounties')
            .then(res => {
                setBounties(() => res.data)
            })
            .catch(err => console.log(err))
    }, [])

    function addBounty(firstName, lastName, bounty){
        axios.post('/bounties', {
            firstName,
            lastName,
            bounty
        })
        .then(res => setBounties())
        .catch(err => console.log(err))
    }

    if(bounties){
        console.log(bounties)
    } else {
        console.log('Loading')
    }

    return (
        <>
        <Header></Header>
        <div>
            <BountyForm addBounty={addBounty}></BountyForm>
            <Display></Display>
        </div>
        </>
    )
}

export default App