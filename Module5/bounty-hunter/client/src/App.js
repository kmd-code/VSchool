import React, {useEffect, useState} from 'react'
import axios from 'axios'


import Header from './components/Header'
import Display from './components/Display'
import BountyForm from './components/BountyForm'

function App(){
    const [bounties, setBounties] = useState([])
    const [user, setUser] = useState()

    useEffect(() => {
        axios.get('/bounties')
            .then(res => {
                setBounties(() => res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get('/users')
            .then(res => {
                setUser(() => res.data)
            })
            .catch(err => console.log(err))
    }, [])

    function addBounty(firstName, lastName, bounty){
        axios.post('/bounties', {
            firstName,
            lastName,
            bounty,
            isAlive: true
        })
        .then(resp => setBounties(prevBounties => ([...prevBounties, resp.data])))
        .catch(err => console.log(err))
    }

    console.log("App rendered")

    
    return (
        <>
        {user && <Header user={user}/>}
        {bounties && 
            <div className='contentContainer'>
                <BountyForm addBounty={addBounty}></BountyForm>
                <Display bounties={bounties}/>
            </div>}
        </>
    )

}

export default App