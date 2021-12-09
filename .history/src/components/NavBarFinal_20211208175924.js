import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";

const CusntomButtons = styled(Button)({

})

export function NavBarFinal() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Button variant="contained" color="success" size="medium">HOME</Button>
        <Button variant="outlined" color="success" size="medium">PRODUCTOS</Button>
        <Button variant="outlined" color="success" size="medium">PRODUCTOS</Button>
        
                  <Box alignItems="center">
            <IconButton />
          </Box>
          <Box>zona usuario</Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBarFinal;
