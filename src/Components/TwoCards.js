import { Box, Button, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import Dubai from '../assets/dubai.jpg';



const useStyles = makeStyles({
    root: {
        minHeight: '45em',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        border: '2px solid',
        borderRadius: '20px',
        boxShadow: '3px 3px 3px 3px #C0C0C0',
        minHeight: '25em',
        width: '25em',
        backgroundImage: 'https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400'
    }
});

function TwoCards() {
    const classes = useStyles();

    return (
        <Fragment>
            <div className={classes.root}>
            <Box >
                
                    <Grid container spacing={30}>
                        <Grid item xs={6}>
                            <Box className={classes.box}>
                                <h1>Tech</h1>
                                <Box >
                                    <Button varient='contained'>
                                        Professional
                                    </Button>
                            </Box>
                            </Box>

                        </Grid>
                        <Grid item xs={6}>
                            <Box className={classes.box}>
                                <h1>Adventure</h1>
                            </Box>

                        </Grid>
                    </Grid>
                
            </Box>
            </div>
            <hr />
        </Fragment>
    )
}

export default TwoCards;