import {createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

export function AboutUs() {
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
          <Box component="div" sx={{ width: '40%' }}>
            <SearchIcon sx={{ fontSize: 50, color: '#27b32e', alignSelf: 'center'}}/>
            <TextField id="filled-basic" variant="filled"  label="Search..."  sx={{ width: '90%'  }} />
          </Box>
          <Typography className={classes.tittle} ></Typography>
          <IconButton padding="1" onClick={AboutUsClick}>
              <InfoIcon sx={{ fontSize: 35, color: '#27b32e'}} onClick={shoopingCartClick} />
              <Typography sx={{ fontSize: 15, color: '#27b32e',alignSelf: 'center',fontWeight: 'bold'}} >About us</Typography>
          </IconButton>
          <CustomButtons variant="contained" size="medium" onClick={loginbuttonClick} >LOGIN</CustomButtons>  
          <IconButton>
            <ShoppingCartIcon sx={{ fontSize: 35, color: '#27b32e'}} onClick={shoopingCartClick} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    
  );
}


