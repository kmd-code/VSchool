import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles"

import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded'


export default function Issues(props){

    console.log(props.issues[0].title)

    let title = props.issues[0].title
    let comments = props.issues[0].comments

    return (
        <Paper>
            {title}
            {comments}
        </Paper>
    )
}