import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { styled, alpha } from '@mui/material/styles';
import logo from "../images/logo.png";
import InputBase from '@mui/material/InputBase';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';


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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      flexGrow: 1,
      maxWidth: 190,
      padding: 5   
    },
    tittle: {
      flexGrow: 1
    }
  })
);


export function NavBarFinal() {
  const loginbuttonClick = (event)=>{
    event.preventDefault()
    window.location.pathname="/login"
  }

  const homebuttonClick = (event)=>{
    event.preventDefault()
    window.location.pathname=""
  }

  const shoopingCartClick = (event)=>{
    event.preventDefault()
    window.location.pathname="/shoopingcart"
  }

  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1, padding: 1 }}>
      <AppBar position="static" color="">
        <Toolbar sx={{ flexGrow: 1, padding: 1 }}>
          <IconButton>
            <img onClick={homebuttonClick} src={logo} alt="E-SUMERCE"  className={classes.logo} />
          </IconButton>
          <CustomButtons variant="contained" size="medium" >PRODUCTOS</CustomButtons>
          <CustomButtons variant="contained" size="medium" >CAMPESINOS</CustomButtons>
          <Typography className={classes.tittle} ></Typography>
          <Box component="div" sx={{ backgroundColor: 'gray', width: '40%' }}>
            <SearchIcon sx={{ fontSize: 30, color: '#27b32e'}}/>
            <TextField fullWidth label="fullWidth" id="fullWidth" sx={{ backgroundColor: 'gray', width: '100%' }} />
          </Box>
          <Typography className={classes.tittle} ></Typography>
          <CustomButtons variant="contained" size="medium" onClick={loginbuttonClick} >LOGIN</CustomButtons>  
          <IconButton>
            <ShoppingCartIcon sx={{ fontSize: 30, color: '#27b32e'}} onClick={shoopingCartClick} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    
  );
}
export default NavBarFinal;
