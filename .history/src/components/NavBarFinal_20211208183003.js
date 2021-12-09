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
    }
  })
);


export function NavBarFinal() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="">
        <Toolbar>
          <box
        <img src={logo} alt="E-SUMERCE"  className={classes.logo} />
        <CustomButtons variant="contained" color="success" size="medium" >HOME</CustomButtons>
        <CustomButtons variant="contained" color="success" size="medium" >PRODUCTOS</CustomButtons>
        <CustomButtons variant="contained" color="success" size="medium" >VENDEDORES</CustomButtons>

        <CustomButtons variant="contained" color="success" size="medium" >LOGIN</CustomButtons>
        
        </Toolbar>
      </AppBar>
    </Box>
    
  );
}
export default NavBarFinal;
