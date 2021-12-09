import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export function NavBarFinal() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box>zona general</Box>
          <Box>zona central</Box>
          <Box>zona usuario</Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBarFinal;
