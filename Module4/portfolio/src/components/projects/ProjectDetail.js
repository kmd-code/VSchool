import React from 'react'
import projectsData from './projectsData'
import {useParams, Link} from 'react-router-dom'

function ProjectDetail(props) {
    const {projectId} = useParams()

    const thisProject = projectsData.find(project => project._id === projectId)

    return (
        <div className="content project">
            <div className="projectContainer">
                <img alt={thisProject.thumbnail} src={thisProject.thumbnail}/>
                <h1>{thisProject.title}</h1>
                <h3><a target="_blank" rel="noopener noreferrer" href={thisProject.url}>{thisProject.url}</a></h3>
                <h3>Built with: {thisProject.languages}</h3>
                <p>{thisProject.description}</p>
                <br />
            </div>
            <div className="projectContainer takeMeBack">
                <Link to="/projects">Take Me Back</Link>
            </div>
        </div>   
    )
}

export default ProjectDetail