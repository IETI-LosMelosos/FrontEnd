import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import logo from "../images/logo.png";

const styles = makeStyles({

})

export function AboutUs() {
  const classes = styles();
  return (
    <Box fullwidht>
      <img onClick={homebuttonClick} src={logo} alt="E-SUMERCE"  className={classes.logo} />
    </Box>   
  );
}


