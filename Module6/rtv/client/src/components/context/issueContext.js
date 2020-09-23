import React, {useState, useEffect} from 'react'
import axios from 'axios'

const IssueContext = React.createContext()
const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function IssueContextProvider(props){
    const [issueState, setIssueState] = useState()

    function getIssues(){
        userAxios.get('/api/issues')
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <IssueContext.Provider value={{
            ...issueState,
            getIssues
        }}>
            {props.children}
        </IssueContext.Provider>
    )
}

export {IssueContextProvider, IssueContext}