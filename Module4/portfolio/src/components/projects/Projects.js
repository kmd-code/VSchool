import React from 'react'
import projectsData from './projectsData'

import {Link} from 'react-router-dom'

function Projects(props){
    
    const projects = projectsData.map(item => {
        return (  
            <Link key={item._id} to={`/projects/${item._id}`}>
            <div className="projectCard">
                <img alt={item.title} src={item.thumbnail}/>
                <div>
                    <h2>{item.title}</h2>
                    <p>Built with: {item.languages}</p>
                    <br />
                    <p>- Click for more information -</p>
                </div>
            </div> 
            </Link> 
        )
    })

    return (
        <div className="projectsContainer">
            {projects}
        </div>
    )
}

export default Projects