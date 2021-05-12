import React from 'react'

import { 
    CssBaseline, 
    Typography, 
    AppBar, 
    Toolbar, 
    Drawer, 
    Divider, 
    MenuList, 
    MenuItem,
    Paper,
    TextField,
    Grid,
    Button
} from '@material-ui/core'

export default function Jobs(props) {
    return (
        <>
            <CssBaseline>
                <Paper>
                    <Toolbar>
                        <Typography>Job Entry</Typography>
                    </Toolbar>
                    <main>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    required
                                    id="companyName"
                                    name="companyName"
                                    label="Company"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    required
                                    id="dateApplied"
                                    name="dateApplied"
                                    label="Date"
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    label="Job Title"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    label="Link to Job Listing"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    label='Hiring Manager'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <input
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="raised-button-file"
                                type="file"
                            />
                            <label htmlFor="raised-button-file">
                                <Button 
                                    variant="outlined" 
                                    component="span"
                                    fullWidth    
                                >
                                Upload Resume Used
                                </Button>
                            </label> 
                            </Grid>
                        </Grid>
                    </main>
                </Paper>
                <Divider />
                <Paper>
                    This is where Jobs will be mapped to cards
                </Paper>
            </CssBaseline>
        </>
    )
}
