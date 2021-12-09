import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import logo from "../images/logo.png";

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
export function AboutUs() {

  const classes = useStyles();
  return (
    <Box fullwidht sx={{backgroundColor: 'gray', padding: 1}}>
      <img src={logo} alt="E-SUMERCE"  className={classes.logo} />
    </Box>   
  );
}


