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
      <Typography></Typography>
    </Box>   
  );
}


