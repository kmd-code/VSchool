import React, {useState} from 'react'
import { makeStyles } from "@material-ui/core/styles"

import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    inputForm: {
        paddingTop: "10px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    textInput: {
        width: '90%',
        marginTop: "5px",
        marginBottom: "5px",
    },
    submitButton: {
        width: '40%',
        marginTop: '5px',
        marginBottom: '10px',
    },
    accordionForm: {
        marginTop: '10px',
    },
}))

export default function InputForm(props){
    const classes = useStyles()

    const {postIssue} = props

    const [input, setInput] = useState({
        title: "",
        description: "",
        upvotes: 0,
        downvotes: 0
    })

    function handleChange(e){
        e.preventDefault()
        const {name, value} = e.target
        setInput(prev => ({...prev, [name]: value}))
    }

    return (
        <Accordion className={classes.accordionForm} variant='outlined'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                            >
                        <Typography className={classes.issueBoxTitle} variant='h6'>Create New Issue</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Paper className={classes.inputForm} variant='outlined'>
                    
                        <TextField 
                            id='outlined-basic' 
                            className={classes.textInput} 
                            variant='outlined' 
                            label='Super Important Issue' 
                            required
                            size='small'
                            name="title"
                            value={input.title}
                            onChange={handleChange}
                        />
                        <TextField
                            id='outlined-basic'
                            className={classes.textInput}
                            variant='outlined'
                            label='Super Important Description'
                            required
                            multiline
                            rowsMax={3}
                            name="description"
                            value={input.description}
                            onChange={handleChange}
                            
                        />
                    <Button 
                        onClick={() => {
                            if (input) {
                                postIssue(input)
                                setInput({
                                    title: "",
                                    description: ""
                                })
                            }
                            else {
                                alert("Please enter an issue")
                            }
                        }} 
                        variant='outlined' 
                        className={classes.submitButton}>
                            Submit
                    </Button>
                </Paper>
                </AccordionDetails>
        </Accordion>
    )
}