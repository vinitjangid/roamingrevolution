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
        alignItems: 'center',
        backgroundImage: 'https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400'
    },
    box: {
        border: '2px solid',
        borderRadius: '20px',
        boxShadow: '3px 3px 3px 3px #C0C0C0',
        minHeight: '25em',
        width: '25em',
        backgroundImage: 'https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400',
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
                                
                            <img src='https://media3.giphy.com/media/V4NSR1NG2p0KeJJyr5/giphy.gif?cid=790b7611c62261a8c91b0818808da33b8dabf834baf5d800&rid=giphy.gif&ct=g' alt='img'/>
                                
                                
                                    <Button varient='contained'>
                                        Professional
                                    </Button>
                                    <Box >
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
        </Fragment>
    )
}

export default TwoCards;