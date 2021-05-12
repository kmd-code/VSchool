import React from 'react'
import { Typography, Grid, Button, TextField, Container } from '@material-ui/core'
import { DatePicker } from '@material-ui/pickers'

export default function JobForm() {
    return (
        <>
        <Container className={classes.container} maxWidth='md'>
            <Grid container spacing={4}>
                <Grid item>
                    <Card className={classes.form}>

                    </Card>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}
