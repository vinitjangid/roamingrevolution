import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import { Typography, TextField } from '@mui/material';
import { FaGlobeAmericas } from 'react-icons/fa';

export default function Footer() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: '#fff5f8' }}
    >
      <Container sx={{ my: 3, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 40 }}
            >
              
              <Typography><FaGlobeAmericas/> &nbsp; Roaming Revolution 2022</Typography>
              
              
            </Grid>
          </Grid>
          
        </Grid>
      </Container>
    </Typography>
  );
}