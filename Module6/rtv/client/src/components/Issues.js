import React, { useState, useContext } from 'react'
import { makeStyles } from "@material-ui/core/styles"
import {UserContext} from './context/userContext'
import axios from 'axios'


import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import ButtonGroup from '@material-ui/core/ButtonGroup'

import {ThumbUp, ThumbDown, DeleteForever} from '@material-ui/icons'

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
        padding: '20px',
    },
    textfield: {
        width: '100%',

    },
    existingComment: {
        width: '100%',
        height: '30px', 
        padding: '10px 10px',
        margin: '10px 0px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        '@media (max-width: 780px)' : {
            fontSize: '12px',
            height: 'auto'
        }     
    },
    title: {
        '@media (max-width: 450px)' : {
            fontSize: '30px'
        }
    },
    desc: {
        '@media (max-width: 450px)' : {
            fontSize: '16px'
        }
    }
}))

export default function Issues(props){

    const classes = useStyles()
    const userState = useContext(UserContext)

    const [commentState, setComments] = useState(props.issue.comments)
    const [commentText, setCommentText] = useState({comment: ""})
    

    let {title, description} = props.issue

    let comments = commentState.map((comment) => {
        const user = comment.postingUser
        const description = comment.comment
        const userId = comment.user

        return (
            <Paper key={comment._id}>
                <Typography className={classes.existingComment} variant='body1'>
                   {`${user} : ${description}`}
                {userId === userState.user._id ? 
                    <Button 
                        className={classes.deleteButton} 
                        onClick={(e) => deleteButton(e, comment._id)}
                        startIcon={<DeleteForever />} 
                        style={{color: 'red'}}
                        />   
                        : 
                            ""}
                </Typography>
            </Paper>
        )
    })

    // function timeStamp(utcTime){
    //     const time = new Date(utcTime)

    //     const month = time.getMonth()
    //     const day = time.getDay()
    //     const hour = time.getHours()
    //     const minute = time.getMinutes()

    //     const monthArr = [
    //         "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    //     ]

    //     return (
    //         <>{`${monthArr[month]} ${day}, ${hour}:${minute}`}</>
    //     )
    // }

    function submitComment(e) {
        e.preventDefault()
        let issueId = props.issue._id
            if(commentText.comment !== ''){
                userAxios.post(`/api/issues/${issueId}/comment`, commentText)
                    .then(res => {
                    let comment = res.data
                    setComments(prev => [...prev, comment])
                    setCommentText({comment: ""})
                    })
                    .catch(err => console.log(err))
                }
            else {
                alert("Please Enter a Comment")
            }
            
    }

    function deleteButton(e, id) {
        e.preventDefault()
        userAxios.delete(`/api/issues/${props.issue._id}/comment/${id}`)
            .then(res => {
                setComments(res.data.comments)
            })
            .catch(err => {
                console.log(err)
            })
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
            <Typography className={classes.title} variant='h4'>
                {title}
            </Typography>

            <Typography className={classes.desc} variant='subtitle1'>
                {description}
            </Typography>

            <Container className={classes.commentCont}>
                {comments}
            </Container>

                <form onSubmit={(e) => submitComment(e)}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    label="Comment..."
                    autoFocus
                    fullWidth
                    className={classes.textfield}
                    onChange={handleChange}
                    name='comment'
                    value={commentText.comment}  
                />
                </form>

            <Container>
                <ButtonGroup>
                    <Button
                        startIcon={<ThumbUp />}
                        style={{color: 'green'}}
                    >
                    (5)
                    </Button>
                    <Button
                        startIcon={<ThumbDown />}
                        style={{color: 'red'}}
                    >
                    (-4)
                    </Button>
                </ButtonGroup>
            </Container>

        </Paper>
    )
}