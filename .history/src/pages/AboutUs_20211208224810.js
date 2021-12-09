import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import logo from "../images/logo.png";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      flexGrow: 1,
      maxWidth: 200,
      padding: 5,
      align: 'center' 
    },
    tittle: {
      flexGrow: 1
    }
  })
);
export function AboutUs() {

  const classes = useStyles();
  return (
    <Box fullwidht sx={{padding: 1, margin: 1, alignItems: 'center'}}>
      <img  src={logo} alt="E-SUMERCE"  className={classes.logo}/>
      <Typography>Es un emprendimiento fundado por estudiantes de la Escuela Colombiana de Ingenieria Julio Garavito con la intencion de ayudar a conectar al campo colombiano con sus ciudadanos y de esta manera apoyar al campesino mas directamente.</Typography>
      <Typography>Unete a nosotros y apoya el campo colombiano</Typography>
      
    </Box>   
  );
}


