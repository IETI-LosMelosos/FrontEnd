import {createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import '../css/App.css';
import {GridAbout} from '../components/GridAbout'
import {NavbarAboutUs} from '../components/NavbarAboutUs';

import TrendingUpIcon from '@material-ui/icons/TrendingUp';

const theme = createTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

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
  const classes = styles(); 
  return (
    <div className="aboutUs">
      <ThemeProvider theme={theme}>
        <NavbarAboutUs/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             E-Sumerce
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            Es un emprendimiento fundado por estudiantes de la Escuela Colombiana de Ingenieria Julio Garavito con la intencion de ayudar a conectar al campo colombiano con sus ciudadanos y de esta manera apoyar al campesino mas directamente.

          </Typography>
          </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
        <GridAbout icon={<TrendingUpIcon style={{fill: "#1880A6", height:"125", width:"125"}}/>}  title="Stats" btnTitle="Show me More" />
        </div>
        
      </ThemeProvider>
    </div>
  );
}


