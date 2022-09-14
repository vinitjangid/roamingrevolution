import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useRef } from 'react';
import { blue } from '@mui/material/colors';
import Explore from './Explore';
import TwoCards from './TwoCards';
import ParticlesBg from "particles-bg";
import NavBar from './NavBar';



const useStyles = makeStyles({
    root: {
        minHeight: '40em',
        position: 'relative',
        backgroundImage: 'https://cdn.pixabay.com/photo/2020/06/04/18/01/view-5259875_960_720.jpg',
        backgroundColor: blue,
    },
});

function Landing() {
    const ref = useRef(null);
    const backgroundImage = 'https://cdn.pixabay.com/photo/2020/06/04/18/01/view-5259875_960_720.jpg';
    const classes = useStyles();
    
    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
      };
    
    
  return (
      <React.Fragment>
          <ParticlesBg type="square" bg={true} />
          <Box mt={40} mb={30}>
              <div className={classes.root}>
                  <Typography variant='h1'>
                      Curosity
                  </Typography>
                  <Typography variant='h5'>
                  It will conquer fear even more than bravery will.
                  </Typography>
                  <Box mt={10} >
                  <Button variant="outlined" onClick={()=>handleClick()}>
                  Don't Click
              </Button>  
                  </Box>
                  
                             
              </div>
              <hr />
              <div ref={ref}></div>
              {/*<NavBar /> */}
              <TwoCards />
              
              

          </Box>     
    </React.Fragment>
  )
}

export default Landing