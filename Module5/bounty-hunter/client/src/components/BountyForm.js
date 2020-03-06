import React, {useState} from 'react'

function BountyForm(props){
    const initInputs = {firstName: props.firstName || "", lastName: props.lastName || "", bounty: props.bounty || ""}
    const [formData, setFormData] = useState({initInputs})
    
    function handleChange(e){
        const {name, value} = e.target
        setFormData(prevForm => ({...prevForm, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        const {firstName, lastName, bounty} = formData
        props.addBounty(firstName, lastName, bounty)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                name='firstName' 
                placeholder='First Name...'
                value={formData.firstName}
                onChange={handleChange}
            ></input>
            <input 
                name='lastName' 
                placeholder='Last Name...'
                value={formData.lastName}
                onChange={handleChange}
            ></input>
            <input 
                name='bounty' 
                type='number' 
                placeholder='Bounty...'
                value={formData.bounty}
                onChange={handleChange}
            ></input>
            <button>Submit</button>
        </form>
    )
}

export default BountyForm