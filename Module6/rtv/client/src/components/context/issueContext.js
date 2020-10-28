import React, {useState} from 'react'
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

    const getIssues = async () => {
        try {
            const resp = await userAxios.get('/api/issues')
            setIssueState(resp.data)
        } catch (err) {
            console.log(err)
        }
    }

    // function getIssues(){
    //     userAxios.get('/api/issues')
    //         .then(res => {
    //             setIssueState(res.data)
    //             console.log(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    function postIssue(input){
        userAxios.post('/api/issues', input)
            .then(res => {
                const issues = res.data
                setIssueState((prev) => [...prev, issues])
                console.log(issueState)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <IssueContext.Provider value={{
            ...issueState,
            getIssues,
            postIssue
        }}>
            {props.children}
        </IssueContext.Provider>
    )
}

export {IssueContextProvider, IssueContext}