import React, {useContext} from 'react'
import {IssueContext} from './context/issueContext'

export default function Issues(props){
    const {issues, getIssues} = useContext(IssueContext)

    return (
        <div>
        <h1>This is the Issues</h1>
        <button onClick={getIssues}>Get Issues</button>
        </div>
    )
}