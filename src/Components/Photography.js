import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { Photos } from '../data/photographyData';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
 height: '60vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    //height: 3,
    //width: 18,
    //background: theme.palette.common.white,
    //position: 'absolute',
    //bottom: -2,
    //left: 'calc(50% - 9px)',
    //transition: theme.transitions.create('opacity'),
  },
}));



export default function Photography() {
  return (
    <div>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap', }}>
        {Photos.map((image) => (
         
              <ImageIconButton
                key={image.title}
                style={{
                  width: image.width,
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 40%',
                    backgroundImage: `url(${image.url})`,
                  }}
                />
              </ImageIconButton>
        ))}
          </Box>
          </div>
  );
}