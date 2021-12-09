import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, textAlign } from "@mui/system";
import logo from "../images/logo.png";

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
      maxWidth: 200,
      marginRight: '10px',
      alignContent: 'center',
      padding: 10   
    },
    centerBox: {
      height: 100,
      display: "flex",
      border: "1px solid black",
      padding: 8,
      justifyContent: "flex-end",
      alignItems: "flex-end"
    },
    tittle{
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
          <img src={logo} alt="E-SUMERCE"  className={classes.logo} />
          <CustomButtons variant="contained" size="medium" onClick={homebuttonClick}>HOME</CustomButtons>
          <CustomButtons variant="contained" size="medium" >PRODUCTOS</CustomButtons>
          <CustomButtons variant="contained" size="medium" >CAMPESINOS</CustomButtons>
          <Typography variant="h6" className="classes.tittle ></Typography>
          <CustomButtons variant="contained" size="medium" onClick={loginbuttonClick} >LOGIN</CustomButtons>  
        </Toolbar>
      </AppBar>
    </Box>
    
  );
}
export default NavBarFinal;
