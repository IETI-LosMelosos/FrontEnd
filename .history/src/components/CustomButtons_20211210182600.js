import React from 'react';
import {Button} from '@material-ui/core';
import { styled} from '@mui/material/styles';
import {withStyles} from '@material-ui/core/styles';

const CustomButtons = styled(Button)({
    margin: '2px',
    fontSize: 12,
    border: '1px solid',
    backgroundColor: '#27b32e',
    borderColor: '#27b32e',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#33d43b',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#42ff4c',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
    
  });

  export function CustomBtnAboutUs(props) {
    return (
        <CustomButtons variant="contained" size="medium">{props.txt}</CustomButtons>
    )
    }