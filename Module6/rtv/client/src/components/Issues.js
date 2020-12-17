import React, { useState, useContext } from 'react'
import { makeStyles } from "@material-ui/core/styles"
import {UserContext} from './context/userContext'
import axios from 'axios'


import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const useStyles = makeStyles((theme) => ({
    issueContainer: {
        height: 'auto',
        margin: '15px 0px ',
        padding: '12px'
    },
    commentBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textfield: {
        width: '100%',
    },
    existingComment: {
        width: '100%',
        padding: '5px 0px',
        margin: '5px 0px',
        
    }
}))

export default function Issues(props){

    const classes = useStyles()
    const userState = useContext(UserContext)

    const [commentState, setComments] = useState(props.issue.comments)
    const [commentText, setCommentText] = useState({comment: ""})
    

    let title = props.issue.title

    let comments = commentState.map((comment) => {
        const user = comment.postingUser
        const description = comment.comment
        const userId = comment.user
        const time = comment.timeStamp
        return (
            <Paper key={comment._id}>
                <Typography variant='body1'>
                    {user}: {description}
                {userId === userState.user._id ? <Button>Test</Button> : ""}
                </Typography>
            </Paper>
        )
    })

    function submitComment(e) {
        e.preventDefault()
        let issueId = props.issue._id
            if(commentText.comment !== ''){
                userAxios.post(`/api/issues/${issueId}/comment`, commentText)
                    .then(res => {
                    let comment = res.data
                    setComments(prev => [...prev, comment])
                    console.log(res.data)
                    })
                    .catch(err => console.log(err))
                }
            else {
                alert("Please Enter a Comment")
            }
            setCommentText(() => ({comment: ""}))
            console.log(commentText)
    }

    function handleChange(e){
        const {name, value} = e.target
        setCommentText(prev => ({...prev, [name]: value}))
    }

    return (
        <Paper 
            key={props.issue._id}
            className={classes.issueContainer}
        >
            <Typography variant='h5'>
                {title}
            </Typography>
            <Container
                className={classes.existingComment}
            >
            {comments}
            </Container>
            <Container className={classes.commentBox}>
                <form onSubmit={(e) => submitComment(e)}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    label="Comment..."
                    autoFocus
                    className={classes.textfield}
                    onChange={handleChange}
                    name='comment'
                    value={commentText.text}  
                />
                </form>
            </Container>
        </Paper>
    )
}